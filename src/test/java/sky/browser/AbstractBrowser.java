package sky.browser;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.remote.SessionNotFoundException;
import org.openqa.selenium.remote.UnreachableBrowserException;

public class AbstractBrowser {
	protected static WebDriver driver;

	// This can be extended to return more browser types, e.g. Opera and Safari.
	// If the driver is 'Null', create a new instance of the browser, if it's
	// not null, use current browser
	public static WebDriver getDriver(String browserType) {
		try {
			if (driver == null) {
				if (browserType.equalsIgnoreCase("Firefox")) {
					driver = new FirefoxDriver();
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
			// When all tests are complete, create a new process and close open
			// browsers
			if(driver != null){
				try{
			Runtime.getRuntime().addShutdownHook(
					new Thread(new BrowserCleanup()));
				}catch(SessionNotFoundException snfe){
					System.out.println("Browsers closed.");
				}
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