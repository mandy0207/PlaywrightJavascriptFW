const { test } = require('./fixtures/testFixtures.js');

test('verify user is able to delete pet profile', async ({pages, page,addPet, authenticatedUser}) => {
  await page.goto("https://www.stg.kinship.com/uk");
  await pages.loginPage.handleCookies();
  await pages.landingPage.navigateToAccountsPage();
  await pages.landingPage.navigateToAccountsPage();
  const xpath= await pages.accountsPage.verifyPetXExistsOnAccounstPage(addPet);
  await pages.accountsPage.removePet(xpath);

});

test('4th Test @Smoke', async ({pages, page, petData}) => {
  await page.goto("https://www.fb.com");

});

















