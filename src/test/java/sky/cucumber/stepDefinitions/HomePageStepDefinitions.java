package sky.cucumber.stepDefinitions;

import static org.junit.Assert.assertTrue;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.support.PageFactory;

import sky.browser.AbstractBrowser;
import sky.cucumber.pageObjects.BetSlip;
import sky.cucumber.pageObjects.HomePage;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class HomePageStepDefinitions extends AbstractBrowser {
	
	public HomePageStepDefinitions(){
		super(driver);
	}

	private HomePage homePage;
	private BetSlip betSlip;

	@Before
	public void setUp() {
		homePage = PageFactory.initElements(driver, HomePage.class);
		betSlip = PageFactory.initElements(driver, BetSlip.class);
		driver.manage().deleteAllCookies();
	}

	@Given("^I have arrived on the website$")
	public void i_have_arrived_on_the_website() throws Throwable {
		driver.navigate().to(System.getProperty("url"));
	}

	@When("^I place \"([^\"]*)\" bets$")
	public void i_place_bets(int numberOfSelections) throws Throwable {
		homePage.clickExpandAllLinkIfPresent();
		homePage.clickRandomSelections(numberOfSelections);
	}

	@Then("^the betslip should appear$")
	public void the_betslip_should_appear() {
		betSlip.waitUntilBetSlipVisible();
		assertTrue("Betslip not found", betSlip.isBetSlipVisible());
	}

	@When("^I select a sport$")
	public void i_select_a_sport() throws Throwable {
		homePage.clickRandomSportInNavPanelAndGetSelectedSportName();
	}

	@Then("^the sport odds should be displayed on the screen$")
	public void the_sport_odds_should_be_displayed_on_the_screen()
			throws Throwable {
		assertTrue("No sporting odds were found", homePage.areSportingOddsAvailable());
	}
	
	@Then("^the sport should be displayed$")
	public void the_sport_should_be_displayed()
			throws Throwable {
		assertTrue("Sport page not loaded did not contain " + homePage.selectedSportName,
				homePage.getSportPageTitle().contains(homePage.selectedSportName));
	}

	@After
	public void attachScreenshotToReport(Scenario scenario) {
		if (scenario.isFailed()) {
			final byte[] screenshot = ((TakesScreenshot) driver)
					.getScreenshotAs(OutputType.BYTES);
			scenario.write("\n");
			scenario.embed(screenshot, "image/png");
		}
	}
}