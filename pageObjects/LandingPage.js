const { expect } = require('@playwright/test');
const {PageHelper}= require('../pageObjects/PageHelper.js')

class LandingPage extends PageHelper {

    constructor(page) {
        super(page);
        this.petInDrawer = this.page.locator("[role='menuitem']");
        this.petDrawerOpenState= this.page.locator("[aria-expanded='true']")
        this.userProfileIcon= this.page.locator("[opti-default-header-user-account-button='user-account-button']")
    }


    async verifyPetExistsInAddedDrawer(petName) {
        await expect(this.petDrawerOpenState).toBeVisible();
        const locator = await this.petInDrawer.filter({ hasText: petName }).first();
        await this.waitForVisibleState(locator);
        await expect(locator).toBeVisible();

    }
     async navigateToAccountsPage(){
        await this.userProfileIcon.click();
        await this.waitForShortTime(6);
     }
   
}
module.exports = { LandingPage };