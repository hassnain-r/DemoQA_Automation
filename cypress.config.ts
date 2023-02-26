import { defineConfig } from 'cypress';

export default defineConfig({
  viewportWidth: 1200,
  viewportHeight: 660,
  chromeWebSecurity: false,
  requestTimeout: 30000,
  defaultCommandTimeout: 15000,
  responseTimeout: 30000,
  // projectId: '8bcu3s',
  video: true,
  videoUploadOnPasses: true,

  env: {
    baseUrl: 'https://demoqa.com/',
  },

  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    experimentalSourceRewriting: false,
    watchForFileChanges: false,
    "reporter": "mochawesome",
    "reporterOptions": {
      "charts": true,
      "overwrite": false,
      "html": true,
      "json": true,
      "video": true,
      "embeddedScreenshots": true,
      "reportDir": "cypress/report"
    },

    excludeSpecPattern: '*.js',
    specPattern: 'cypress/e2e/**',

    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.ts').default(on, config);
    },
  },
});
