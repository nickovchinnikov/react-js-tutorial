import R from "ramda";
import { Flock, conjoin, breed, add, multiply } from "./1_Flock";

describe("OOP Flock", () => {
  const flockA = new Flock(4);
  const flockB = new Flock(2);
  const flockC = new Flock(0);

  it("Calculation with error", () => {
    const result = flockA
      .conjoin(flockC)
      .breed(flockB)
      .conjoin(flockA.breed(flockB)).seagulls;

    expect(result).toBe(32);
  });
});

describe("FP Flock", () => {
  const flockA = 4;
  const flockB = 2;
  const flockC = 0;

  it("Calculation without error", () => {
    const result = conjoin(
      breed(flockB, conjoin(flockA, flockC)),
      breed(flockA, flockB)
    );

    expect(result).toBe(16);
  });

  it("Calculation with true identities names", () => {
    const result = add(
      multiply(flockB, add(flockA, flockC)),
      multiply(flockA, flockB)
    );

    expect(result).toBe(16);
  });
});

describe("And with that, we gain the knowledge of the ancients", () => {
  const [x, y, z] = [1, 2, 3];

  it("associative law => (1 + 2) + 3 = 1 + (2 + 3)", () => {
    expect(add(add(x, y), z) === add(x, add(y, z))).toBe(true);
  });

  it("commutative law => 1 + 2 = 2 + 1", () => {
    expect(add(x, y) === add(y, x)).toBe(true);
  });

  it("identity law => 1 + 0 = 1", () => {
    expect(add(x, 0) === x).toBe(true);
  });

  it("distributive law => 1 * (2 + 3) = (1 * 2) + (1 * 3)", () => {
    expect(multiply(x, add(y, z)) === add(multiply(x, y), multiply(x, z))).toBe(
      true
    );
  });
});

describe("Apply math laws to our programm", () => {
  const flockA = 4;
  const flockB = 2;
  const flockC = 0;

  it("Original line", () => {
    expect(
      add(multiply(flockB, add(flockA, flockC)), multiply(flockA, flockB))
    ).toBe(16);
  });

  it("Apply the identity property to remove the extra add (add(flockA, flockC) == flockA)", () => {
    expect(add(multiply(flockB, flockA), multiply(flockA, flockB))).toBe(16);
  });

  it("Apply distributive property to achieve our result", () => {
    expect(multiply(flockB, add(flockA, flockA))).toBe(16);
  });
});

describe("Ramda example", () => {
  const flockA = 4;
  const flockB = 2;

  it("Apply distributive property to achieve our result", () => {
    expect(R.multiply(flockB, R.add(flockA, flockA))).toBe(16);
  });
});
