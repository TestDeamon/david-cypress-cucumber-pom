const { Given, When, Then, DataTable, And, But } = require("@badeball/cypress-cucumber-preprocessor");
import HomepageObject from '../../pom/HomepageObject'

const homepageObject = new HomepageObject();

Then("I scroll the message field into View", () => {
    homepageObject.getSingleMessageFieldTitle().scrollIntoView().should('be.visible');
});
Then("I enter {string} in the single input form", (Text) => {
    homepageObject.getSingleMessageField().type(Text);
});

Then("clicks the show button", () => {
    homepageObject.getShowMessageBtn().click();
});

Then("see the {string}", (Text) => {
    homepageObject.getMessageFieldResult().should('have.text', 'Text');
});
When("I scroll to the two input fields", ()=>{
    cy.get(':nth-child(5) > .panel-heading').scrollIntoView() 
})
Then("I will see Two inputs field as the title of the section", ()=>{
    homepageObject.getFieldTwoTitle().should('have.text', "Two Input Fields")
})
When("I enter ten in field A", ()=>{
    homepageObject.getFieldA().type(10)
})
Then("enter five in field B", ()=>{
    homepageObject.getFieldB().type(5);
});
Then("click the Get Total button", ()=>{
    homepageObject.getTotalBtn().click();
})
Then("the sum of the addition should be fifteen", ()=>{ 
    homepageObject.getFieldTwoTotalResult().then(
        $el => expect($el[0].innerText, 15)
    )
})

Then("select the dropdown list menu", ()=>{
    homepageObject.getSelectDropdownList().click();
})

Then("I should see select list demo", ()=>{
    homepageObject.getSelectDemoListTitle().should('have.text', 'Select List Demo');
})
When("I select a day of the week", ()=>{
    homepageObject.getSelectDemoListDropdown().select('Tuesday');
})
Then("the day of the week should reflect as the selected day", ()=>{
    homepageObject.getSelectDemoListDropdownValue().then(($el)=> {
        let newText = $el.text();
        let textArray = new Array();
        textArray = newText.split(":-");
        expect(textArray[1].trim()).to.equal('Tuesday');
    })
})
Then("scroll to the multi select list section", ()=>{
    homepageObject.getMultiListDemoSectionTitle().scrollIntoView();
});
When("I make multiple selections", ()=>{
    homepageObject.getMultiListSelectDemoField().select(['Florida', 'Ohio'])
})
Then("I should see the selections in the display section", ()=>{
    cy.pause();
    homepageObject.getMultiListGetFirstBtn().click();
})