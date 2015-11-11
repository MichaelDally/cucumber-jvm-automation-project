package sky.cucumber.pageObjects;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import sky.abstractPageObject.AbstractPageObject;
import sky.browser.AbstractBrowser;

public class LoginPage extends AbstractPageObject{	
	private By BETTING_CELL_LOCATOR = By.cssSelector(".odds-cell");
	private By EXPAND_ALL_LINK = By.cssSelector("#live-bet-bar .collapsed");
	WebDriver driver;

	public LoginPage(WebDriver driver){
		this.driver = super.getDriver();
	}
	private List<WebElement> getBettingCells(){
		return driver.findElements(BETTING_CELL_LOCATOR);
	}
	
	private WebElement getExpandAllLink(){
		return driver.findElement(EXPAND_ALL_LINK);
	}
	
	private List<WebElement> getRandomSelections(int numberOfSelectionsToClickOn){
		List<WebElement> randomlySelectedSelections = new ArrayList<WebElement>();
		List<WebElement> availableSelections = getBettingCells();
		int randomIndex = new Random().nextInt(getBettingCells().size());
		for(int index = 0; index < numberOfSelectionsToClickOn; index++){
			randomlySelectedSelections.add(availableSelections.get(randomIndex));
			availableSelections.remove(randomIndex);
		}
		return randomlySelectedSelections;
	}
	
	public void clickRandomSelections(int numberOfSelectionsToClickOn){
		for (WebElement selection : getRandomSelections(numberOfSelectionsToClickOn)){
			selection.click();
		}
	}

	public void clickExpandAll() {
		getExpandAllLink().click();		
	}
}
