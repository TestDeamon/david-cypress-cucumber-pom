Feature: Bootstrap Alert 
    Background: 
        Given the user launches the URL
        When I click on alerts & modals in the side nav 
    Scenario: Verify user sees bootstrap alert under Alert & Modal
        Then I should see the bootstrap alert 
    Scenario: Verify that the user is redirected to the Bootstrap Alert messages screen after clicking the link
        When I click on the bootstrap alerts
        Then I should see different bootstrap alert buttons 

    Scenario: Autocloseable bootstrap alert closes after 5 seconds 
        When I click on the bootstrap alerts
        Then I should see different bootstrap alert buttons 
        When I click on the autocloseable success modal
        Then I will see the autocloseable modal which will disappear in 5 seconds
        Then I should no longer see the message after 5 seconds
    Scenario: Open normal success message 
        When I click on the bootstrap alerts
        Then I should see different bootstrap alert buttons 
        When I click on normal success message btn
        Then I will see the normal success message displayed

    Scenario: Open normal success message should still be open if close button is not clicked
        When I click on the bootstrap alerts
        Then I should see different bootstrap alert buttons 
        When I click on normal success message btn
        Then I will see the normal success message displayed
        Then I will wait for 10 seconds to confirm success message is still displayed

    Scenario: close normal success message 
        When I click on the bootstrap alerts
        Then I should see different bootstrap alert buttons 
        When I click on normal success message btn
        Then I will see the normal success message displayed
        Then I will wait for 10 seconds to confirm success message is still displayed
        When I click on the close button
        Then the message displayed should no longer be visible