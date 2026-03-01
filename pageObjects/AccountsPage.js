const {expect } = require('@playwright/test');
class AccountsPage {

    constructor(page) {
        this.page = page;
        this.confirmRemovePetBtn=this.page.getByRole('button', { name: 'Yes, Remove This Pet' });
    
    }

    async verifyPetXExistsOnAccounstPage(petName) {
        let xpath = `//section//*[contains(text(),'${petName}')]/../..`;
        const petLocator = this.page.locator(xpath);
        await petLocator.waitFor({ state: 'visible' });
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