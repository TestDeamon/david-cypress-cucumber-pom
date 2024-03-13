# Automation Script Project

This project aims to provide easy guideline on how to install project and the framework adopted.

## Limitation with Cucumber Webpack - A cucumber webpack using javascript
https://github.com/badeball/cypress-cucumber-preprocessor/

One of the limitations of using Cucumber Webpack in this project is the inability to use Gherkin syntax such as `and`, `but`, `*`. 
This requires individuals to run `npm install` as all dependencies have been added as `saveDependency`.

## Project Details
- Name: automation-script
- Version: 1.0.0
- Description: Selenium easy automation with Cypress using Page Object Model and BDD
- Main: index.js
- Author: somebody
- License: ISC

## Technologies Used
- JavaScript
- Cypress
- Page Object Model
- BDD

## Setup Instructions
1. Clone the repository
2. Run `npm install` to install dependencies
3. Execute tests using Cypress

## Step Definitions
- To avoid repetition of scripts/steps which will be reused by other scenarios, steps was implemented in the general.js file to ensure its easily accessible to the project
- cypress/e2e/[filepath]//*.{js,ts}
- cypress/e2e/[filepath].{js,ts}
- cypress/support/step_definitions/*.{js,ts}
- cypress/e2e/support/step_definitions/common-step-definitions/*.js



