@complete
Feature: User logs in
In order to allow users access to their own account
As a business
I want to provide login functionality to the customer

  
Scenario: Display login options
  Given I have arrived on the website
  When I select login
  Then I should see the login options
  
