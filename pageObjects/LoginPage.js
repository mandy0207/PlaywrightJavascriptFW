const { UniqueGenerator } = require('../utils/UniqueGenerator.js');
const { PageHelper } = require('../pageObjects/PageHelper.js')

class LoginPage extends PageHelper {

    constructor(page) {
        super(page);
        this.rejectCookies = this.page.getByRole('button', { 'name': 'Reject All' })
        this.maybeLater = this.page.getByRole('button', { 'name': 'Maybe Later' });
        this.signupBtn = this.page.getByRole('button', { 'name': 'Sign Up / Login' })
        this.emailInputBox = this.page.locator('#email');
        this.nextBtn = this.page.getByRole('button', { 'name': 'Next' })
    }

    async handleCookies() {
        await this.rejectCookies.click();
        await this.waitForShortTime(10);
        if (await this.maybeLater.isVisible()) {
            await this.maybeLater.click();
        };

    }
    async navigateToUserPage() {
        await this.signupBtn.click();
        await this.emailInputBox.first().fill(UniqueGenerator.getFakeData('email'));
        await this.nextBtn.click();
        return  this.page.getByRole('heading', { name: 'Let’s create your account' });
    }

}
module.exports = { LoginPage }