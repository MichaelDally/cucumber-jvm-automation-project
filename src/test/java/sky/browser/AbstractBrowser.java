package sky.browser;

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

public class AbstractBrowser {
	protected static WebDriver driver;
	protected static WebDriverWait wait;

	public static WebDriver getDriver(String browserType) {
		if(driver == null){
		if (browserType.equalsIgnoreCase("Firefox")) {
				ProfilesIni profile = new ProfilesIni();
				FirefoxProfile myProfile = profile.getProfile("default");
				myProfile.setAcceptUntrustedCertificates(true);
				myProfile.setAssumeUntrustedCertificateIssuer(true);
				driver = new FirefoxDriver(myProfile);
			} else if (browserType.equalsIgnoreCase("chrome")) {
				System.setProperty("webdriver.chrome.driver",
						"src/test/resources/chromedriver.exe");
				driver = new ChromeDriver();
			}
			driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
			driver.manage().window().maximize();
		return driver;
		}else{
			return driver;
		}
	}

	public void close() {
		driver.close();
	}

	public void getUrl(String url) {
		driver.get(url);
	}
	
	public boolean waitUntilElementClickable(WebElement element){
		return new WebDriverWait(driver,10).until(ExpectedConditions.elementToBeClickable(element)).isEnabled();
	}
	
	public boolean waitUntilElementVisable(WebElement element, int timeout){
		WebDriverWait wait = new WebDriverWait(driver,10);
		return wait.until(ExpectedConditions.visibilityOf(element)) != null;
	}

}