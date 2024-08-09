const { test, expect } = require("@playwright/test");

 test('assertions', async({page})=>{

       await page.goto('https://demoblaze.com/index.html');

       //Hard Assertions
       //Verify url and title of the page 
       await expect(page).toHaveURL('https://demoblaze.com/index.html');
       await expect(page).toHaveTitle('STORE');
       //verify if element is visible or not
       const Hometext=await page.locator("//*[contains(text(),'Home')]");
       await expect(Hometext).toBeVisible();
       //Verify if attribute is present 
       const attribute=await page.locator("//a[contains(text(),'Samsung galaxy s6')]")
       await expect(attribute).toHaveAttribute('href','prod.html?idp_=1');
       //verify no of elements present in dropdown


       













 })