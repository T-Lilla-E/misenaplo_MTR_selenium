const { getDriver } = require("./driver")
const { inputAndHtmlMap, pageAndUrlMap, extraHtmlMap } = require('./dictionaries')
const { By, until } = require('selenium-webdriver');

/******************************/
// functions for each input   //
/******************************/

// navigation between pages with side menu items

async function pressProfileItem() {
    await navigateToPage("profile")
    return "profile page"
}

async function pressGroupsItem() {
    await navigateToPage("groups")
    await clickCheckbox()
    return "groups page"
}

async function pressUsersItem() {
    await navigateToPage("users")
    return "users page"
}

async function pressParishesItem() {
    await navigateToPage("parishes")
    return "parishes page"
}

// profile page

async function pressModifyEmail() {
    await clickOnButton("press Modify email")
    return "email form"
}

async function pressSaveEmail() {
    await saveEmail()
    return "profile page"
}

async function pressCancelEmail(){
    await clickOnButton("press Cancel email")
    return "profile page"
}

async function pressModifyPassword() {
    await clickOnButton("press Modify password")
    return "password form"
}

async function pressSavePassword() {
    await savePassword()
    return "profile page"
}

async function pressCancelPassword() {
    await clickOnButton("press Cancel password")
    return "profile page"
}

// groups page

async function pressAddGroup() {
    await clickOnButton("press Add group")
    return "add group form"
}

async function pressSaveNewGroup() {
    await saveNewGroup()
    return "groups page"
}

async function pressCancelNewGroup() {
    await clickOnButton("press Cancel new group")
    return "groups page"
}

async function pressModifyGroup() {
    await clickOnButton("press Modify group")
    return "modify group form"
}

async function pressSaveGroup() {
    try {
        await clickOnButton("press Save group")
    }
    catch(error) {
        await clickOnButton("saveGroup")
    }

    return "groups page"
}

async function pressCancelGroup() {
    await clickOnButton("press Cancel group")
    return "groups page"
}

async function pressDeleteGroup() {
    await clickOnButton("press Delete group")
    return "confirm delete"
}

async function pressCancelDelete() {
    await clickOnButton("press Cancel delete")
    return "groups page"
}

async function pressConfirmDelete() {
    await clickOnButton("press Confirm delete")
    return "groups page"
}

// users page

async function pressAddUser() {
    await clickOnButton("press Add user")
    return "user form"
}

async function pressCancelUser() {
    await clickOnButton("press Cancel user")
    return "users page"
}

// parishes page

async function pressAddParish() {
    await clickOnButton("press Add parish")
    return "parish form"
}


async function pressCancelParish() {
    await clickOnButton("press Cancel parish")
    return "parish page"
}

/******************************/
// Selenium related functions //
/******************************/

// used several times

async function navigateToPage(page){
    const localDriver = await getDriver();
    await localDriver.get(pageAndUrlMap[page])
}

function getLocator(selector) {
    if(selector.startsWith("/") || selector.startsWith("(")) {
        return By.xpath(selector)
    }

    return By.css(selector)
}

async function clickOnButton(buttonName) {
    const localDriver = await getDriver()
    const selector = inputAndHtmlMap[buttonName] || extraHtmlMap[buttonName]

    if(!selector) {
        throw new Error(`Unknown selector: ${buttonName}`)
    }

    const locator = getLocator(selector)
    const button = await localDriver.wait(until.elementLocated(locator), 5000)
    await localDriver.wait(until.elementIsVisible(button), 5000)
    await localDriver.wait(until.elementIsEnabled(button), 5000)
    await button.click()
}

// unique functions

async function saveEmail() {
    const localDriver = await getDriver()
    await localDriver.findElement(By.xpath(extraHtmlMap["emailFormPasswordInput"])).clear()
    await localDriver.findElement(By.xpath(extraHtmlMap["emailFormPasswordInput"])).sendKeys('123456')

    await localDriver.wait(until.elementLocated(By.xpath(inputAndHtmlMap["press Save email"])), 5000)
    await localDriver.findElement(By.xpath(inputAndHtmlMap["press Save email"])).click()
}

async function savePassword() {
    const localDriver = await getDriver()
    await localDriver.findElement(By.xpath(extraHtmlMap["passwordFormNewPassword"])).clear()
    await localDriver.findElement(By.xpath(extraHtmlMap["passwordFormOldPassword"])).clear()
    await localDriver.findElement(By.xpath(extraHtmlMap["passwordFormNewPassword"])).sendKeys('123456')
    await localDriver.findElement(By.xpath(extraHtmlMap["passwordFormOldPassword"])).sendKeys('123456')

    await localDriver.wait(until.elementLocated(By.xpath(inputAndHtmlMap["press Save password"])), 5000)
    await localDriver.findElement(By.xpath(inputAndHtmlMap["press Save password"])).click()
}

async function saveNewGroup() {
    const localDriver = await getDriver()

    await localDriver.wait(until.elementLocated(By.xpath(extraHtmlMap["newGroupFormName"])), 5000)
    await localDriver.findElement(By.xpath(extraHtmlMap["newGroupFormName"])).sendKeys("0. class")

    await localDriver.wait(until.elementLocated(By.xpath(inputAndHtmlMap["press Save new group"])), 5000)
    await localDriver.findElement(By.xpath(inputAndHtmlMap["press Save new group"])).click()
}

async function clickCheckbox() {
    const localDriver = await getDriver()
    await localDriver.wait(until.elementLocated(By.css(extraHtmlMap["checkbox"])), 5000)
    const checkbox = await localDriver.findElement(By.css(extraHtmlMap["checkbox"]))
    const isClicked = await checkbox.isSelected()
    if(!isClicked) {
        await checkbox.click()
    }
    await localDriver.sleep(1000)
}

module.exports = {pressProfileItem, pressGroupsItem, pressUsersItem, pressParishesItem, 
                  pressModifyEmail, pressSaveEmail, pressCancelEmail, 
                  pressModifyPassword, pressSavePassword, pressCancelPassword,
                  pressAddGroup, pressSaveNewGroup, pressCancelNewGroup,
                  pressModifyGroup, pressSaveGroup, pressCancelGroup,
                  pressDeleteGroup, pressCancelDelete, pressConfirmDelete,
                  pressAddUser, pressCancelUser,
                  pressAddParish, pressCancelParish}
