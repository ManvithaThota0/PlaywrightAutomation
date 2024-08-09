
const{test, expect}=require('@playwright/test')

test('Mutiple WebElements', async({page})=>{
    
    //Display alllinks in Webpage
    await page.goto('https://demoblaze.com/index.html')
    const links=await page.$$('a')
    for(const link of links){
         const alllinks=await link.textContent();
          console.log('Displayed all links: ',alllinks);
    }

    //Display allproducts in Webpage
   page.waitForSelector("//div[@id='tbodyid']//h4/a");
  const products=await page.$$("//div[@id='tbodyid']//h4/a")
  for(const product of products){
      const allproducts=await product.textContent();
      console.log(allproducts);
  }
   page.close

})