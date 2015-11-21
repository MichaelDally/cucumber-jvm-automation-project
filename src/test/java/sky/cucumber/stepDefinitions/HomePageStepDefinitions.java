package sky.cucumber.stepDefinitions;

import static org.junit.Assert.assertTrue;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import sky.browser.AbstractBrowser;
import sky.cucumber.pageObjects.BetSlip;
import sky.cucumber.pageObjects.HomePage;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class HomePageStepDefinitions extends AbstractBrowser {

	private HomePage homePage;
	private BetSlip betSlip;
	private WebDriver driver = getDriver(System.getProperty("browser"));
	@Before
	public void setUp() {
		homePage = PageFactory.initElements(driver, HomePage.class);
		betSlip = PageFactory.initElements(driver, BetSlip.class);
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
		assertTrue(betSlip.isBetSlipVisible());
	}
}