const { LoginPage, LandingPage, AccountsPage, UserPage, PetPage } = require('./index');

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