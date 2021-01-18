import { mul, div, add, minus, pow } from "./mathOperators";

describe("mathOperators test cases", () => {
  let number = Math.floor(Math.random() * 20) + 1;
  let number1 = Math.floor(Math.random() * 6) + 1;
  const multiplyResult = number * number1;
  const divResult = number / number1;
  const addResult = number + number1;
  const minusResult = number - number1; 
  const resultOfPow = Math.pow(number1, number1);

  test(`mul ${number} * ${number1} to equal ${multiplyResult}`, () => {
    expect(mul(number, number1)).toBe(multiplyResult);
  });

  test(`div ${number} / ${number1} to equal ${divResult}`, () => {
    expect(div(number, number1)).toBe(divResult);
  });

  test(`add ${number} / ${number1} to equal ${addResult}`, () => {
    expect(add(number, number1)).toBe(addResult);
  });

  test(`min ${number} - ${number1} to equal ${minusResult}`, () => {
    expect(minus(number, number1)).toBe(minusResult);
  });

  test(`pow ${number} ** ${number1} to equal ${resultOfPow}`, () => {
    expect(pow(number, number1)).toBe(resultOfPow);
  });
});
