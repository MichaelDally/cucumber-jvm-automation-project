package sky.cucumber.stepDefinitions;

import org.junit.Assert;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.support.PageFactory;

import sky.browser.AbstractBrowser;
import sky.cucumber.pageObjects.LoginPage;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import com.jayway.restassured.http.ContentType;
import com.jayway.restassured.response.Header;
import com.jayway.restassured.response.Response;
import static com.jayway.restassured.RestAssured.given;

public class InstaStepDefs extends AbstractBrowser {
	public InstaStepDefs() {
		super(driver);
	}
	
	LoginPage loginPage;


	@Before
	public void setUp() {
		loginPage = PageFactory.initElements(driver, LoginPage.class);
		driver.manage().deleteAllCookies();
	}

	@Given("^I send a request to instagram$")
	public void i_send_a_request_to_instagram() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		//given().accept(ContentType.JSON).param
	}

	@When("^I get the response$")
	public void i_get_the_response() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	   // throw new PendingException();
	}

	@Then("^I should see valid data$")
	public void i_should_see_valid_data() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	   // throw new PendingException();
	}
}
