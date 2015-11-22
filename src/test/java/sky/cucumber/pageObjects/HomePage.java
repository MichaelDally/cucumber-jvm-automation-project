package sky.cucumber.pageObjects;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.WebDriverWait;

import sky.browser.AbstractBrowser;
import sky.synchroniser.Synchroniser;

public class HomePage extends AbstractBrowser{
	
	Actions actions;
    Synchroniser synchroniser;

	public HomePage(){
		super(driver);
		this.actions = new Actions(driver);
	    this.synchroniser = new Synchroniser(driver);
	}
	private static final By BETTING_CELL_LOCATOR = By.cssSelector(".live-table .odds");
	private static final By EXPAND_ALL_LINK = By.cssSelector("#live-bet-bar .collapsed");
	private static final By ALL_AVAILABLE_SPORTS = By.cssSelector(".section>ul>a");
	private static final By SPORT_PAGE_HEADER = By.cssSelector(".content-head h1");
	private static final By ODDS_LOCATOR = By.cssSelector(".oc.oc-odds-desc");

	public String selectedSportName = "";
	
	
	
	
	private List<WebElement> getBettingCells(){
		return driver.findElements(BETTING_CELL_LOCATOR);
	}
	
	private List<WebElement> getAvailableSports(){
		return driver.findElements(ALL_AVAILABLE_SPORTS);		
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
		return randomlySelectedSelections;
	}
	
	private WebElement getPageHeader(){
		return driver.findElement(SPORT_PAGE_HEADER);
	}
	
	public void clickRandomSelections(int numberOfSelectionsToClickOn) throws InterruptedException{
		for (WebElement selection : getRandomSelections(numberOfSelectionsToClickOn)){
			synchroniser.waitUntilAjaxRequestCompleted(10);
			actions.moveToElement(selection);
			((JavascriptExecutor) driver).executeScript("arguments[0].scrollIntoView(true);", selection);
			selection.click();
		}
	}

	public void clickExpandAllLinkIfPresent() {
		if(isExpandAllLinkPresent() == true){
			getExpandAllLink().click();		
		}
	}
	
	public boolean isExpandAllLinkPresent(){
		return driver.findElement(EXPAND_ALL_LINK).isEnabled() && driver.findElement(EXPAND_ALL_LINK).isDisplayed();
	}

	
	public void clickRandomSportInNavPanelAndGetSelectedSportName(){
		List<WebElement> availableSports = getAvailableSports();
		int randomIndex = new Random().nextInt(getBettingCells().size());
		WebElement selectedSport = availableSports.get(randomIndex);
		selectedSportName = selectedSport.getText();
		selectedSport.click();		
	}

	public String getSportPageTitle() {
		return getPageHeader().getText();
	}

	public boolean areSportingOddsAvailable() {
		return getListOfOdds() > 0;
	}

	private int getListOfOdds() {
		return driver.findElements(ODDS_LOCATOR).size();
	}
}