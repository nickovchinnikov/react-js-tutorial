module.exports = {
  launch: {
    headless: true,
  },
  browser: "chromium",
  server: {
    command: "npm run start",
    launchTimeout: 10000,
    port: 8080,
    debug: true,
  },
};
