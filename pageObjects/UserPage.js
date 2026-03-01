const { UniqueGenerator } = require('../utils/UniqueGenerator.js');
const {expect } = require('@playwright/test');

class UserPage {

    constructor(page) {
        this.page = page
        this.password = this.page.getByRole('textbox', { name: 'Create your password' });
        this.firstName = this.page.getByRole('textbox', { name: 'First name' });
        this.surName = this.page.getByRole('textbox', { name: 'Surname' })
        this.hasDogCheckBox = this.page.locator('#checkbox__hasPetDogLabel');
        this.newsLetterCheckbox = this.page.locator('#checkbox__newsletterLabel');
        this.agreementLabel = this.page.locator('#checkbox__agreementLabel');
        this.createMyAccountBtn = this.page.getByRole('button', { name: 'Create My Account' })
    }

    async createUser() {
        await this.password.fill("qwerty123");
        await this.firstName.fill(UniqueGenerator.getFakeData('firstname'));
        await this.surName.fill(UniqueGenerator.getFakeData('lastname'));
        await this.hasDogCheckBox.click();
        await this.newsLetterCheckbox.click();
        await this.agreementLabel.click();
        await this.createMyAccountBtn.click();

    }
}
module.exports={UserPage};