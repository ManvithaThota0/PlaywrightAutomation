/* Built-in locator methods : 
page.getByAltText() - refers to images 
page.getByPlaceholder()-to locate an input by placeholder
page.getByRole()- to locate explicit and implicit accessibility attributes.
page.getByText() - refers to text

page.getbyLabel()- to locate elements by using its label text.
page.getbyTitle()- to loocate elements by using its text.
page.getbyTestId()-to locate elements based on data test attribute.
*/

const{test, expect}=require('@playwright/test')
test('built in',async({page})=>{
 await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

//getbyAlttext()
   const image=await page.getByAltText('company-branding');
   await expect(image).toBeVisible();
//getByPlaceholder()
   const user=await page.getByPlaceholder('Username').fill('Admin');
   const pwd=await page.getByPlaceholder('Password').fill('admin123');
//getByRole()
   await page.getByRole('button',{type:'submit'}).click();
//getByText()
   const textname =await page.locator("//p[@class='oxd-userdropdown-name']").textContent();
   await expect(await page.getByText(textname)).toBeVisible();
   page.close
})


