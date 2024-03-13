Feature: Single, multiple input forms and single dropdown
  Background:
    Given the user launches the URL
  Scenario: Verify that a users entry is displayed when the Show message button is clicked alphanumeric entry 
    When the user clicks on the input form menu
    Then selects the simple demo form
    Then I scroll the message field into View
    When I enter 'Text' in the single input form
    Then clicks the show button
    Then see the 'Text'

  Scenario: Verify that the two input fields correctly perform addition when the user enters valid inputs for fields A and B and clicks on the 'Get total' button
    When the user clicks on the input form menu
    Then selects the simple demo form
    When I scroll to the two input fields
    Then I will see Two inputs field as the title of the section 
    When I enter ten in field A
    Then enter five in field B 
    Then click the Get Total button
    Then the sum of the addition should be fifteen
    

  Scenario: Verify that a user can select a day of the week from dropdown
    When the user clicks on the input form menu
    Then select the dropdown list menu  
    Then I should see select list demo 
    When I select a day of the week 
    Then the day of the week should reflect as the selected day 


  Scenario: Verify that a user can make multiple selection 
    When the user clicks on the input form menu
    Then select the dropdown list menu 
    Then scroll to the multi select list section 
    When I make multiple selections
    Then I should see the selections in the display section
     