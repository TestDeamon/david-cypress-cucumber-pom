
const { Given, When, Then, DataTable, And, But } = require("@badeball/cypress-cucumber-preprocessor");
import BootstrapAlert from '../../pom/bootstrapalert'
const bootstrapPage = new BootstrapAlert();

Then("I should see the bootstrap alert", ()=>{
    bootstrapPage.getBootstrapAlert().should('be.visible');
})
Then("I should see different bootstrap alert buttons", ()=>{
    bootstrapPage.getAutoCloseableInfoMsg().should('be.visible');
    bootstrapPage.getAutoCloseableDangerMsg().should('be.visible');
})
When("I click on the autocloseable success modal", ()=>{
    bootstrapPage.getAutoCloseableSuccessMsgBtn().click(); 
})
Then("I will see the autocloseable modal which will disappear in 5 seconds", ()=>{
    bootstrapPage.getAutoCloseableSucessMsgDisplay().should('be.visible')
})

Then("I should no longer see the message after 5 seconds", ()=>{
    cy.wait(5000)
    bootstrapPage.getAutoCloseableSucessMsgDisplay().should('not.be.visible')
    
})
When("I click on normal success message btn", ()=>{
    bootstrapPage.getNormalSuccessMsgBtn().click();
})
Then("I will see the normal success message displayed", ()=>{
    bootstrapPage.getNormalSuccessMsgDisplay().should('be.visible')
})
Then("I will wait for 10 seconds to confirm success message is still displayed", ()=>{
    cy.wait(10000)
    bootstrapPage.getNormalSuccessMsgDisplay().should('be.visible')
})
When("I click on the close button", ()=>{
    bootstrapPage.getNormalSuccessMsgX().click();
})
Then("the message displayed should no longer be visible", ()=>{
    bootstrapPage.getNormalSuccessMsgDisplay().should('not.be.visible')
})