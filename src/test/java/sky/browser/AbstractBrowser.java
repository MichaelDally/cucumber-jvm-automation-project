package sky.browser;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxProfile;
import org.openqa.selenium.firefox.internal.ProfilesIni;

import sky.interfaces.BrowserInterface;

public class AbstractBrowser implements BrowserInterface {
	protected static WebDriver driver;

	public static WebDriver getDriver(String browserType) {
		try{
		if (driver == null) {
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
			driver.manage().deleteAllCookies();
			return driver;
		} else {
			return driver;
		}} finally{
        	Runtime.getRuntime().addShutdownHook(
				new Thread(new BrowserCleanup()));
        }		
	}

	public void getUrl(String url) {
		driver.get(url);
	}

	public void close() {
		driver.close();
	}
	
	private static class BrowserCleanup implements Runnable {
		public void run() {
			driver.close();
		}
	}
}