$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("skyLogin.feature");
formatter.feature({
  "line": 2,
  "name": "User logs in",
  "description": "In order to allow users access to their own account\r\nAs a business\r\nI want to provide login functionality to the customer",
  "id": "user-logs-in",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@wip"
    }
  ]
});
formatter.before({
  "duration": 5161753770,
  "status": "passed"
});
formatter.before({
  "duration": 540245,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Display login options",
  "description": "",
  "id": "user-logs-in;display-login-options",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "I have arrived on the website",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I select login",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should see the login options",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStepDefinitions.i_have_arrived_on_the_website()"
});
formatter.result({
  "duration": 8536057353,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStepDefs.i_select_login()"
});
formatter.result({
  "duration": 235540062,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStepDefs.i_should_see_the_login_options()"
});
formatter.result({
  "duration": 2778439580,
  "status": "passed"
});
formatter.uri("skyNavigation.feature");
formatter.feature({
  "line": 1,
  "name": "User places bets",
  "description": "In order to place bets\r\nAs a customer\r\nI want to be able to add bets to my betslip",
  "id": "user-places-bets",
  "keyword": "Feature"
});
formatter.before({
  "duration": 178682,
  "status": "passed"
});
formatter.before({
  "duration": 83509,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Place multiple bets",
  "description": "",
  "id": "user-places-bets;place-multiple-bets",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@wip"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I have arrived on the website",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I place \"3\" bets",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "the betslip should appear",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStepDefinitions.i_have_arrived_on_the_website()"
});
formatter.result({
  "duration": 8730032181,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 9
    }
  ],
  "location": "HomePageStepDefinitions.i_place_bets(int)"
});
formatter.result({
  "duration": 1665076879,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinitions.the_betslip_should_appear()"
});
formatter.result({
  "duration": 219461024,
  "status": "passed"
});
});