import { add, increment, addTen, match, filter, replace } from "./4_Curring";

describe("Math example", () => {
  it("Add function", () => {
    expect(add(1)(2)).toEqual(3);
  });

  it("Increment function", () => {
    expect(increment(2)).toEqual(3);
  });

  it("AddTen function", () => {
    expect(addTen(2)).toEqual(12);
  });
});

describe("String examples", () => {
  it("match function find r", () => {
    expect(match(/r/g, "hello world")).toEqual(["r"]);
  });

  const hasLetterR = match(/r/g); // x => x.match(/r/g)

  it("match function find r with curry", () => {
    expect(hasLetterR("hello world")).toEqual(["r"]); // [ "r" ]
    expect(hasLetterR("just j and s and t etc")).toEqual(null); // null
  });

  it("filter with find r condition", () => {
    expect(filter(hasLetterR, ["rock and roll", "smooth jazz"])).toEqual([
      "rock and roll",
    ]);
  });

  it("remove string without r symbol", () => {
    const removeStringsWithoutRs = filter(hasLetterR); // xs => xs.filter(x => x.match(/r/g))

    expect(
      removeStringsWithoutRs(["rock and roll", "smooth jazz", "drum circle"])
    ).toEqual(["rock and roll", "drum circle"]);
  });

  it("Censored symbols in string", () => {
    const noVowels = replace(/[aeiou]/gi); // (r,x) => x.replace(/[aeiou]/ig, r)
    const censored = noVowels("*"); // x => x.replace(/[aeiou]/ig, '*')

    expect(censored("Chocolate Rain")).toEqual("Ch*c*l*t* R**n");
  });
});
