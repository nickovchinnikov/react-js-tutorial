module.exports = {
  launch: {
    headless: true,
  },
  browser: "chromium",
  server: {
    command: "npm run start",
    debug: true,
  },
};
