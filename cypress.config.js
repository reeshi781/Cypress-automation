const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'sv4c4q',

  defaultCommandTimeout: 8000,
  pageLoadTimeout: 30000,
  reporter: "mochawesome",


  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
    specPattern: 'cypress/integration/example/BDD/*.feature',
    specPattern: 'cypress/integration/example/*.js'
  },
  "cypress-cucumber-preprocessor": {
    "nonGlobalStepDefinitions": true
  },

  "env" : {
    "url" : "https://rahulshettyacademy.com/angularpractice/",
  }

});
