package sky.cucumber.pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import sky.abstractPageObject.AbstractPageObject;
import sky.synchroniser.Synchroniser;

public class LoginPage extends AbstractPageObject{	
	WebDriver driver;
	Synchroniser synchroniser = new Synchroniser();

	private By LOGIN_LINK_LOCATOR = By.cssSelector(".js-account-bar__login");
	private By LOGIN_FORM_DIV_LOCATOR = By.cssSelector("#SkyBetAccount");

	public LoginPage(WebDriver driver){
		this.driver = super.getDriver();
		}
	
	private WebElement getLoginLinkLocator(){
		return driver.findElement(LOGIN_LINK_LOCATOR);
	}

	public void clickLoginLinkLocator(){
		getLoginLinkLocator().click();
		synchroniser.waitUntilAjaxRequestCompleted(10);
	}

	public boolean isLoginFormPresent() {
		WebElement frame = driver.findElement(By.cssSelector("#SkyBetAccount"));
		driver.switchTo().frame(frame);
		return driver.findElement(By.id("username")).isDisplayed();	
	}

}
