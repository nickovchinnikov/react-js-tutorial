import { random } from "faker";

import {
  mul,
  div,
  add,
  minus,
  pow,
  sin,
  cos,
  tg,
  ctg,
  factorial,
} from "./mathOperators";

describe("mathOperators test cases", () => {
  const number1 = random.number();
  const number2 = random.number();

  const resultOfMultiplication = number1 * number2;
  it(`mul ${number1} * ${number2} to equal ${resultOfMultiplication}`, () => {
    expect(mul(number1, number2)).toBe(resultOfMultiplication);
  });

  const resultOfDivision = number1 / number2;
  it(`div ${number1} / ${number2} to equal ${resultOfDivision}`, () => {
    expect(div(number1, number2)).toBe(resultOfDivision);
  });

  const resultOfSum = number1 + number2;
  it(`add ${number1} + ${number1} to equal ${resultOfSum}`, () => {
    expect(add(number1, number2)).toBe(resultOfSum);
  });

  const resultOfSubstraction = number1 - number2;
  it(`minus ${number1} - ${number2} to equal ${resultOfSubstraction}`, () => {
    expect(minus(number1, number2)).toBe(resultOfSubstraction);
  });

  const power = 2;
  const resultOfPow = Math.pow(number1, power);
  it(`pow ${number1} ^ ${power} to equal ${resultOfPow}`, () => {
    expect(pow(number1, power)).toBe(resultOfPow);
  });

  it("3! to equal 6", () => {
    expect(factorial(3)).toBe(6);
  });
});

describe("triginimetric operations test cases", () => {
  it("sin 30", () => {
    expect(sin(30)).toBe(0.5);
  });

  it("sin 0", () => {
    expect(sin(0)).toBe(0);
  });

  it("cos 60", () => {
    expect(cos(60)).toBe(0.5);
  });

  it("cos 0", () => {
    expect(cos(0)).toBe(1);
  });

  it("tg 60", () => {
    expect(tg(60)).toBe(1.73);
  });

  it("tg 0", () => {
    expect(tg(0)).toBe(0);
  });

  it("ctg 90", () => {
    expect(ctg(90)).toBe(0);
  });

  it("ctg 1", () => {
    expect(ctg(1)).toBe(50);
  });
});
