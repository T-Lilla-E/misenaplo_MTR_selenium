const fs = require('fs');
const { By } = require('selenium-webdriver');
const { getDriver } = require('./driver');
const functions = require('./functions')

function index() {
    const [inputList, outputList] = readFromJSON(process.argv[2])
    runTestSequence(inputList, outputList)
}

function readFromJSON(filePath) {
    let inputs, outputs
    try {
        const data = fs.readFileSync('test_suites/' + filePath, 'utf8');
        const jsonData = JSON.parse(data)
        inputs = jsonData.test_suite.input_list
        outputs = jsonData.test_suite.output_list

    } catch (err) {
        console.error("[ERROR] Error while reading the file", err);
    }

    return [inputs, outputs]
}

async function runTestSequence(inputList, outputList) {
    const localDriver = await getDriver()
    console.log("[INFO] DRIVER READY")
    await loginAsFirstStep(localDriver)
    console.log("[INFO] LOGGED IN")

    let navigationFail = []
    let timeoutFail = []
    let cnt = 0
    let passCnt = 0
    let startTime = new Date()
    let endTime = new Date()

    if(inputList.length != outputList.length){
        console.log("[ERROR] length of input and output lists are different")
    }
    else {
        startTime = new Date()
        for (let i = 0; i < inputList.length; i++) {
            let result
            try {
                result = await inputAndFunctionMap[inputList[i]]()
                if(result == outputList[i]){
                    console.log("[INFO] " + (i+1) + ". - PASS - INPUT: " + inputList[i] + " ||  OUTPUT: " + result)
                    passCnt++
                }
                else {
                    console.log("[INFO] " + (i+1) + ". - FAIL - INPUT: " + inputList[i] + " || EXPECTED OUTPUT: " + outputList[i] + " || OUTPUT: " + result)
                    navigationFail.push(i+1)
                }
            }
            catch(error) {
                console.log("[INFO] " + (i+1) + ". - FAIL - INPUT: " + inputList[i] + " || EXPECTED OUTPUT: " + outputList[i] + " || OUTPUT: TIMEOUT")
                timeoutFail.push(i+1)
            }
            cnt++
            await localDriver.sleep(100)
        }
    }
    endTime = new Date()
    console.log("[INFO] END OF TEST SEQUENCE")
    await localDriver.quit()
    console.log("[INFO] DRIVER STOPPED")

    console.log()
    console.log("Navigation fail: " + navigationFail.length + " times")
    if(navigationFail.length > 0){
        console.log("Navigation fail indexes: " + navigationFail.join(", "))
    }

    console.log("Timeout fail: " + timeoutFail.length + " times")
    if(timeoutFail.length > 0){
        console.log("Timeout fail indexes: " + timeoutFail.join(", "))
    }

    console.log("Success rate: " + (passCnt / cnt) * 100 + "%")

    const difference = + endTime - startTime
    const totalSeconds = Math.floor(difference / 1000)
    const minutes = Math.floor(totalSeconds / 60)
    const seconds = totalSeconds % 60
    console.log("Duration of execution: " + minutes + " min " + seconds + " sec")
    console.log()
}

async function loginAsFirstStep(localDriver) {
    await localDriver.get('https://misenaplo.hu/login');

    await localDriver.findElement(By.xpath('/html/body/div/div/main/div/div[1]/section/div/div/div/div/div[1]/div/div/div[2]/div/div/div[1]/form/div[1]/div/div[1]/div[2]/input')).sendKeys('tle@mailinator.com');
    await localDriver.findElement(By.xpath('/html/body/div/div/main/div/div[1]/section/div/div/div/div/div[1]/div/div/div[2]/div/div/div[1]/form/div[2]/div/div[1]/div[2]/input')).sendKeys('123456');
    await localDriver.findElement(By.xpath('/html/body/div/div/main/div/div[1]/section/div/div/div/div/div[1]/div/div/div[2]/div/div/div[2]/button')).click();
    return
}

// dictionary of inputs and functions

const inputAndFunctionMap = {

    "press Profile item": functions.pressProfileItem,
    "press Groups item": functions.pressGroupsItem,
    "press Users item": functions.pressUsersItem,
    "press Parishes item": functions.pressParishesItem,

    "press Modify email": functions.pressModifyEmail,
    "press Save email": functions.pressSaveEmail,
    "press Cancel email": functions.pressCancelEmail,

    "press Modify password": functions.pressModifyPassword,
    "press Save password": functions.pressSavePassword,
    "press Cancel password": functions.pressCancelPassword,

    "press Add group": functions.pressAddGroup,
    "press Save new group": functions.pressSaveNewGroup,
    "press Cancel new group": functions.pressCancelNewGroup,

    "press Modify group": functions.pressModifyGroup,
    "press Save group": functions.pressSaveGroup,
    "press Cancel group": functions.pressCancelGroup,

    "press Delete group": functions.pressDeleteGroup,
    "press Confirm delete": functions.pressConfirmDelete,
    "press Cancel delete": functions.pressCancelDelete,

    "press Add user": functions.pressAddUser,
    "press Cancel user": functions.pressCancelUser,

    "press Add parish": functions.pressAddParish,
    "press Cancel parish": functions.pressCancelParish
}

index();