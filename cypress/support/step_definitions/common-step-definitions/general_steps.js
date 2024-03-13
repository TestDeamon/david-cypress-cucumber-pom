const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import HomepageObject from '../../../pom/HomepageObject'
import BootstrapAlert from '../../../pom/bootstrapalert'

const homepageObject = new HomepageObject();
const bootstrapPage = new BootstrapAlert();
Given("the user launches the URL", () => {
  cy.visit("/");
});
When("I click on the bootstrap alerts", ()=>{
  bootstrapPage.getBootstrapAlert().click();
})
When("I click on alerts & modals in the side nav", ()=>{
  bootstrapPage.getBootstrapAlertLink().click()
})
When("the user clicks on the input form menu", ()=>{
  homepageObject.getInputMenu().click();
})
Then("selects the simple demo form", () => {
  homepageObject.clickSimpleDemoForm().click();
});


