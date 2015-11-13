package sky.synchroniser;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import sky.browser.AbstractBrowser;

public class Synchroniser extends AbstractBrowser {
	protected static WebDriverWait wait;

	protected WebDriver driver = getDriver(System.getProperty("browser"));

	public WebDriver getDriver() {
		return driver;
	}

	public boolean waitUntilElementClickable(WebElement element, int timeout) {
		WebDriverWait wait = new WebDriverWait(driver, timeout);
		return wait.until(ExpectedConditions.elementToBeClickable(element))
				.isEnabled();
	}

	public boolean waitUntilElementDisplayed(WebElement element, int timeout) {
		WebDriverWait wait = new WebDriverWait(driver, timeout);
		return wait.until(ExpectedConditions.visibilityOf(element)) != null;
	}

	public boolean waitUntilElementIsSelected(WebElement element, int timeout) {
		WebDriverWait wait = new WebDriverWait(driver, timeout);
		return wait.until(ExpectedConditions.elementToBeSelected(element));
	}

	public boolean waitUntilElementIsHidden(WebElement element, int timeout) {
		WebDriverWait wait = new WebDriverWait(driver, timeout);
		return !wait.until(ExpectedConditions.visibilityOf(element))
				.isDisplayed();
	}

	//FIXME: Not keen on this method as it returns a void. Need to return boolean value, ideally.
	public void waitUntilAjaxRequestCompleted(int timeout) {
		new WebDriverWait(driver, timeout)
				.until(new ExpectedCondition<Boolean>() {
					public Boolean apply(WebDriver driver) {
						JavascriptExecutor js = (JavascriptExecutor) driver;
						return (Boolean) js
								.executeScript("return jQuery.active == 0");
					}
				});
	}


}