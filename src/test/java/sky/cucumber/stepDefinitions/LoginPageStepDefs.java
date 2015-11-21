package sky.cucumber.stepDefinitions;

import org.junit.Assert;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import sky.browser.AbstractBrowser;
import sky.cucumber.pageObjects.LoginPage;
import sky.synchroniser.Synchroniser;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginPageStepDefs extends AbstractBrowser{

	private LoginPage loginPage;
	private Synchroniser synchroniser = new Synchroniser();
	private WebDriver driver = getDriver(System.getProperty("browser"));


	@Before
	public void setUp() {
		loginPage = PageFactory.initElements(driver, LoginPage.class);
	}

	@When("^I select login$")
	public void i_select_login() throws Throwable {
		loginPage.clickLoginLinkLocator();
	}

	@Then("^I should see the login options$")
	public void i_should_see_the_login_options() throws Throwable {
		Assert.assertTrue("Login form not loaded",
				loginPage.isLoginFormPresent());
		synchroniser.waitUntilAjaxRequestCompleted(10);
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
