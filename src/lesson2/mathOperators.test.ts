import { mul, div, add, minus, sqr, exp, fact } from './mathOperators';

describe('mathOperators test cases', () => {
    it('mul 1 * 2 to equal 2', () => {
        expect(mul(1, 2)).toBe(2);
    });

    it('mul 2 * 2 to equal 4', () => {
        expect(mul(2, 2)).toBe(4);
    });

    it('div 2 / 2 to equal 1', () => {
        expect(div(2, 2)).toBe(1);
    });

    it('div 4 / 2 to equal 2', () => {
        expect(div(4, 2)).toBe(2);
    });

    it('add 4 + 2 to equal 6', () => {
        expect(add(4, 2)).toBe(6);
    });

    it('minus 4 - 2 to equal 2', () => {
        expect(minus(4, 2)).toBe(2);
    });

    it('sqr 2 ** to equal 4', () => {
        expect(sqr(2)).toBe(4);
    });

    it('sqr 5 ** to equal 25', () => {
        expect(sqr(5)).toBe(25);
    });

    it('exp 2 ^ 3 to equal 8', () => {
        expect(exp(2, 3)).toBe(8);
    });

    it('exp 5 ^ 4 to equal 625', () => {
        expect(exp(5, 4)).toBe(625);
    });

    it('fact 5 ! to equal 120', () => {
        expect(fact(5)).toBe(120);
    });

    it('fact 3 ! to equal 6', () => {
        expect(fact(3)).toBe(6);
    });
});
