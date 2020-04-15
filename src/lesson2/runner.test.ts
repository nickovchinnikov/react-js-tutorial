import { runner } from "./runner";

describe("Invalid cases", () => {
	it("Empty line should throw error", () => {
		expect(() => runner("")).toThrowError(TypeError("Unexpected string"));
	});

	it("White space should throw error", () => {
		expect(() => runner(" ")).toThrowError(TypeError("Unexpected string"));
	});

	it("((2 + 2) throw error", () => {
		expect(() => runner("((2 + 2)")).toThrowError(
			TypeError("Unexpected bracket sequence")
		);
	});

	it("(2 + 2)) throw error", () => {
		expect(() => runner("(2 + 2))")).toThrowError(
			TypeError("Unexpected bracket sequence")
		);
	});

	it("(2 + ) - (1 + 2)) throw error", () => {
		expect(() => runner("(2 + ) - (1 + 2))")).toThrowError(
			TypeError("Unexpected bracket sequence")
		);
	});

	it("(2 + 2)) - (4 - 4) throw error", () => {
		expect(() => runner("(2 + 2)) - (4 - 4)")).toThrowError(
			TypeError("Unexpected bracket sequence")
		);
	});

	it("( ) throw error", () => {
		expect(() => runner("( )")).toThrowError(TypeError("Unexpected string"));
	});
});

describe("Runner simple cases", () => {
	it("7", () => {
		expect(runner("7")).toEqual(7);
	});

	it("5 ", () => {
		expect(runner("5 ")).toEqual(5);
	});

	it("1 * 32", () => {
		expect(runner("1 * 32")).toEqual(32);
	});

	it("2 * 32", () => {
		expect(runner("2 * 32")).toEqual(64);
	});

	it("2 + 32", () => {
		expect(runner("2 + 32")).toEqual(34);
	});

	it("2 ^ 10", () => {
		const result = runner("2 ^ 10");

		expect(result).toEqual(1024);
	});
	it("2 ^ -1", () => {
		const result = runner("2 ^ -1");

		expect(result).toEqual(0.5);
	});
	it("3 **", () => {
		const result = runner("3 **");

		expect(result).toEqual(9);
	});
	it("4 !", () => {
		const result = runner("4 !");

		expect(result).toEqual(24);
	});
});

describe("Runner tripled/mixed cases", () => {
	it("2 * 2 * 3", () => {
		expect(runner("2 * 2 * 3")).toEqual(12);
	});

	it("2 * 2 + 3", () => {
		expect(runner("2 * 2 + 3")).toEqual(7);
	});

	it("2 + 2 * 3", () => {
		expect(runner("2 + 2 * 3")).toEqual(8);
	});

	it("2 ^ 10 - 100", () => {
		const result = runner("2 ^ 10 - 100");

		expect(result).toEqual(924);
	});
	it("8 + 2 ** / 4", () => {
		const result = runner("8 + 2 ** / 4");

		expect(result).toEqual(9);
	});

	it("3 ! + 2 ** / 4 - 3 !", () => {
		const result = runner("3 ! + 2 ** / 4 - 3 !");

		expect(result).toEqual(1);
	});
});

describe("Runner long cases", () => {
	it("20 + 1 * 10 - 5 * 3", () => {
		expect(runner("20 + 1 * 10 - 5 * 3")).toEqual(15);
	});

	it("20 - 10 * 10 / 5 - 3", () => {
		expect(runner("20 - 10 * 10 / 5 - 3")).toEqual(-3);
	});

	it("2 ^ 10 - 100 * 20 / 2 + 1", () => {
		const result = runner("2 ^ 10 - 100 * 20 / 2 + 1");

		expect(result).toEqual(25);
	});

	it("10 ** + 4 / 2 ** - 2", () => {
		const result = runner("10 ** + 4 / 2 ** - 2");

		expect(result).toEqual(99);
	});

	it("10 ** + 4 ! / 2 ** - 2 ! * 5", () => {
		const result = runner("10 ** + 4 ! / 2 ** - 2 ! * 5");

		expect(result).toEqual(96);
	});
});

describe("Runner brackets cases", () => {
	it.each([
		["(1 + 3)", 4],
		["(2 ^ (5 + (3 + 2)) - 100 * 20 / 2 + (3 - 2))", 25],
		["(1 + 3 - 4 / 2)", 2], 
		[" ( 1 + 3 ) - ( 8 - 4 ) / 2 ", 2],
		["(2 + 2 - (3 * (2 - 1))) * (((2 + 1) + (1 + 1)) + (9 / (10 - 1)))", 6],
		["((2 + 2 ^ (1 + 2)) ** + (2 + 2) ! / 2 ** - 2 ! * (10 - (3 + 2)))", 96]
	])('%s', (t, r) => {
		const result = runner(t);

		expect(result).toEqual(r);
	});
});
