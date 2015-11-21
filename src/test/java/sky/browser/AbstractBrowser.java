package sky.browser;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxProfile;
import org.openqa.selenium.firefox.internal.ProfilesIni;
import org.openqa.selenium.remote.SessionNotFoundException;
import org.openqa.selenium.remote.UnreachableBrowserException;

import sky.interfaces.BrowserInterface;

public class AbstractBrowser implements BrowserInterface {
	protected static WebDriver driver;

	// This can be extended to return more browser types, e.g. Opera and Safari.
	// If the driver is 'Null', create a new instance of the browser, if it's
	// not null, use current browser
	public static WebDriver getDriver(String browserType) {
		try {
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
			}
		} finally {
			if(driver != null){
			Runtime.getRuntime().addShutdownHook(
					new Thread(new BrowserCleanup()));
			}else if(driver == null){
				System.out.println("Tests completed");
			}
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
			try{
			driver.close();
			}catch(SessionNotFoundException snfe){
				//do nothing
			}catch(UnreachableBrowserException ube){
				//do nothing
			}
		}
	}
}