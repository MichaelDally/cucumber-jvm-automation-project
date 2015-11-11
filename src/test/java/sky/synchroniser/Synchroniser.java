package sky.synchroniser;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxProfile;
import org.openqa.selenium.firefox.internal.ProfilesIni;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import sky.browser.AbstractBrowser;

public class Synchroniser extends AbstractBrowser {
	protected static WebDriverWait wait;

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