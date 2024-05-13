const { defineConfig } = require("cypress");

module.exports = defineConfig({
  waitForAnimations: true,
  defaultCommandTimeout: 8000,
  e2e: {
    baseUrl: 'https://www.embarca-staging.com.br',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});