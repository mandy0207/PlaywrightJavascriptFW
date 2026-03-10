const {expect } = require('@playwright/test');
const {PageHelper}= require('../pageObjects/PageHelper.js')

class AccountsPage extends PageHelper{

    constructor(page) {
        super(page)
        this.confirmRemovePetBtn=this.page.getByRole('button', { name: 'Yes, Remove This Pet' });
    
    }

    async verifyPetXExistsOnAccounstPage(petName) {
        let xpath = `//section//*[contains(text(),'${petName}')]/../..`;
        const petLocator = this.page.locator(xpath);
        await  this.waitForVisibleState(petLocator);
        await expect(petLocator).toBeVisible();
        console.log(petLocator);
        return xpath;
    }

    async removePet(xpath) {
        const petLocator= this.page.locator(xpath)
        await petLocator.locator("//*[text()='Remove']").click();
        await this.confirmRemovePetBtn.click();
        await expect(petLocator).toBeHidden();
    }

}
module.exports={AccountsPage};