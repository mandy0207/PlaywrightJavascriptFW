const { UserPage } = require("./UserPage");
const { LoginPage } = require("./LoginPage");
const { LandingPage } = require("./LandingPage")
const { PetPage } = require("./PetPage");
const {AccountsPage}= require("./AccountsPage")

function createPages(page) {
    return {   
    loginPage : new LoginPage(page),
    landingPage: new LandingPage(page),
    petPage :new PetPage(page),
    userPage : new UserPage(page),
    accountsPage : new AccountsPage(page)
    }
  
}
module.exports = { createPages };