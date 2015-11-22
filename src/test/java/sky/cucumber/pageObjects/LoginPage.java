package sky.cucumber.pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import sky.browser.AbstractBrowser;

public class LoginPage extends AbstractBrowser{	
	public LoginPage() {
		super(driver);
	}
	private static final By LOGIN_LINK_LOCATOR = By.cssSelector(".js-account-bar__login");

	
	
	private WebElement getLoginLinkLocator(){
		return driver.findElement(LOGIN_LINK_LOCATOR);
	}

	public void clickLoginLinkLocator(){
		getLoginLinkLocator().click();
	}

	public boolean isLoginFormPresent() {
		WebElement frame = driver.findElement(By.cssSelector("#SkyBetAccount"));
		driver.switchTo().frame(frame);
		return driver.findElement(By.id("username")).isDisplayed();	
	}

}
