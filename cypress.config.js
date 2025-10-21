const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://automationexercise.com/',
    supportFile: 'cypress/support/e2e.js',
    setupNodeEvents(on, config) {
      return config
    }
  },
  viewportWidth: 414,
  viewportHeight: 896,
  defaultCommandTimeout: 10000,
})
