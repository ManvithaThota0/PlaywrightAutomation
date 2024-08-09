const {test, expect } = require('@playwright/test')
//import {test, expect} from ('@playwright/test')

test('Locators', async({page})=>{

await page.goto('https://demoblaze.com/index.html')

//Click on Login button- property
//await page.locator('id=login2').click()
await page.click('id=login2')

//provide username in input field - css
//await page.locator('#loginusername').fill('manvi')
await page.fill('#loginusername','manvi')
//await page.locator('#loginusername').type('manvi')
//await page.type('#loginusername','manvi')

//provide password in input field - Xpath
//await page.locator("input[id='loginpassword']").fill('menu@12')
await page.fill("input[id='loginpassword']",'menu@12')
//await page.locator("input[id='loginpassword']").type('menu@12')
//await page.type("input[id='loginpassword']",'menu@12')

//Click on login button-Xpath
await page.locator("//button[normalize-space()='Log in']").click()

//verify if loginlink is visible-xpath
const loginlink=await page.locator("//a[@id='login2']")
await expect(loginlink).toBeVisible()

page.close

})