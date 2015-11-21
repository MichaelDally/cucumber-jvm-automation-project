package sky.actions;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import sky.browser.AbstractBrowser;

public class Actions extends AbstractBrowser {
	protected static WebElement webElement;
	protected WebDriver driver = getDriver(System.getProperty("browser"));
	
	public WebDriver getDriver(){
		return driver;
	}	
	
	public boolean waitUntilElementClickable(WebElement element, int timeout){
		return new WebDriverWait(driver, timeout).until(ExpectedConditions.elementToBeClickable(element)).isEnabled();
	}
	
	public boolean waitUntilElementVisable(WebElement element, int timeout){
		WebDriverWait wait = new WebDriverWait(driver,timeout);
		return wait.until(ExpectedConditions.visibilityOf(element)) != null;
	}

}