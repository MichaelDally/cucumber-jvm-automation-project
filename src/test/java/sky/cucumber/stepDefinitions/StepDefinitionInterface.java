package sky.cucumber.stepDefinitions;

import org.openqa.selenium.WebDriver;

public interface StepDefinitionInterface {
	WebDriver driver = null;
	public void close();
}
