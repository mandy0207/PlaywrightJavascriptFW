const { test } = require('./fixtures/testFixtures.js');


test.only('E2E Test', async ({pages, page, petData}) => {
  await page.goto("https://www.stg.kinship.com/uk");
  await pages.loginPage.handleCookies();
  await pages.landingPage
  await pages.loginPage.navigateToUserPage();
  await pages.userPage.createUser(page);
  await pages.petPage.addPet(petData.petName);
  await pages.landingPage.verifyPetExistsInAddedDrawer(petData.petName);

});








