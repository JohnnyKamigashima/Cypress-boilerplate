const { defineConfig } = require('cypress');
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
    baseUrl: "https://www.google.com",
    retries: {
      runMode: 1,
      openMode: 4,
    },
    viewportHeight: 1080,
    viewportWidth: 1920,
  },
});
