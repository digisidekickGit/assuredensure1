const puppeteer = require("puppeteer");
const ejs = require("ejs");

// const htmlContent = fs.readFileSync("index.html", "utf8");

// const htmlContent = "";

const generatePdf = async (req, res) => {
  try {
    const browser = await puppeteer.launch({
      headless: "new",
    });

    const page = await browser.newPage();
    // const htmlContent = await ejs.renderFile("views/pdf.ejs", {
    //   Data: [],
    // });

    await page.setContent(<div>Hello</div>);

    const pdfBuffer = await page.pdf({
      format: "A4",
      printBackground: true,
    });

    await browser.close();

    res.setHeader("Content-Disposition", "attachment; filename=myfile.pdf");
    res.setHeader("Content-Type", "application/pdf");
    res.send(pdfBuffer);
  } catch (error) {
    console.error("Error generating PDF:", error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  generatePdf,
};
