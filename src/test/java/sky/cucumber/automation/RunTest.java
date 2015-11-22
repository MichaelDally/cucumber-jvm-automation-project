package sky.cucumber.automation;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = { "src/test/resources/features" }, tags = {"@regression"}, glue = { "sky.cucumber.stepDefinitions" }, plugin = {"pretty",
        "html:target/site/cucumber-pretty",
        "json:target/cucumber.json"  }, monochrome = true)
public class RunTest {
}