Feature: Bootstrap Modals 
    Background: 
        Given the user launches the URL
        When I click on alerts & modals in the side nav 

    Scenario: Confirm user is redirected to Bootstrap Modal Example for Automation screen upon clicking bootstrap modals 
        When I click on the bootstrap modals
        Then I will land on the Bootstrap Modal Example for Automation screen
    
    Scenario: Open single modal
        When I click on the bootstrap modals
        Then I will see "Single Modal Example" and a Launch modal button
        Then I click on the launch modal for single modal example 
        Then I should see the single modal title

    Scenario: Close opened single modal
        When I click on the bootstrap modals
        Then I will see "Single Modal Example" and a Launch modal button
        Then I click on the launch modal for single modal example 
        Then I click on the X icon
        Then the modal should no longer be displayed

    Scenario: Open Multiple Modal example
        When I click on the bootstrap modals
        Then I click on the multiple modal launch button
        Then I should see the first modal
    Scenario: Close first opened Multiple Modal
        When I click on the bootstrap modals
        Then I click on the multiple modal launch button
        Then I should see the first modal
        When I click on the close button on the multiple first modal
        Then user should be returned to the previous screen