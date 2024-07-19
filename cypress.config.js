module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // Defining env variables with values
    env: {
      userId: "bilalhussain9454+cypresstest@gmail.com",
      password: "Bilal@470"
    },
    // Defining baseUrl of product
    baseUrl: 'https://cypresstest.platform.creatingly.com',
    defaultCommandTimeout: 30000,
    requestTimeout: 30000,
    // Defining resolution as 1920 x 1080 for web page
    viewportHeight: 1080,
    viewportWidth: 1920,
  },
};
