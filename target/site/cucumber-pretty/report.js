$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("skyNavigation.feature");
formatter.feature({
  "line": 1,
  "name": "User places bet",
  "description": "In order to place bets\r\nAs a customer\r\nI want to be able to add bets to my betslip",
  "id": "user-places-bet",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5551350751,
  "status": "passed"
});
formatter.before({
  "duration": 3239601,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Place multiple bets",
  "description": "",
  "id": "user-places-bet;place-multiple-bets",
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
  "duration": 8657176154,
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
  "duration": 1311692141,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinitions.the_betslip_should_appear()"
});
formatter.result({
  "duration": 287111017,
  "status": "passed"
});
formatter.after({
  "duration": 15387171,
  "status": "passed"
});
});