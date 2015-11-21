package sky.cucumber.pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import sky.abstractPageObject.AbstractPageObject;
import sky.synchroniser.Synchroniser;

public class BetSlip extends AbstractPageObject{
	WebDriver driver;
	Synchroniser synchroniser = new Synchroniser();
	
	public BetSlip(WebDriver driver){
		this.driver = getDriver();
	}
	
	private By BET_SLIP_CONTENT = By.cssSelector(".bet-slip-content .pane");
	
	public WebElement getBetSlipContentLocator(){
		return driver.findElement(BET_SLIP_CONTENT);
	}
	
	public boolean isBetSlipVisible(){
		return driver.findElement(BET_SLIP_CONTENT).isDisplayed();
	}
}
