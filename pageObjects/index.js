const { UserPage } = require("./UserPage");
const { LoginPage } = require("./LoginPage");
const { LandingPage } = require("./LandingPage")
const { PetPage } = require("./PetPage");

/**
 * @param {import('@playwright/test').Page} page
 * @returns {{
 *   login: LoginPage,
 *   user: UserPage
 * }}
 */
function createPages(page) {
    return {   
    loginPage : new LoginPage(page),
    landingPage: new LandingPage(page),
    petPage :new PetPage(page),
    userPage : new UserPage(page)
    }
  
}
module.exports = { createPages };