const { Builder, By, Key, until } = require("selenium-webdriver");
const ExcelJS = require("exceljs");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function main() {
  const driver = await new Builder().forBrowser("chrome").build();

  try {
    await driver.get("https://pos.insurancedekho.com/");

    // Simulate login and navigation
    const loginButton = await driver.findElement(By.id("login-button"));
    await loginButton.click();
    await driver.sleep(3000);

    const mobileNumberInput = await driver.findElement(By.id("mobileNumber"));
    await driver.sleep(3000);
    await mobileNumberInput.sendKeys("9837771016", Key.ENTER);

    rl.question("Please enter the OTP: ", async (otp) => {
      const otpCodeElement = await driver.wait(
        until.elementLocated(By.id("otpCode")),
        600000
      );
      await otpCodeElement.sendKeys(otp, Key.ENTER);
      rl.close(); // Close the readline interface
    });

    await driver.sleep(10000);

    const sellLink = await driver.wait(
      until.elementLocated(By.linkText("Sell")),
      600000
    );

    await sellLink.click();

    const BikeLink = await driver.wait(
      until.elementLocated(By.partialLinkText("Bike")),
      600000
    );

    await BikeLink.click();

    // Simulate dropdown interactions and generate data
    const makeModelDropdown = await driver.findElement(By.id("make_model"));
    await driver.executeScript(
      "arguments[0].scrollIntoView(true);",
      makeModelDropdown
    );
    await driver.executeScript("arguments[0].click();", makeModelDropdown);

    const makeModelOptions = await makeModelDropdown.findElements(
      By.tagName("option")
    );

    const data = [];

    for (let i = 1; i < makeModelOptions.length; i++) {
      await makeModelDropdown.sendKeys(Key.ENTER);
      await driver.sleep(1000);

      const searchInput = await driver.findElement(
        By.xpath(
          "/html/body/div[1]/div[5]/section/div/div/div/div/div/div[2]/div/form/div[2]/div[2]/div/div/div[1]/p/input"
        )
      );
      const optionText = await makeModelOptions[i].getText();
      await searchInput.sendKeys(optionText, Key.DOWN, Key.ENTER);

      await driver.sleep(1000);

      const variantDropdown = await driver.findElement(By.id("variant"));
      const variantOptions = await variantDropdown.findElements(
        By.tagName("option")
      );

      for (let j = 1; j < variantOptions.length; j++) {
        const variantText = await variantOptions[j].getText();
        data.push({ option: optionText, variant: variantText });
      }
    }

    // Generate Excel
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Dropdown Data");
    worksheet.columns = [
      { header: "Option", key: "option" },
      { header: "Variant", key: "variant" },
    ];
    data.forEach((item) => {
      worksheet.addRow(item);
    });

    await workbook.xlsx.writeFile("Output.xlsx");
  } catch (error) {
    console.error("Error:", error);
  } finally {
    // Uncomment the following line to close the browser after execution.
    // await driver.quit();
  }
}

async function getPcv() {
  const driver = await new Builder().forBrowser("chrome").build();

  try {
    await driver.get("https://pos.insurancedekho.com/");

    // Simulate login and navigation
    const loginButton = await driver.findElement(By.id("login-button"));
    await loginButton.click();
    await driver.sleep(3000);

    const mobileNumberInput = await driver.findElement(By.id("mobileNumber"));
    await driver.sleep(3000);
    await mobileNumberInput.sendKeys("9837771016", Key.ENTER);

    rl.question("Please enter the OTP: ", async (otp) => {
      const otpCodeElement = await driver.wait(
        until.elementLocated(By.id("otpCode")),
        600000
      );
      await otpCodeElement.sendKeys(otp, Key.ENTER);
      rl.close(); // Close the readline interface
    });

    await driver.sleep(10000);

    const sellLink = await driver.wait(
      until.elementLocated(By.linkText("Sell")),
      600000
    );
    await sellLink.click();

    const BikeLink = await driver.wait(
      until.elementLocated(By.partialLinkText("PCV")),
      600000
    );
    await BikeLink.click();

    // Simulate dropdown interactions and generate data
    // const linkClickAble = await driver.findElement(By.id("#taxi"));
    const fullXpath ="/html/body/div[1]/div[6]/div/div[2]/div/ul/a/li/div[2]/h2";
    const linkClickAble = await driver.findElement(By.xpath(fullXpath));
    await driver.executeScript("arguments[0].scrollIntoView(true);",linkClickAble);
    await driver.executeScript("arguments[0].click();", linkClickAble);



    // const findOthersActorsButton = await driver.findElement(By.className("findothertractors"));


    const findothertractors = await driver.wait(until.elementLocated(By.partialLinkText("Find Other Vehicle")),600000);
    await findothertractors.click();

    // await driver.executeScript("arguments[0].scrollIntoView(true);",findOthersActorsButton);
    // await findOthersActorsButton.click();
    // await driver.executeScript("arguments[0].click();",findOthertrActorsButton);
  } catch (error) {
    console.error("Error:", error);
  } finally {
    // Uncomment the following line to close the browser after execution.
    // await driver.quit();
  }
}

getPcv().catch((error) => console.error("Error:", error));
