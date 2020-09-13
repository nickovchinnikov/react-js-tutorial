import { checkerMathOperatorsPriorities } from "./helpers";
import { MathPrioritiesList } from "./mathOperators";

describe("Helpers", () => {
  describe("checkerMathOperatorsPriorities", () => {
    it("checkerMathOperatorsPriorities detect priority ZERO", () => {
      expect(checkerMathOperatorsPriorities("!", MathPrioritiesList.ZERO)).toBe(
        true
      );
    });
    it("checkerMathOperatorsPriorities detect priority ZERO false case", () => {
      expect(checkerMathOperatorsPriorities("+", MathPrioritiesList.ZERO)).toBe(
        false
      );
    });
    it("checkerMathOperatorsPriorities detect priority from array of priorities", () => {
      expect(
        checkerMathOperatorsPriorities("sin", [
          MathPrioritiesList.ZERO,
          MathPrioritiesList.FIRST,
          MathPrioritiesList.SECOND,
        ])
      ).toBe(true);
    });
    it("checkerMathOperatorsPriorities detect priority from array of priorities false", () => {
      expect(
        checkerMathOperatorsPriorities("sin", [
          MathPrioritiesList.ZERO,
          MathPrioritiesList.FIRST,
        ])
      ).toBe(false);
    });
  });
});
