
import { Builder, Capabilities, By } from "selenium-webdriver"

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

// first new test
test('check title', async () => {
    await driver.sleep(1500)

    const pageTitle = await driver.getTitle();

    expect(pageTitle).toContain('Duel Duo')

    await driver.sleep(1500)
})

// second new test
test('check title', async () => {
    await driver.sleep(1500)

    let clicker = await driver.findElement(By.xpath('//button[2]')).click()

    await driver.sleep(1500)
})