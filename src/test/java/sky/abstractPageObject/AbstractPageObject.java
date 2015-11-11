package sky.abstractPageObject;

import org.openqa.selenium.WebDriver;

import sky.browser.AbstractBrowser;


public class AbstractPageObject extends AbstractBrowser {
	protected WebDriver driver = getDriver(System.getProperty("browser"));
	public WebDriver getDriver(){
		return driver;
	}	

}
