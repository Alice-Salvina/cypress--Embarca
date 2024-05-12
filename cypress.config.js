const { defineConfig } = require("cypress");

module.exports = defineConfig({
  waitForAnimations: true,
  e2e: {
    baseUrl: 'https://www.embarca-staging.com.br',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});