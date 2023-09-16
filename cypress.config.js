const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    env: {
      demowebshop_url: "https://demowebshop.tricentis.com/",
    },
    testIsolation: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
