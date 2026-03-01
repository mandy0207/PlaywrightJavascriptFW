const { test, expect, request } = require('@playwright/test');
const { UniqueGenerator } = require('../utils/UniqueGenerator.js');
const { APIUtil } = require('../utils/APIUtil.js');
const { POManager } = require('../pageObjects/POManager.js');

let token
let petName;

test.beforeAll(async () => {
  const apiContext = await request.newContext();
  const apiUtil = new APIUtil(apiContext);
  token = await apiUtil.getAccessToken();
  petName = await apiUtil.addPet(token);
  console.log(petName)
})

test.only('verify user is able to delete pet profile', async ({ page }) => {
  await page.goto("https://www.stg.kinship.com/uk");
  await page.addInitScript(value => {
    window.localStorage.setItem('access_token', value);
  }, token)
  //addpet
  const poManager= new POManager(page);
  await poManager.getloginPageObject().handleCookies();
  await poManager.getlandingPageObject().navigateToAccountsPage();
  await new Promise(res => setTimeout(res, 6000));
  await poManager.getlandingPageObject().navigateToAccountsPage();
  const xpath= await poManager.getAccountsPageObject().verifyPetXExistsOnAccounstPage(petName);
  await poManager.getAccountsPageObject().removePet(xpath);
  

});

















