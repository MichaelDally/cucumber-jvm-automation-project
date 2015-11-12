$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("skyNavigation.feature");
formatter.feature({
  "line": 1,
  "name": "User places bet",
  "description": "In order to place bets\r\nAs a customer\r\nI want to be able to add bets to my betslip",
  "id": "user-places-bet",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4881402807,
  "status": "passed"
});
formatter.before({
  "duration": 2021019,
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
  "duration": 7709909241,
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
  "duration": 1723637422,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinitions.the_betslip_should_appear()"
});
formatter.result({
  "duration": 10479649858,
  "error_message": "org.openqa.selenium.TimeoutException: Timed out after 10 seconds waiting for visibility of [[FirefoxDriver: firefox on WINDOWS (1696a36d-611e-4554-ad3f-0b55759742cf)] -\u003e css selector: .bet-slip-content]\nBuild info: version: \u00272.48.2\u0027, revision: \u002741bccdd10cf2c0560f637404c2d96164b67d9d67\u0027, time: \u00272015-10-09 13:08:06\u0027\nSystem info: host: \u0027W8150602\u0027, ip: \u0027172.18.101.96\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_45\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{applicationCacheEnabled\u003dtrue, rotatable\u003dfalse, handlesAlerts\u003dtrue, databaseEnabled\u003dtrue, version\u003d42.0, platform\u003dWINDOWS, nativeEvents\u003dfalse, acceptSslCerts\u003dtrue, webStorageEnabled\u003dtrue, locationContextEnabled\u003dtrue, browserName\u003dfirefox, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 1696a36d-611e-4554-ad3f-0b55759742cf\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:80)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:229)\r\n\tat sky.synchroniser.Synchroniser.waitUntilElementVisable(Synchroniser.java:24)\r\n\tat sky.cucumber.pageObjects.BetSlip.isBetSlipVisible(BetSlip.java:25)\r\n\tat sky.cucumber.stepDefinitions.HomePageStepDefinitions.the_betslip_should_appear(HomePageStepDefinitions.java:43)\r\n\tat ✽.Then the betslip should appear(skyNavigation.feature:10)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 18022612,
  "status": "passed"
});
});