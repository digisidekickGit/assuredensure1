const PDFDocument = require("pdfkit");

const fs = require("fs");
const path = require("path");

const generatePDFForSale = async (req, res, next) => {
  try {
    const doc = new PDFDocument({
      size: "A4", // Set the page size to A4
    });
    const { tableData, Broker, EnterDate, tableSummery } = req;
    console.log(
      tableData,
      Broker,
      EnterDate,
      tableSummery,
      " tableData, Broker, EnterDate, tableSummery"
    );
    const { id } = req.params;

    const Broker_NAME = `${Broker?.ReportingTo?.Name ?? ""}`;

    // 1 = Daily , 7 Days = Weekly, 10 = 10 Days , 15 = 15days , 30 = 1 Monthly

    // let BrokerPayOutCycle = "Daily";

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
    function drawTableCellHeader(text, x, y, width, cellHeight, align) {
      doc.fillColor("#000"); // Green color
      let myBrokerition = y;

      if (Array.isArray(text)) {
        text.map((ele) => {
          doc.text(ele, x, myBrokerition, {
            width,
            height: cellHeight,
            align: align,
            valing: "center",
            lineGap: 2, // Adjust line spacing as needed
          });
          myBrokerition += 15;
        });
      } else {
        doc.text(text, x, myBrokerition, {
          width,
          height: cellHeight,
          align: "center",
          valing: "center",
          lineGap: 2, // Adjust line spacing as needed
        });
      }
    }

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

    function CreateTable(
      tableX = 30,
      tableY = 50,
      cellMargin = 20,
      fontSize = 8,
      tableData = []
    ) {
      // Define table data
      let tableYHeight = tableY;
      const columnWidths = [4, 12, 18, 24, 8, 9, 6, 14, 10]; // 30%, 40%, 30%
      const totalWidth = doc.page.width - 2 * tableX;
      const totalPercentage = columnWidths.reduce(
        (sum, width) => sum + width,
        0
      );
      const columnWidthFactors = columnWidths.map((width) => {
        const abc = (width / totalPercentage) * totalWidth;
        return Math.round(abc);
      });

      //   let cellWidth = (doc.page.width - 2 * tableX) / tableData[0].length;

      let cellHeight = fontSize + 20;
      doc.fontSize(fontSize);

      for (let i = 0; i < tableData.length; i++) {
        if (tableYHeight + cellHeight > doc.page.height) {
          doc.addPage();
          CreateTable(30, 20, 20, 8, [tableData[0], ...tableData.splice(i)]);
          return;
        }

        if (i === 0) {
          // Green color
          for (let j = 0; j < tableData[i].length; j++) {
            const cellText = tableData[i][j];
            const cellX =
              tableX +
              columnWidthFactors
                .slice(0, j)
                .reduce((sum, width) => sum + width, 0);
            const cellY = tableY + i * cellHeight;
            doc
              .rect(cellX, cellY, columnWidthFactors[j], cellHeight)
              .fillColor("#1789a3")
              .fill();

            doc
              .rect(cellX, cellY, columnWidthFactors[j], cellHeight)
              .lineWidth(2)
              .strokeColor("#000000")
              .stroke();
            // Draw cell text with word wrap
            drawTableCellHeader(
              cellText,
              cellX + 5,
              cellY + 5,
              columnWidthFactors[j] - 10,
              cellHeight,
              "center"
            ); // Adjust margins as needed
          }
        } else {
          for (let j = 0; j < tableData[i].length; j++) {
            const cellText = tableData[i][j];
            const cellX =
              tableX +
              columnWidthFactors
                .slice(0, j)
                .reduce((sum, width) => sum + width, 0);
            const cellY = tableY + i * cellHeight - 52;

            // Draw cell border
            doc
              .rect(cellX, cellY, columnWidthFactors[j], cellHeight)
              .lineWidth(1)
              .stroke();

            // Draw cell text with word wrap
            drawTableCellHeader(
              cellText,
              cellX + 5,
              cellY + 5,
              columnWidthFactors[j] - 10,
              cellHeight,
              "start"
            ); // Adjust margins as needed
          }
        }

        tableYHeight += cellHeight; // Move to the next row
        cellHeight = 80;
      }
    }

    function CreateCommotionTable(
      tableX = 20,
      tableY = 220,
      cellMargin = 20,
      fontSize = 9,
      tableData
    ) {
      // Define table data
      let tableYHeight = tableY;
      const columnWidths = [20, 10, 14, 14, 14, 14, 14, 14]; // 30%, 40%, 30%
      const totalWidth = doc.page.width - 2 * tableX;
      const totalPercentage = columnWidths.reduce(
        (sum, width) => sum + width,
        0
      );
      const columnWidthFactors = columnWidths.map((width) => {
        const abc = (width / totalPercentage) * totalWidth;
        return Math.round(abc);
      });

      let cellHeight = 17;

      doc.fontSize(fontSize);

      for (let i = 0; i < tableData.length; i++) {
        if (tableYHeight + cellHeight > doc.page.height) {
          doc.addPage();
          CreateCommotionTable(30, 20, 20, 8, [
            tableData[0],
            ...tableData.splice(i),
          ]);

          return;
        }

        for (let j = 0; j < tableData[i].length; j++) {
          const cellText = tableData[i][j];
          const cellX =
            tableX +
            columnWidthFactors
              .slice(0, j)
              .reduce((sum, width) => sum + width, 0);
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
          } else if (j === 0) {
            drawCell(
              cellText,
              cellX + 7,
              cellY + 5,
              columnWidthFactors[j] - 10,
              cellHeight,
              "left",
              "Helvetica"
            );
          } else {
            drawCell(
              cellText,
              cellX + 7,
              cellY + 5,
              columnWidthFactors[j] - 10,
              cellHeight,
              "right",
              "Helvetica"
            );
          }
        }

        tableYHeight += cellHeight; // Move to the next row
      }
    }
    let myPath = path.join(__dirname, "..", "PDFPayment", `${id}.pdf`);

    const writeStream = fs.createWriteStream(myPath);
    doc.pipe(writeStream);
    doc.page.width = 612;
    doc.page.height = 792;

    DrawBox(15, 20, 570, 35);
    writeText(20, 30, "Point Statement");
    drawRectangle(20, 70, 200, 150);
    addText(
      `${Broker["Salutation"] ?? ""} ${Broker["MiddleName"] ?? ""} ${
        Broker["Name"] ?? ""
      } ${Broker["LastName"] ?? ""}`,
      35,
      85,
      200
    );
    doc.moveDown();
    // addText(Formatid, 35, 105, 200); // Addresses
    // doc.moveDown();
    drawRectangle(230, 70, 350, 150);

    addText("Tele RM:", 240, 80, 200);
    // addText("Field RM:", 240, 100, 200);
    addText("Payout Period:", 240, 100, 200);
    addText("Processing Date: ", 240, 120, 200);
    addText("GST No:", 240, 140, 200);
    addText("PAN No:", 240, 160, 200);
    // addText("IBroker Certification Date:", 240, 180, 200);

    addText(Broker_NAME, 380, 80, 200, "right");
    // addText("Gaurav Chawla", 380, 100, 200, "right");
    // addText(BrokerPayOutCycle, 380, 100, 200, "right");
    addText(EnterDate, 380, 120, 200, "right");
    addText(Broker?.GSTINNumber?.toUpperCase() ?? "", 380, 140, 200, "right");
    addText(Broker?.PanNumber?.toUpperCase() ?? "", 380, 160, 200, "right");
    // addText("Jun 20, 2017", 380, 180, 200, "right");

    DrawBox(15, 230, 570, 35);
    writeText(20, 240, "Policy Summary");
    CreateCommotionTable(30, 280, 40, 8, tableSummery);

    DrawBox(15, 430, 570, 35);
    writeText(20, 440, "Policy Details");

    CreateTable(30, 480, 40, 8, tableData);

    doc.end();

    writeStream.on("finish", () => {
      fs.readFile(myPath, (err, data) => {
        if (err) {
          console.error(err);
          res.status(500).send("Internal Server Error");
          return;
        }

        // Send the file as a buffer
        return res
          .set({
            "Content-Type": "application/octet-stream",
            "Content-DisBrokerition": `attachment; filename=${id}.pdf`, // Replace with the desired filename
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
    console.log(error);
  }
};

module.exports = { generatePDFForSale };
