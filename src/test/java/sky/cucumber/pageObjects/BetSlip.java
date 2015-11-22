package sky.cucumber.pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import sky.browser.AbstractBrowser;
import sky.synchroniser.Synchroniser;

public class BetSlip extends AbstractBrowser{
	Synchroniser synchroniser;
	
	public BetSlip(){
		super(driver);
		this.synchroniser = new Synchroniser(driver);
	}
	
	private By BET_SLIP_CONTENT = By.cssSelector(".bet-slip-content .pane");
	
	public WebElement getBetSlipContentLocator(){
		return driver.findElement(BET_SLIP_CONTENT);
	}
	
	public boolean isBetSlipVisible(){
		return driver.findElement(BET_SLIP_CONTENT).isDisplayed();
	}
	
	public void waitUntilBetSlipVisible(){
		synchroniser.waitUntilElementDisplayed(getBetSlipContentLocator(), 10);
	}
}
