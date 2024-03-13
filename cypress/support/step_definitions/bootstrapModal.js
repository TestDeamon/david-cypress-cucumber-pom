const { Given, When, Then, DataTable, And, But } = require("@badeball/cypress-cucumber-preprocessor");
import BootStrapModal from '../../pom/bootstrapModal';

const bootStrapModalPage = new BootStrapModal();

Then("I will land on the Bootstrap Modal Example for Automation screen", ()=>{
    bootStrapModalPage.getBootstrapModalTitle().should('have.text', 'Bootstrap Modal Example for Automation')
});
When("I click on the bootstrap modals", ()=>{
    bootStrapModalPage.getBootstrapModalOption().click();
});
Then("I will see {string} and a Launch modal button", (Arg1)=>{
    bootStrapModalPage.getSingleModalExampleTitle().should('have.text', Arg1);
    bootStrapModalPage.getSingleModalLaunchBtn().should('be.visible');
})
Then("I click on the launch modal for single modal example", ()=>{
    bootStrapModalPage.getSingleModalLaunchBtn().click();
})
Then("I should see the single modal title", ()=>{
    bootStrapModalPage.getSingleModalTitle().should('have.text', 'Modal Title')
})
Then("I click on the X icon", ()=>{
    bootStrapModalPage.getSingleModalXBtn().click();
})
Then("the modal should no longer be displayed", ()=>{
    bootStrapModalPage.getSingleModalXBtn().should('not.be.visible')
})
Then("I click on the multiple modal launch button", ()=>{
    bootStrapModalPage.getMultipleModalLaunchBtn().click()
})
Then("I should see the first modal", ()=>{
    bootStrapModalPage.getMultipleModalFirstModalTitle().should('have.text', 'First Modal');
})
When("I click on the close button on the multiple first modal", ()=>{
    bootStrapModalPage.getMultipleModalFirstModalX().click();
})
Then("user should be returned to the previous screen", ()=>{
    bootStrapModalPage.getMultipleModalTitle().should('have.text', 'Multiple Modal Example')
})