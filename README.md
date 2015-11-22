## Synopsis

This is a Cucumber-JVM template for use with WebDriver projects. It is incorporates enhanced reporting using Masterthought Reports, and can be configured to run on the browser of your choosing.


## Installation

Build the project using the following command:

```
mvn clean install
```

To run on a particular browser:

```
mvn clean install -Dbrowser=firefox
```

To run on a particular environment (named 'production' in this case):

```
mvn clean install -Dbrowser=firefox -Pproduction
```
