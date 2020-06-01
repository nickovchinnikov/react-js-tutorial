import { spawn } from "./spawn";

describe("spawn", () => {
  it("flow", async () => {
    const fetchSomething = () =>
      new Promise((resolve) => {
        setTimeout(() => resolve("value"), 500);
      });

    const ourImportantFunction = spawn(function* () {
      const val1 = yield fetchSomething();
      const val2 = yield fetchSomething();
      const val3 = yield fetchSomething();

      return [val1, val2, val3];
    });

    const result = await ourImportantFunction();
    expect(result).toStrictEqual(["value", "value", "value"]);
  });
});
