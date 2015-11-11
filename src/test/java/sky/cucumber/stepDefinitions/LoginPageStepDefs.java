package sky.cucumber.stepDefinitions;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import sky.browser.AbstractBrowser;
import sky.cucumber.pageObjects.LoginPage;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginPageStepDefs extends AbstractBrowser {

	private LoginPage loginPage;
	private WebDriver driver = getDriver(System.getProperty("browser"));

	@Before
	public void setUp() {
		loginPage = PageFactory.initElements(driver, LoginPage.class);
	}
	
	@When("^I select login$")
	public void i_select_login() throws Throwable {
		loginPage.clickRandomSelections(1);
	}

	@Then("^I should see the login options$")
	public void i_should_see_the_login_options() throws Throwable {
	    System.out.println("Logged in");
	}
}
