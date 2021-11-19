
import { Builder, Capabilities, By } from "selenium-webdriver"
import { convertToObject } from "typescript"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test("will check if clicking draw button displays the correct div", async () => {
    const drawBtn = await driver.findElement(By.id('draw'))
    await drawBtn.click()
    await driver.sleep(1000)
    const choices = await driver.findElement(By.id('choices'))
    const isDisplay = await choices.isDisplayed()
    expect(isDisplay).toBe(true)
})

test('will add a bot to the duo', async () => {
    const drawBtn = await driver.findElement(By.id('draw'))
    await drawBtn.click()
    await driver.sleep(1000)
    const addBtn = await driver.findElement(By.className('bot-btn'))
    await addBtn.click()
    await driver.sleep(1000)
    const header = await driver.findElement(By.id("your-duo-header"))
    const isDisplay = await header.isDisplayed()
    expect(isDisplay).toBe(true)
})