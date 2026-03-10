class PageHelper {

    constructor(page) {
        this.page = page;

    }

    async waitForNetworkIdle() {
        await this.page.waitForLoadState('networkidle');
    }

    async getFrame(frameSelector) {
        return this.page.frameLocator(frameSelector);

    }

    async waitForShortTime(shortTime) {
        await new Promise(res => setTimeout(res, shortTime * 1000));
    }

    async selectDropdownByText(locator, text) {
        await locator.selectOption({ label: text });

    }
    async waitForVisibleState(locator) {
        await locator.waitFor({ state: 'visible' });
    }

    async getTextList(locator) {
        const texts = await locator.allTextContents();
        return texts.map(text => text.trim());
    }
    async filterByText(locator, text) {
        return locator.filter({ hasText: text });
    }

    async openNewPage(action) {
        const [newPage] = await Promise.all([
            this.page.context().waitForEvent('page'),
            action()
        ]);
        await newPage.waitForLoadState('domcontentloaded');
        return newPage;
    }

}

module.exports = { PageHelper}