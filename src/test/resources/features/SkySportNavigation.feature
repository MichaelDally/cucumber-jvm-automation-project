@complete
Feature: User browses sports
In order to view odds on sports
As a customer
I want to be able to navigate through sport pages

Scenario: User browses through available sports
  Given I have arrived on the website
  When I select a sport
  Then the sport should be displayed
  Then the sport odds should be displayed on the screen 
