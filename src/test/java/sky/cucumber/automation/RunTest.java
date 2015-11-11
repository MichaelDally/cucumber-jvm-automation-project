package sky.cucumber.automation;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = { "src/test/resources/features" }, tags = { "@wip" }, glue = { "sky.cucumber.stepDefinitions" }, monochrome = true)
public class RunTest {
}