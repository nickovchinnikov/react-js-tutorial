// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  preset: "jest-puppeteer",
  clearMocks: true,
  globalSetup: "jest-environment-puppeteer/setup",
  globalTeardown: "jest-environment-puppeteer/teardown",
  testEnvironment: "jest-environment-puppeteer",
  setupFilesAfterEnv: ["<rootDir>/internals/jestSettingsE2E.js"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
  },
  testPathIgnorePatterns: ["src"],
  moduleDirectories: ["node_modules", "src"],
};
