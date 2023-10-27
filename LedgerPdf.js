const PDFDocument = require("pdfkit");
const fs = require("fs");
const LedgerPdf = async (req, res, next) => {
  const doc = new PDFDocument({
    margins: { top: 5, bottom: 5, left: 50, right: 50 },
  });
  const addText = (text, startX, startY, rectWidth, textAlign = "left") => {
    doc
      .fontSize(11)
      .font("Helvetica")
      .fillColor("#000")
      .text(text, startX, startY, {
        width: rectWidth - 20,
        align: textAlign,
        lineGap: 4,
      });
  };
  function DrawBox(x, y, w, h, fillColor = "#175F8A") {
    // Draw a filled green rectangle at coordinates (100, 100) with a width of 200 and height of 100
    doc.fillColor(fillColor); // Green color

    doc.rect(x, y, w, h).fill();
  }

  function writeText(x, y, TITLE) {
    doc.fillColor("#FFF"); // Green color
    doc.fontSize(20);
    doc.text(TITLE, x, y, {
      align: "center",
    });
  }
  function drawRectangle(x, y, w, h, fillColor, borderColor) {
    doc.rect(x, y, w, h).stroke();
  }

  function drawCell(
    text,
    x,
    y,
    width,
    cellHeight,
    textAlign,
    fortWeight,
    color = "#000"
  ) {
    doc.fillColor(color);
    doc.font(fortWeight).text(text, x, y, {
      width,
      height: cellHeight,
      align: textAlign,
      lineGap: 2,
    });
  }
  function drawCellLink(
    text,
    x,
    y,
    width,
    cellHeight,
    textAlign,
    fortWeight,
    color = "#000",
    Link
  ) {
    doc.fillColor(color);
    doc
      .font(fortWeight)
      .text(text, x, y, {
        width,
        height: cellHeight,
        align: textAlign,
        lineGap: 2,
      })
      .link(x, y, width, cellHeight, Link);
  }
  function CreateTable(
    tableX = 20,
    tableY = 220,
    cellMargin = 20,
    fontSize = 9
  ) {
    // Define table data
    let tableYHeight = tableY;
    const columnWidths = [14, 20, 14, 14, 8, 8, 20, 8]; // 30%, 40%, 30%
    const totalWidth = doc.page.width - 2 * tableX;
    const totalPercentage = columnWidths.reduce((sum, width) => sum + width, 0);
    const columnWidthFactors = columnWidths.map((width) => {
      const abc = (width / totalPercentage) * totalWidth;
      return Math.round(abc);
    });

    let cellHeight = 17;

    doc.fontSize(fontSize);

    for (let i = 0; i < tableData.length; i++) {
      if (tableYHeight + cellHeight > doc.page.height) {
        doc.addPage();
        CreateTable(30, 20, 20, 8, [tableData[0], ...tableData.splice(i)]);

        return;
      }

      for (let j = 0; j < tableData[i].length; j++) {
        const cellText = tableData[i][j];
        const cellX =
          tableX +
          columnWidthFactors.slice(0, j).reduce((sum, width) => sum + width, 0);
        const cellY = tableY + i * cellHeight;

        // Draw cell border
        doc
          .rect(cellX - 0.3, cellY, columnWidthFactors[j], cellHeight)
          .lineWidth(1.5)
          .stroke();

        // Draw cell text with word wrap
        if (i == 0) {
          drawCell(
            cellText,
            cellX + 5,
            cellY + 5,
            columnWidthFactors[j] - 10,
            cellHeight,
            "center",
            "Helvetica-Bold"
          );
        } else if (j == 4 && i > 0) {
          drawCell(
            cellText,
            cellX + 5,
            cellY + 5,
            columnWidthFactors[j] - 10,
            cellHeight,
            "center",
            "Helvetica-Bold",
            "red"
          );
        } else if (j == 5 && i > 0) {
          drawCell(
            cellText,
            cellX + 5,
            cellY + 5,
            columnWidthFactors[j] - 10,
            cellHeight,
            "center",
            "Helvetica-Bold",
            "green"
          );
        } else {
          drawCell(
            cellText,
            cellX + 7,
            cellY + 5,
            columnWidthFactors[j] - 10,
            cellHeight,
            "left",
            "Helvetica"
          );
        }
      }

      tableYHeight += cellHeight; // Move to the next row
    }
  }

  const { myReport, Balance } = req;
  const { Pos, EndDate, StartDate } = req.query;

  const tableData = [
    [
      "Date",
      "Particular",
      "Voucher Type",
      "Bill Number",
      "Dr.",
      "Cr.",
      "Narration",
      "Balance",
    ],
    ...myReport,
  ];

  // EndDate = "2023-09-29";
  // StartDate = "2023-09-01";

  const UserDetails = JSON.parse(Pos);
  // const UserDetails = {};

  const Address = `${UserDetails?.rest?.WDAddress ?? ""} ${
    UserDetails?.rest?.WDLocality ?? ""
  }  ${UserDetails?.rest?.WDCity ?? ""} ${UserDetails?.rest?.WDState ?? ""} - ${
    UserDetails?.rest?.WDPincode ?? ""
  }`;
  let id = `${UserDetails?.Name}${UserDetails?._id}`;
  try {
    const writeStream = fs.createWriteStream(
      `${__dirname}/PDFPayment/${id}.pdf`
    );
    doc.pipe(writeStream);

    DrawBox(19, 20, 573, 35);
    writeText(20, 30, "Ledger");
    drawRectangle(20, 70, 200, 90);

    doc.moveDown();
    // addText("09876", 35, 105, 200); // Addresses
    // doc.moveDown();
    drawRectangle(230, 70, 350, 90);

    addText(UserDetails?.Name, 35, 85, 200);
    doc.moveDown();
    addText(Address, 35, 105, 200); // Addresses

    addText("Processing Period:", 240, 80, 200);
    addText("PAN No:", 240, 95, 200);
    addText("GST No:", 240, 110, 200);
    addText("Current Balance:", 240, 125, 200);
    addText(
      `${StartDate.split("-").reverse().join("-")} to ${EndDate.split("-")
        .reverse()
        .join("-")}`,
      380,
      80,
      200,
      "right"
    );
    addText(
      UserDetails?.rest?.PanNumber?.toUpperCase() ?? "",
      380,
      95,
      200,
      "right"
    );
    addText(
      UserDetails?.rest?.GSTINNumber?.toUpperCase() ?? "",
      380,
      110,
      200,
      "right"
    );
    addText(`${Balance}`, 380, 125, 200, "right");

    // 19, 20, 573, 125
    DrawBox(19, 170, 573, 35);
    writeText(20, 180, "Details");

    doc.moveDown();

    CreateTable();

    doc.end();
    writeStream.on("finish", () => {
      fs.readFile(__dirname + "/PDFPayment" + `/${id}.pdf`, (err, data) => {
        if (err) {
          console.error(err);
          res.status(500).send("Internal Server Error");
          return;
        }

        // Send the file as a buffer
        return res
          .set({
            "Content-Type": "application/octet-stream",
            "Content-Disposition": `attachment; filename=${id}.pdf`, // Replace with the desired filename
          })
          .send(data);
      });
    });
    writeStream.on("error", (err) => {
      console.error(err);
      res.status(500).send("Internal Server Error");
    });

    doc.on("error", (err) => {
      console.error(err);
      return res.status(500).send("Internal Server Error");
    });
  } catch (error) {

    res.status(500).json(error);
  }
};

module.exports = { LedgerPdf };
