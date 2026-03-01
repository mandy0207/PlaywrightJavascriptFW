const { LoginPage } = require('../pageObjects/LoginPage.js');
const { UserPage } = require('../pageObjects/UserPage.js');
const { PetPage } = require('../pageObjects/PetPage.js');
const { LandingPage } = require('../pageObjects/LandingPage.js');
const {AccountsPage} = require('../pageObjects/AccountsPage.js');

class POManager {

    constructor(page) {
        this.page= page;

    }

    getUserPageObject(){
        return new UserPage(this.page);
    }
    getloginPageObject(){
       return new LoginPage(this.page);
    }
    getpetPageObject(){
        return new PetPage(this.page)
    }
    getlandingPageObject(){
        return new LandingPage(this.page);
    }
    getAccountsPageObject(){
        return new AccountsPage(this.page);
    }
}
module.exports={POManager};