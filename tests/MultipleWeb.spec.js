const { test, expect } = require("@playwright/test");


test('multiple web', async({page})=>{

await page.goto('https://demoblaze.com/index.html')

          const links =await page.$$('a')
          for(const link of links){
                 const alllinks=await link.textContent()
                 console.log(alllinks)

        }

})