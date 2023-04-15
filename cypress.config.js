const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://www.google.com",
    retries: {
      runMode: 1,
      openMode: 4,
      },
    viewportHeight: 1080,
    viewportWidth: 1920,
  },
});
