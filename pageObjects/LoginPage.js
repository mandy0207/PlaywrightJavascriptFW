const { UniqueGenerator } = require('../utils/UniqueGenerator.js');
const {expect } = require('@playwright/test');

class LoginPage {

    constructor(page) {
        this.page = page;
        this.rejectCookies = this.page.getByRole('button', { 'name': 'Reject All' })
        this.maybeLater = this.page.getByRole('button', { 'name': 'Maybe Later' });
        this.signupBtn = this.page.getByRole('button', { 'name': 'Sign Up / Login' })
        this.emailInputBox = this.page.locator('#email');
        this.nextBtn = this.page.getByRole('button', { 'name': 'Next' })
    }

    async handleCookies() {
        await this.rejectCookies.click();
        await new Promise(res=>setTimeout(res, 6000));
        if (await this.maybeLater.isVisible()) {
            await this.maybeLater.click();
        };

    }
    async navigateToUserPage() {
        await this.signupBtn.click();
        await this.emailInputBox.first().fill(UniqueGenerator.getFakeData('email'));
        await this.nextBtn.click();
        const heading = this.page.getByRole('heading', { name: 'Let’s create your account' });
        await expect(heading).toHaveText(`Let’s create your account`);

    }
}
module.exports = { LoginPage }