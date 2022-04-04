// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  clearMocks: true,
  coverageDirectory: "coverage",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: [
    "<rootDir>/internals/jestSettings.js",
    "<rootDir>/internals/jestSetup.ts",
  ],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
    "^.+\\.mdx$": "@storybook/addon-docs/jest-transform-mdx",
  },
  moduleNameMapper: {
    // https://jestjs.io/docs/en/webpack#handling-static-assets
    "\\.(css|less)$": "<rootDir>/internals/__mocks__/styleMock.js",
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  testPathIgnorePatterns: ["e2e"],
  moduleDirectories: ["node_modules", "src"],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 70,
      lines: 80,
    },
  },
};
