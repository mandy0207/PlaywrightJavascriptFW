const { test: base, request } = require('@playwright/test');
const { createPages } = require("../../pageObjects/PageFactory.js");
const { getPetData } = require("../../testData/petData.js");
const { APIUtil } = require("../../utils/APIUtil.js");

const test = base.extend({
  pages: async ({ page }, use) => {
    const mypage = createPages(page)
    await use(mypage);

  },

  apiUtil: async ({ page }, use) => {
    const apiContext = await request.newContext();
    const apiUtil = new APIUtil(apiContext);
    await use(apiUtil);
  },
  authToken: async ({ apiUtil }, use) => {
    const token = await apiUtil.getAccessToken();
    await use(token);
  
  },

  authenticatedUser: async ({ page, authToken }, use) => {
    await page.addInitScript(value => {
      window.localStorage.setItem('access_token', value);
    }, authToken)
    await use( authToken);
  },

  addPet: async ({ apiUtil, authToken }, use) => {
    const petName = await apiUtil.addPet(authToken);
    console.log(petName)
    await use(petName);
    
  },


  petData: async ({ }, use) => {
    const petData = getPetData();
    await use(petData);
  }
})
module.exports = { test };





