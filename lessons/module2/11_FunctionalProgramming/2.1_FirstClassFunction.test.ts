import { hi } from "./2_FirstClassFunction";

describe("Function is data type", () => {
  it("Calculation with error", () => {
    const hiFunc = hi; // name => `Hi ${name}`
    const hiJonas = hi("jonas"); // "Hi jonas"
    const hiTimes = hiFunc("times"); // "Hi times"

    expect(hiFunc).toEqual(hi);
    expect(hiJonas).toEqual("Hi jonas");
    expect(hiTimes).toEqual("Hi times");
  });
});
