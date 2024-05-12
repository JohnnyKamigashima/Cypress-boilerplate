// eslint-disable-next-line camelcase

const { defineConfig } = require('cypress')
// @ts-ignore
export default defineConfig({
    reporter: 'cypress-mochawesome-reporter',

    e2e: {
        setupNodeEvents(on, config) {
            require('cypress-mochawesome-reporter/plugin')(on);
        },
        baseUrl: 'https://www.saucedemo.com/',
        retries: {
            runMode: 1,
            openMode: 4,
        },
        chromeWebSecurity: false,
        viewportHeight: 1080,
        viewportWidth: 1920,
    },
});
