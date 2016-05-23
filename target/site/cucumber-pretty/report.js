$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("SkyBetPlacement.feature");
formatter.feature({
  "line": 2,
  "name": "User places bets",
  "description": "In order to place bets\nAs a customer\nI want to be able to add bets to my betslip",
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
  "duration": 1827702383,
  "status": "passed"
});
formatter.before({
  "duration": 3813496,
  "status": "passed"
});
formatter.before({
  "duration": 3295215,
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
  "duration": 3340017488,
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
  "duration": 112968613,
  "error_message": "org.openqa.selenium.ElementNotVisibleException: element not visible\n  (Session info: chrome\u003d50.0.2661.102)\n  (Driver info: chromedriver\u003d2.21.371459 (36d3d07f660ff2bc1bf28a75d1cdabed0983e7c4),platform\u003dMac OS X 10.10.5 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 20 milliseconds\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b1534ae328c771e0856c93e187490ca824\u0027, time: \u00272016-03-15 10:43:46\u0027\nSystem info: host: \u0027LEEML0254026\u0027, ip: \u002710.23.204.253\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.10.5\u0027, java.version: \u00271.8.0_91\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.21.371459 (36d3d07f660ff2bc1bf28a75d1cdabed0983e7c4), userDataDir\u003d/var/folders/k6/h4r16qfn09bg95dvn_g89sb48t0l04/T/.org.chromium.Chromium.U2kLZP}, takesHeapSnapshot\u003dtrue, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d50.0.2661.102, platform\u003dMAC, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: b1f0825c171625f304fab79effd959a1\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:327)\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:85)\n\tat sky.cucumber.pageObjects.HomePage.clickRandomSelections(HomePage.java:68)\n\tat sky.cucumber.stepDefinitions.HomePageStepDefinitions.i_place_bets(HomePageStepDefinitions.java:46)\n\tat ✽.When I place \"4\" bets(SkyBetPlacement.feature:10)\n",
  "status": "failed"
});
formatter.match({
  "location": "HomePageStepDefinitions.the_betslip_should_appear()"
});
formatter.result({
  "status": "skipped"
});
formatter.write("\n");
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 418019516,
  "status": "passed"
});
formatter.write("\n");
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 422865584,
  "status": "passed"
});
formatter.uri("SkySportNavigation.feature");
formatter.feature({
  "line": 2,
  "name": "User browses sports",
  "description": "In order to view odds on sports\nAs a customer\nI want to be able to navigate through sport pages",
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
  "duration": 38658363,
  "status": "passed"
});
formatter.before({
  "duration": 6227864,
  "status": "passed"
});
formatter.before({
  "duration": 3783998,
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
  "duration": 1967266226,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinitions.i_select_a_sport()"
});
formatter.result({
  "duration": 35377539,
  "error_message": "java.lang.IndexOutOfBoundsException: Index: 34, Size: 29\n\tat java.util.ArrayList.rangeCheck(ArrayList.java:653)\n\tat java.util.ArrayList.get(ArrayList.java:429)\n\tat sky.cucumber.pageObjects.HomePage.clickRandomSportInNavPanelAndGetSelectedSportName(HomePage.java:85)\n\tat sky.cucumber.stepDefinitions.HomePageStepDefinitions.i_select_a_sport(HomePageStepDefinitions.java:58)\n\tat ✽.When I select a sport(SkySportNavigation.feature:9)\n",
  "status": "failed"
});
formatter.match({
  "location": "HomePageStepDefinitions.the_sport_should_be_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomePageStepDefinitions.the_sport_odds_should_be_displayed_on_the_screen()"
});
formatter.result({
  "status": "skipped"
});
formatter.write("\n");
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "duration": 389663822,
  "status": "passed"
});
formatter.write("\n");
formatter.embedding("image/png", "embedded3.png");
formatter.after({
  "duration": 355341723,
  "status": "passed"
});
formatter.uri("skyLogin.feature");
formatter.feature({
  "line": 2,
  "name": "User logs in",
  "description": "In order to allow users access to their own account\nAs a business\nI want to provide login functionality to the customer",
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
  "duration": 35984041,
  "status": "passed"
});
formatter.before({
  "duration": 5038910,
  "status": "passed"
});
formatter.before({
  "duration": 3861822,
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
  "duration": 1070430019,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStepDefs.i_select_login()"
});
formatter.result({
  "duration": 95367486,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStepDefs.i_should_see_the_login_options()"
});
formatter.result({
  "duration": 476563213,
  "status": "passed"
});
formatter.after({
  "duration": 35371,
  "status": "passed"
});
formatter.after({
  "duration": 13722,
  "status": "passed"
});
});