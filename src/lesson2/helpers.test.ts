import { checkMathOperatorsPriorities } from "./helpers";
import { MathPrioritiesList } from "./mathOperators";

describe("Helpers", () => {
  describe("checkMathOperatorsPriorities", () => {
    it("checkMathOperatorsPriorities detect priority zero", () => {
      expect(checkMathOperatorsPriorities("!", MathPrioritiesList.zero)).toBe(
        true
      );
    });
    it("checkMathOperatorsPriorities detect priority zero false case", () => {
      expect(checkMathOperatorsPriorities("+", MathPrioritiesList.zero)).toBe(
        false
      );
    });
    it("checkMathOperatorsPriorities detect priority from array of priorities", () => {
      expect(
        checkMathOperatorsPriorities("sin", [
          MathPrioritiesList.zero,
          MathPrioritiesList.first,
          MathPrioritiesList.second,
        ])
      ).toBe(true);
    });
    it("checkMathOperatorsPriorities detect priority from array of priorities false", () => {
      expect(
        checkMathOperatorsPriorities("sin", [
          MathPrioritiesList.zero,
          MathPrioritiesList.first,
        ])
      ).toBe(false);
    });
  });
});
