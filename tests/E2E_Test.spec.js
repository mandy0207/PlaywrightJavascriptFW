const { test, expect } = require('@playwright/test');
const { POManager } = require('../pageObjects/POManager.js');
const { UniqueGenerator } = require('../utils/UniqueGenerator.js');

test('E2E Test', async ({ page }) => {
  await page.goto("https://www.stg.kinship.com/uk");
  const poManager= new POManager(page);
  await poManager.getloginPageObject().handleCookies();
  await poManager.getloginPageObject().navigateToUserPage();
  await poManager.getUserPageObject().createUser(page);
  const petName = UniqueGenerator.getFakeData('firstname');
  await poManager.getpetPageObject().addPet(petName);
  await poManager.getlandingPageObject().verifyPetExistsInAddedDrawer(petName);

});








