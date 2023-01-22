const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  reporter: 'cypress-mochawesome-reporter',
  defaultCommandTimeout: 4000,
  pageLoadTimeout: 30000,
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    setupNodeEvents(on, config) {

      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
