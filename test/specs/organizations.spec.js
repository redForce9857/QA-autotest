const LoginPage = require( "../pageobjects/LoginPage");
const OrganizationPage = require("../pageobjects/OrganizationPage");

describe('Organization Suit', ()=> {
    beforeEach( async() => {
        await LoginPage.open();
        await LoginPage.login('Admin', 'Admin@Navi')
    })

    afterEach( async()=>{
        await browser.reloadSession();
    })

    it('Create organization', async ()=> {
        await OrganizationPage.open();
        await OrganizationPage.clickCreateOrganization();
        await expect(OrganizationPage.organizationCreateForm).toExist();
        await OrganizationPage.fillOrganizationName('BlackRock');
        await OrganizationPage.fillLegalEntityName('BlackRock_compilation');
        await OrganizationPage.clickDropdownWrapper();
        await OrganizationPage.selectFieldOfActivityOption();
        await OrganizationPage.fillDescription('the company that ows every other company');
        await OrganizationPage.clickSave();
        await browser.pause(5000);
    })

    it('Open to read', async() => {
    })
})
