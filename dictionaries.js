const inputAndHtmlMap = {

    // pages

    "press Profile item": "//div[span[contains(., \"Felhasználói profil\")]]",
    "press Groups item": "//div[span[contains(., \"Csoportok\")]]",
    "press Users item": "//div[span[contains(., \"Felhasználók\")]]",
    "press Parishes item": "//div[span[contains(., \"Plébániák\")]]",

    // profile page

    "press Modify email": "(//tr//button[contains(@class, 'blue')])[1]",
    //"press Save email": "#app > div.v-dialog__content.v-dialog__content--active > div > div > div.v-card__actions > button:nth-child(3)",
    "press Save email": "(//button//span[contains(., \"Módosítás\")])[3]",
    //"press Cancel email": "#app > div.v-dialog__content.v-dialog__content--active > div > div > div.v-card__actions > button:nth-child(2)",
    "press Cancel email": "//button//span[contains(., \"Mégsem\")]",

    "press Modify password": "(//tr//button[contains(@class, 'blue')])[2]",
    //"press Save password": "#app > div.v-dialog__content.v-dialog__content--active > div > div > div.v-card__actions > button:nth-child(3)",
    "press Save password": "(//button//span[contains(., \"Módosítás\")])[3]",
    //"press Cancel password": "#app > div.v-dialog__content.v-dialog__content--active > div > div > div.v-card__actions > button",
    "press Cancel password": "//button//span[contains(., \"Mégsem\")]",

    // groups page

    //"press Add group": "/html/body/div/div[1]/main/div/div[1]/div/div[1]/div[1]/div[3]/button",
    "press Add group": "//div[contains(@class, \"row\")]//button[not(contains(@disabled, \"disabled\"",
    //"press Save new group": "#app > div.v-dialog__content.v-dialog__content--active > div > div > div.v-card__actions > button:nth-child(3)",
    "press Save new group": "//button//span[contains(., \"Hozzáadás\")]",
    //"press Cancel new group": "#app > div.v-dialog__content.v-dialog__content--active > div > div > div.v-card__actions > button",
    "press Cancel new group": "//button//span[contains(., \"Mégsem\")]",

    "press Modify group": "#app > div.v-application--wrap > main > div > div.container.container--fluid > div > div.v-data-table.v-data-table--has-top.v-data-table--has-bottom.theme--dark > div.v-data-table__wrapper > table > tbody > tr:nth-child(1) > td:nth-child(2) > button.v-btn.v-btn--flat.v-btn--icon.v-btn--round.theme--dark.v-size--default.primary--text",
    //"press Save group": "#app > div.v-dialog__content.v-dialog__content--active > div > div > div.v-card__actions > button.v-btn.v-btn--flat.v-btn--text.theme--dark.v-size--default.blue--text.text--darken-1",
    "press Save group": "//button//span[contains(., \"Módosítás\")]",
    //"press Cancel group": "#app > div.v-dialog__content.v-dialog__content--active > div > div > div.v-card__actions > button.v-btn.v-btn--flat.v-btn--text.theme--dark.v-size--default.red--text.text--accent-4",
    "press Cancel group": "//button//span[contains(., \"Mégsem\")]",

    "press Delete group": "#app > div.v-application--wrap > main > div > div.container.container--fluid > div > div.v-data-table.v-data-table--has-top.v-data-table--has-bottom.theme--dark > div.v-data-table__wrapper > table > tbody > tr:nth-child(1) > td:nth-child(2) > button.v-btn.v-btn--flat.v-btn--icon.v-btn--round.theme--dark.v-size--default.primary--text",
    //"press Confirm delete": "#app > div.v-dialog__content.v-dialog__content--active > div > div > div.v-card__actions > button.v-btn.v-btn--flat.v-btn--text.theme--dark.v-size--default.red--text.text--accent-4",
    "press Confirm delete": "//button//span[contains(., \"Törlés\")]",
    //"press Cancel delete": "#app > div.v-dialog__content.v-dialog__content--active > div > div > div.v-card__actions > button.v-btn.v-btn--flat.v-btn--text.theme--dark.v-size--default.blue--text.text--darken-1",
    "press Cancel delete": "//button//span[contains(., \"Mégsem\")]",

    // users page

    //"press Add user": "/html/body/div/div[1]/main/div/div[1]/section/div[1]/div[1]/div[2]/button",
    "press Add user": "//div[contains(@class, \"row\")]//button[not(contains(@disabled, \"disabled\"",
    //"press Save user": "/html/body/div/div[4]/div/div/div[3]/button[2]",
    "press Save user": "//button//span[contains(., \"Hozzáadás\")]",
    //"press Cancel user": "#app > div.v-dialog__content.v-dialog__content--active > div > div > div.v-card__actions > button",
    "press Cancel user": "//button//span[contains(., \"Mégsem\")]",

    // parishes page

    //"press Add parish": "#app > div.v-application--wrap > main > div > div.container.container--fluid > div > div.v-data-table.v-data-table--has-top.v-data-table--has-bottom.theme--dark > div:nth-child(1) > div.col-sm-1.col-12 > button",
    "press Add parish": "//div[contains(@class, \"row\")]//button[not(contains(@disabled, \"disabled\"))]",
    //"press Save parish": "#app > div.v-dialog__content.v-dialog__content--active > div > div > div.v-card__actions > button:nth-child(3)",
    "press Save parish": "//button//span[contains(., \"Hozzáadás\")]",
    //"press Cancel parish": "#app > div.v-dialog__content.v-dialog__content--active > div > div > div.v-card__actions > button",
    "press Cancel parish": "//button//span[contains(., \"Mégsem\")]"
}

