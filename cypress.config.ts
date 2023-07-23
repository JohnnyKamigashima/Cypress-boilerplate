// eslint-disable-next-line camelcase

import {cypressCodegen} from 'cypress-codegen/plugin';

import {defineConfig} from 'cypress';


// @ts-ignore
export default defineConfig({
    reporter: 'cypress-mochawesome-reporter',

    e2e: {
        setupNodeEvents(on, config) {
            require('cypress-mochawesome-reporter/plugin')(on);
            cypressCodegen(on, config)
        },
        baseUrl: 'https://www.saucedemo.com/',
        retries: {
            runMode: 1,
            openMode: 4,
        },
        chromeWebSecurity: false,
        viewportHeight: 1080,
        viewportWidth: 1920,
        experimentalSessionAndOrigin:true
    },
    component: {
        setupNodeEvents(on, config) {
            cypressCodegen(on, config);
            return config;
        },
        devServer: {
            framework: 'create-react-app',
            bundler: 'webpack'
        }
    }
});
