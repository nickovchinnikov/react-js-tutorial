/**
 * @type {import('@stryker-mutator/api/core').StrykerOptions}
 */
module.exports = {
  packageManager: "npm",
  reporters: ["html", "clear-text", "progress", "dashboard"],
  testRunner: "jest",
  coverageAnalysis: "off",
  tsconfigFile: "tsconfig.json",
  mutate: ["src/**/*.ts?(x)", "!src/**/*@(.test|.spec|Spec|stories).ts?(x)"],
};
