const{test, expect}=require('@playwright/test');

test('Home Page', async({page})=>{

   await page.goto('https://demoblaze.com/index.html');

    const Title=await page.title();
    console.log('The title of page: ',Title);
    await expect(page).toHaveTitle('STORE');

    const Url=await page.url();
    console.log('Expected url is: ', Url);
    await expect(page).toHaveURL('https://demoblaze.com/index.html');
   
    page.close();
    
})