$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("SkyBetPlacement.feature");
formatter.feature({
  "line": 2,
  "name": "User places bets",
  "description": "In order to place bets\r\nAs a customer\r\nI want to be able to add bets to my betslip",
  "id": "user-places-bets",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 8687548811,
  "status": "passed"
});
formatter.before({
  "duration": 19757646,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Place multiple bets",
  "description": "",
  "id": "user-places-bets;place-multiple-bets",
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
  "name": "I place \"4\" bets",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "the betslip should appear",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStepDefinitions.i_have_arrived_on_the_website()"
});
formatter.result({
  "duration": 9683205862,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 9
    }
  ],
  "location": "HomePageStepDefinitions.i_place_bets(int)"
});
formatter.result({
  "duration": 2793023382,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinitions.the_betslip_should_appear()"
});
formatter.result({
  "duration": 428789899,
  "status": "passed"
});
formatter.after({
  "duration": 59250,
  "status": "passed"
});
formatter.after({
  "duration": 17262,
  "status": "passed"
});
formatter.uri("SkySportNavigation.feature");
formatter.feature({
  "line": 2,
  "name": "User browses sports",
  "description": "In order to view odds on sports\r\nAs a customer\r\nI want to be able to navigate through sport pages",
  "id": "user-browses-sports",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 18194762,
  "status": "passed"
});
formatter.before({
  "duration": 18300199,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "User browses through available sports",
  "description": "",
  "id": "user-browses-sports;user-browses-through-available-sports",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "I have arrived on the website",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I select a sport",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "the sport should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "the sport odds should be displayed on the screen",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStepDefinitions.i_have_arrived_on_the_website()"
});
formatter.result({
  "duration": 11398345863,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinitions.i_select_a_sport()"
});
formatter.result({
  "duration": 314496000,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinitions.the_sport_should_be_displayed()"
});
formatter.result({
  "duration": 5851920294,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinitions.the_sport_odds_should_be_displayed_on_the_screen()"
});
formatter.result({
  "duration": 30034243476,
  "error_message": "java.lang.AssertionError: No sporting odds were found\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat sky.cucumber.stepDefinitions.HomePageStepDefinitions.the_sport_odds_should_be_displayed_on_the_screen(HomePageStepDefinitions.java:60)\r\n\tat ✽.Then the sport odds should be displayed on the screen(SkySportNavigation.feature:11)\r\n",
  "status": "failed"
});
formatter.write("\n");
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 1202663526,
  "status": "passed"
});
formatter.write("\n");
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 1146647918,
  "status": "passed"
});
formatter.uri("skyLogin.feature");
formatter.feature({
  "line": 2,
  "name": "User logs in",
  "description": "In order to allow users access to their own account\r\nAs a business\r\nI want to provide login functionality to the customer",
  "id": "user-logs-in",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 19619552,
  "status": "passed"
});
formatter.before({
  "duration": 43949215,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Display login options",
  "description": "",
  "id": "user-logs-in;display-login-options",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I have arrived on the website",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I select to login",
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
  "duration": 6180110419,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStepDefs.i_select_login()"
});
formatter.result({
  "duration": 230751108,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStepDefs.i_should_see_the_login_options()"
});
formatter.result({
  "duration": 2101841216,
  "status": "passed"
});
formatter.after({
  "duration": 34989,
  "status": "passed"
});
formatter.after({
  "duration": 29858,
  "status": "passed"
});
});