const extraHtmlMap = {
    "emailFormPasswordInput": "/html/body/div/div[3]/div/div/div[2]/div/div[2]/div/div[1]/div[2]/input",
    "passwordFormNewPassword": "/html/body/div/div[3]/div/div/div[2]/div/div[1]/div/div[1]/div[2]/input",
    "passwordFormOldPassword": "/html/body/div/div[3]/div/div/div[2]/div/div[2]/div/div[1]/div[2]/input",

    "newGroupFormName": "/html/body/div/div[4]/div/div/div[2]/div/div[1]/div/div[1]/div[2]/input",
    "newGroupFormName_2": "/html/body/div/div[5]/div/div/div[2]/div/div[1]/div/div[1]/div[2]/input",
    "newGroupFormSelect": "#app > div.v-dialog__content.v-dialog__content--active > div > div > div.v-card__text > div > div.v-input.theme--dark.v-text-field.v-text-field--is-booted.v-text-field--enclosed.v-text-field--outlined.v-text-field--rounded.v-select > div > div.v-input__slot > div.v-select__slot > div.v-select__selections",
    "parishOptionForGroup": "/html/body/div/div[5]/div/div[1]/div",
    "parishOptionForGroup_2": "/html/body/div/div[6]/div/div[6]",

    "checkbox": "#app > div.v-application--wrap > main > div > div.container.container--fluid > div > div.v-data-table.v-data-table--has-top.v-data-table--has-bottom.theme--dark > div:nth-child(1) > div.col-sm-3.col-12 > div > div > div.v-input__slot > div > div",

    "parishName": "/html/body/div/div[3]/div/div/div[2]/div/div[1]/div/div[1]/div[2]/input",
    "parishPhone": "/html/body/div/div[3]/div/div/div[2]/div/div[2]/div/div[1]/div[2]/input",
    "parishEmail": "/html/body/div/div[3]/div/div/div[2]/div/div[3]/div/div[1]/div[2]/input",
    "parishLocation": "/html/body/div/div[3]/div/div/div[2]/div/div[4]/div/div[1]/div[2]/input",

    "saveNewGroup": "/html/body/div/div[4]/div/div/div[3]/button[2]",
    "saveGroup": "/html/body/div/div[4]/div/div/div[3]/button[2]",

}

const pageAndUrlMap = {
    "profile": "https://misenaplo.hu/profile",
    "groups": "https://misenaplo.hu/groups",
    "users": "https://misenaplo.hu/users",
    "parishes": "https://misenaplo.hu/parishes"
}

module.exports = {inputAndHtmlMap, pageAndUrlMap, extraHtmlMap}