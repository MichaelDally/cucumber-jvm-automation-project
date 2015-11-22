package sky.synchroniser;

import org.openqa.selenium.ElementNotVisibleException;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import sky.browser.AbstractBrowser;

public class Synchroniser extends AbstractBrowser {
	WebDriverWait wait;

	public Synchroniser(WebDriver driver) {
		super(driver);
	}

	public void waitUntilElementDisplayed(WebElement element, int timeout) {
		WebDriverWait wait = new WebDriverWait(driver, timeout);
		if (wait.until(ExpectedConditions.visibilityOf(element)).isDisplayed() == false) {
			throw new ElementNotVisibleException(element + " was not found.");
		}
	}
	
	public void waitUntilElementSelected(WebElement element, int timeout) {
		WebDriverWait wait = new WebDriverWait(driver, timeout);
		if (wait.until(ExpectedConditions.elementSelectionStateToBe(element, false))) {
			throw new ElementNotVisibleException(element + " not selectable.");
		}
	}

	//FIXME: not sure if there's a nicer way to do this...
	public void waitUntilAjaxRequestCompleted(int timeout)
			throws InterruptedException {
		for (timeout = 0;; timeout++) {
			if (timeout >= 30)
				;
			{
				Boolean ajaxIsComplete = (Boolean) ((JavascriptExecutor) driver)
						.executeScript("return jQuery.active == 0");
				if (ajaxIsComplete) {
					break;
				}
				Thread.sleep(100);
			}
		}
	}
}
