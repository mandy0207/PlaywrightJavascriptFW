const { test } = require('./fixtures/testFixtures.js');
const { expect } = require('@playwright/test');

/**
 * for executing tests of same file in parallel
 * test.describe.configure({mode:'parallel'});
 * 
 * for executing in serial and if later test depends upon previous
 * test.describe.configure({mode:'serial'});
 */


test('E2E Test', async ({pages, page, petData}) => {
  await page.goto("https://www.stg.kinship.com/uk");
  await pages.loginPage.handleCookies();
  const heading =await pages.loginPage.navigateToUserPage();
  await expect(heading).toHaveText(`Let’s create your account`);
  await pages.userPage.createUser(page);
  await pages.petPage.addPet(petData.petName);
  await pages.landingPage.verifyPetExistsInAddedDrawer(petData.petName);

});

test('Second Test @Smoke', async ({pages, page, petData}) => {
  await page.goto("https://www.fb.com");

});

test('@Smoke Third Test', async ({pages, page, petData}) => {
  await page.goto("https://www.fb.com");

});







