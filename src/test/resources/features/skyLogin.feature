@regression
Feature: User logs in
In order to allow users access to their own account
As a business
I want to provide login functionality to the customer

@login
Scenario: Display login options
  Given I have arrived on the website
  When I select to login
  Then I should see the login options
  