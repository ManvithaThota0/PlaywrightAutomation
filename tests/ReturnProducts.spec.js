const {test, expect}=require('@playwright/test')

test('return products', async({page})=>{
    
        await page.goto('https://demoblaze.com/index.html')
        await page.waitForSelector("//div[@id='tbodyid']//h4//a")
        const products=await page.$$("//div[@id='tbodyid']//h4//a")
        for(const prod of products){
            const allprods=await prod.textContent()
            console.log('Display products names',allprods)
        }

})