const { Builder } = require("selenium-webdriver");

let driver = new Builder().forBrowser('chrome').build();

async function getDriver() {
    if (!driver) {
        driver = await new Builder().forBrowser('chrome').build();
    }
    return driver;
}

module.exports = {getDriver}