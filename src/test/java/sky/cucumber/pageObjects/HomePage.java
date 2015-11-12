package sky.cucumber.pageObjects;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;

import sky.abstractPageObject.AbstractPageObject;
import sky.synchroniser.Synchroniser;

public class HomePage extends AbstractPageObject{
	public HomePage(WebDriver driver){
		this.driver = super.getDriver();
	}
	private By BETTING_CELL_LOCATOR = By.cssSelector(".live-table .odds");
	private By EXPAND_ALL_LINK = By.cssSelector("#live-bet-bar .collapsed");
	WebDriver driver;
	Actions actions = new Actions(getDriver());

	Synchroniser synchroniser = new Synchroniser();
	
	
	private List<WebElement> getBettingCells(){
		return driver.findElements(BETTING_CELL_LOCATOR);
	}
	
	private WebElement getExpandAllLink(){
		return driver.findElement(EXPAND_ALL_LINK);
	}
	
	private List<WebElement> getRandomSelections(int numberOfSelectionsToClickOn){
		List<WebElement> availableSelections = getBettingCells();
		List<WebElement> randomlySelectedSelections = new ArrayList<WebElement>();
		int randomIndex = new Random().nextInt(getBettingCells().size());
		for(int index = 0; index < numberOfSelectionsToClickOn; index++){
			randomlySelectedSelections.add(availableSelections.get(randomIndex));
			availableSelections.remove(randomIndex);
		}
		System.out.println(availableSelections);
		return randomlySelectedSelections;
	}
	
	public void clickRandomSelections(int numberOfSelectionsToClickOn){
		for (WebElement selection : getRandomSelections(numberOfSelectionsToClickOn)){
			synchroniser.waitUntilElementVisable(selection,10);
			actions.moveToElement(selection);
			selection.click();
		}
	}

	public void clickExpandAllLinkIfPresent() {
		if(isExpandAllLinkPresent() == true){
			getExpandAllLink().click();		
		}
	}
	
	public boolean isExpandAllLinkPresent(){
		return synchroniser.waitUntilElementVisable(getExpandAllLink(), 10);
	}
	
	
}
;