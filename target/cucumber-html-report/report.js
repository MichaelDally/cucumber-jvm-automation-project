$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("skyNavigation.feature");
formatter.feature({
  "line": 1,
  "name": "User places bet",
  "description": "In order to place bets\r\nAs a customer\r\nI want to be able to add bets to my betslip",
  "id": "user-places-bet",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4364237682,
  "status": "passed"
});
formatter.before({
  "duration": 1278299,
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
  "duration": 6290174268,
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
  "duration": 30492655847,
  "error_message": "org.openqa.selenium.ElementNotVisibleException: Element is not currently visible and so may not be interacted with\nCommand duration or timeout: 30.11 seconds\nBuild info: version: \u00272.48.2\u0027, revision: \u002741bccdd10cf2c0560f637404c2d96164b67d9d67\u0027, time: \u00272015-10-09 13:08:06\u0027\nSystem info: host: \u0027W8150602\u0027, ip: \u0027172.18.101.96\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_45\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{applicationCacheEnabled\u003dtrue, rotatable\u003dfalse, handlesAlerts\u003dtrue, databaseEnabled\u003dtrue, version\u003d42.0, platform\u003dWINDOWS, nativeEvents\u003dfalse, acceptSslCerts\u003dtrue, webStorageEnabled\u003dtrue, locationContextEnabled\u003dtrue, browserName\u003dfirefox, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 9dcd0795-d67c-4662-bad7-164a70c314bc\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:647)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:326)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat sky.cucumber.pageObjects.HomePage.clickRandomSelections(HomePage.java:45)\r\n\tat sky.cucumber.stepDefinitions.HomePageStepDefinitions.i_place_bets(HomePageStepDefinitions.java:37)\r\n\tat ✽.When I place \"3\" bets(skyNavigation.feature:9)\r\nCaused by: org.openqa.selenium.ElementNotVisibleException: Element is not currently visible and so may not be interacted with\nBuild info: version: \u00272.48.2\u0027, revision: \u002741bccdd10cf2c0560f637404c2d96164b67d9d67\u0027, time: \u00272015-10-09 13:08:06\u0027\nSystem info: host: \u0027W8150602\u0027, ip: \u0027172.18.101.96\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_45\u0027\nDriver info: driver.version: unknown\r\n\tat \u003canonymous class\u003e.fxdriver.preconditions.visible(file:///C:/Users/MICHAE~1/AppData/Local/Temp/anonymous8411695228400513678webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:9981)\r\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.checkPreconditions_(file:///C:/Users/MICHAE~1/AppData/Local/Temp/anonymous8411695228400513678webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:12517)\r\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.executeInternal_/h(file:///C:/Users/MICHAE~1/AppData/Local/Temp/anonymous8411695228400513678webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:12534)\r\n\tat \u003canonymous class\u003e.fxdriver.Timer.prototype.setTimeout/\u003c.notify(file:///C:/Users/MICHAE~1/AppData/Local/Temp/anonymous8411695228400513678webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:621)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "HomePageStepDefinitions.the_betslip_should_appear()"
});
formatter.result({
  "status": "skipped"
});
});