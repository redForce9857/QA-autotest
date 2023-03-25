class OrganizationPage {
    #region
    get addOrganizationButton() {return $('app-companies button.clients-add-user-dialog.crm-button')}
    get organizationCreateForm () { return $('div.modal-window.company') }
    get organizationNameField () { return $('input[formcontrolname="companyName"]')}
    get clickDropdown () { return $('form.add-new-company mat-form-field div.mat-input-wrapper mat-select')}
    get legalEntityNameField () { return $('input[id="mat-input-1"]')}
    get fieldOfActivityDropdown() { return $('mat-option[title="Медицина"]')}
    get descriptionField () { return  $('textarea[formcontrolname="comment"]')}
    get saveButton () { return $('button[id="disabledBtn"]')} //button[name="save"]
    #endregion

    async open(){
        await browser.url('http://167.114.201.175:5000/companies');
        await browser.pause(5000);
    }

    async fillOrganizationName(name){
        await this.organizationNameField.setValue(name);
    }

    async fillLegalEntityName(legalEntity){
        await this.legalEntityNameField.setValue(legalEntity);
    }

    async clickDropdownWrapper(){
        await this.clickDropdown.click()
    }

    async selectFieldOfActivityOption() {
        await this.fieldOfActivityDropdown.click()
    }

    async fillDescription(description){
        await this.descriptionField.setValue(description);
    }

    async clickSave(){
        await this.saveButton.click();
        await browser.pause(5000);
    }

    async clickCreateOrganization(){
        await this.addOrganizationButton.click();
        await browser.pause(5000);
    }
}

module.exports = new OrganizationPage();
