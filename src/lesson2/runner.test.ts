import { runner } from './runner';

describe('Runner simple cases', () => {
    it('1 * 32', () => {
        expect(runner('1 * 32')).toEqual(32);
    });

    it('2 * 32', () => {
        expect(runner('2 * 32')).toEqual(64);
    });

    it('2 + 32', () => {
        expect(runner('2 + 32')).toEqual(34);
    });

    it('3 ^ 3', () => {
        expect(runner('3 ^ 3')).toEqual(27);
    });

    it('5 **', () => {
        expect(runner('5 **')).toEqual(25);
    });

    it('5 !', () => {
        expect(runner('5 !')).toEqual(120);
    });
});

describe('Runner squaring cases', () => {
    it('10 + 2 **', () => {
        expect(runner('10 + 2 **')).toEqual(14);
    });

    it('40 + 5 ** - 20', () => {
        expect(runner('40 + 5 ** - 20')).toEqual(45);
    });
});

describe('Runner exponentiation cases', () => {
    it('10 + 2 ^ 3', () => {
        expect(runner('10 + 2 ^ 3')).toEqual(18);
    });

    it('20 - 4 ^ 2', () => {
        expect(runner('20 - 4 ^ 2')).toEqual(4);
    });
});

describe('Runner factorial cases', () => {
    it('10 + 2 ^ 3 + 3 !', () => {
        expect(runner('10 + 2 ^ 3 + 3 !')).toEqual(24);
    });

    it('20 - 4 ^ 2 + 5 !', () => {
        expect(runner('20 - 4 ^ 2 + 5 !')).toEqual(124);
    });
});

describe('Runner tripled/mixed cases', () => {
    it('2 * 2 * 3', () => {
        expect(runner('2 * 2 * 3')).toEqual(12);
    });

    it('2 * 2 + 3', () => {
        expect(runner('2 * 2 + 3')).toEqual(7);
    });

    it('2 + 2 * 3', () => {
        expect(runner('2 + 2 * 3')).toEqual(8);
    });
});

describe('Runner long cases', () => {
    it('20 / 2 + 1 * 10 + 3 ! - 5 * 3 - 2 ^ 3', () => {
        expect(runner('20 / 2 + 1 * 10 + 3 ! - 5 * 3 - 2 ^ 3')).toEqual(3);
    });

    it('20 / 4 + 5 ! - 10 * 10 / 5 - 3 - 3 ^ 4', () => {
        expect(runner('20 / 4 + 5 ! - 10 * 10 / 5 - 3 - 3 ^ 4')).toEqual(21);
    });
});

describe('Runner with brackets cases', () => {
    it('(10 + 2) * 5', () => {
        expect(runner('(10 + 2) * 5')).toEqual(60);
    });

    it('20 / (7 - 2)', () => {
        expect(runner('20 / (7 - 2)')).toEqual(4);
    });
});

describe('Runner with brackets in brackets cases', () => {
    it('((10 + 2) * 5) / 2 - 30 / (2 ^ 3 + 2)', () => {
        expect(runner('((10 + 2) * 5) / 2 - 30 / (2 ^ 3 + 2)')).toEqual(27);
    });

    it('(((3 ! + 6) * 5) / 2 - 30 / (2 ^ 3 + 2)) * 2', () => {
        expect(runner('(((3 ! + 6) * 5) / 2 - 30 / (2 ^ 3 + 2)) * 2')).toEqual(
            54
        );
    });
});
