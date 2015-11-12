package sky.cucumber.automation;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = { "src/test/resources/features" }, tags = { "@wip" }, glue = { "sky.cucumber.stepDefinitions" }, plugin = {"pretty", "html:target/cucumber-html-report"}, monochrome = true)
public class RunTest {
}