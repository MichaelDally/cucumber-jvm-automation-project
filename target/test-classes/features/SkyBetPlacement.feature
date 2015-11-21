@complete
Feature: User places bets
In order to place bets
As a customer
I want to be able to add bets to my betslip


Scenario: Place multiple bets
  Given I have arrived on the website
  When I place "4" bets
  Then the betslip should appear