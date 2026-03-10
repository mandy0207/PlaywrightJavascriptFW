const { test } = require('./fixtures/testFixtures.js');
const { expect } = require('@playwright/test');

test.only('E2E Test', async ({pages, page, petData}) => {
  await page.goto("https://www.stg.kinship.com/uk");
  await pages.loginPage.handleCookies();
  const heading =await pages.loginPage.navigateToUserPage();
  await expect(heading).toHaveText(`Let’s create your account`);
  await pages.userPage.createUser(page);
  await pages.petPage.addPet(petData.petName);
  await pages.landingPage.verifyPetExistsInAddedDrawer(petData.petName);

});








