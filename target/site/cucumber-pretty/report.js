$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("SkyBetPlacement.feature");
formatter.feature({
  "line": 1,
  "name": "User places bets",
  "description": "In order to place bets\r\nAs a customer\r\nI want to be able to add bets to my betslip",
  "id": "user-places-bets",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4505596056,
  "status": "passed"
});
formatter.before({
  "duration": 549575,
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
  "name": "I place \"4\" bets",
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
  "duration": 6466659264,
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
  "duration": 10357065213,
  "error_message": "org.openqa.selenium.TimeoutException: Timed out after 10 seconds waiting for visibility of [[FirefoxDriver: firefox on WINDOWS (3b32a83c-4bdf-4d18-bb42-7c2d390efdfb)] -\u003e css selector: #live-bet-bar .collapsed]\nBuild info: version: \u00272.48.2\u0027, revision: \u002741bccdd10cf2c0560f637404c2d96164b67d9d67\u0027, time: \u00272015-10-09 13:08:06\u0027\nSystem info: host: \u0027W8150602\u0027, ip: \u0027172.18.101.96\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_45\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{applicationCacheEnabled\u003dtrue, rotatable\u003dfalse, handlesAlerts\u003dtrue, databaseEnabled\u003dtrue, version\u003d42.0, platform\u003dWINDOWS, nativeEvents\u003dfalse, acceptSslCerts\u003dtrue, webStorageEnabled\u003dtrue, locationContextEnabled\u003dtrue, browserName\u003dfirefox, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 3b32a83c-4bdf-4d18-bb42-7c2d390efdfb\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:80)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:229)\r\n\tat sky.synchroniser.Synchroniser.waitUntilElementDisplayed(Synchroniser.java:29)\r\n\tat sky.cucumber.pageObjects.HomePage.isExpandAllLinkPresent(HomePage.java:61)\r\n\tat sky.cucumber.pageObjects.HomePage.clickExpandAllLinkIfPresent(HomePage.java:55)\r\n\tat sky.cucumber.stepDefinitions.HomePageStepDefinitions.i_place_bets(HomePageStepDefinitions.java:35)\r\n\tat ✽.When I place \"4\" bets(SkyBetPlacement.feature:9)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "HomePageStepDefinitions.the_betslip_should_appear()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("SkyLogin.feature");
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
  "duration": 348033,
  "status": "passed"
});
formatter.before({
  "duration": 338702,
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
  "duration": 5781974495,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStepDefs.i_select_login()"
});
formatter.result({
  "duration": 180515835,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStepDefs.i_should_see_the_login_options()"
});
formatter.result({
  "duration": 1971350247,
  "status": "passed"
});
});