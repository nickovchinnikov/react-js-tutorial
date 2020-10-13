import {
    firstPrioritiesCalc,
    secondPrioritiesCalc,
    thirdPrioritiesCalc,
    fourthPrioritiesCalc,
} from './engine';

describe('firstPrioritiesCalc simple cases', () => {
    it('[2, **]', () => {
        expect(firstPrioritiesCalc([2, '**'])).toEqual([4]);
    });

    it('[3, **]', () => {
        expect(firstPrioritiesCalc([3, '**'])).toEqual([9]);
    });

    it('[3, !]', () => {
        expect(firstPrioritiesCalc([3, '!'])).toEqual([6]);
    });

    it('[5, !]', () => {
        expect(firstPrioritiesCalc([5, '!'])).toEqual([120]);
    });

    it('[8, -, 3]', () => {
        expect(firstPrioritiesCalc([8, '-', 3])).toEqual([8, '-', 3]);
    });

    it('[5, *, 3]', () => {
        expect(firstPrioritiesCalc([5, '*', 3])).toEqual([5, '*', 3]);
    });

    it('[11, ^, 3]', () => {
        expect(firstPrioritiesCalc([11, '^', 3])).toEqual([11, '^', 3]);
    });
});

describe('firstPrioritiesCalc mixed with second, third and fourth priorities cases', () => {
    it('[16, /, 2, ^, 3, *, 10, **, +, 3, -, 5, !]', () => {
        expect(
            firstPrioritiesCalc([
                16,
                '/',
                2,
                '^',
                3,
                '*',
                10,
                '**',
                '+',
                3,
                '-',
                5,
                '!',
            ])
        ).toEqual([16, '/', 2, '^', 3, '*', 100, '+', 3, '-', 120]);
    });
});

describe('secondPrioritiesCalc simple cases', () => {
    it('[2, ^, 3]', () => {
        expect(secondPrioritiesCalc([2, '^', 3])).toEqual([8]);
    });

    it('[3, ^, 2]', () => {
        expect(secondPrioritiesCalc([3, '^', 2])).toEqual([9]);
    });

    it('[5, *, 7]', () => {
        expect(secondPrioritiesCalc([5, '*', 7])).toEqual([5, '*', 7]);
    });
});

describe('secondPrioritiesCalc mixed with third and fourth priorities cases', () => {
    it('[16, /, 2, ^, 3, *, 10, +, 3]', () => {
        expect(
            secondPrioritiesCalc([16, '/', 2, '^', 3, '*', 10, '+', 3])
        ).toEqual([16, '/', 8, '*', 10, '+', 3]);
    });
});

describe('secondPrioritiesCalc invalid cases', () => {
    it('[8, **, +, 5]', () => {
        expect(() => secondPrioritiesCalc([8, '**', '+', 5])).toThrow(
            TypeError('Unexpected stack!')
        );
    });

    it('[8, !, +, 5]', () => {
        expect(() => secondPrioritiesCalc([8, '!', '+', 5])).toThrow(
            TypeError('Unexpected stack!')
        );
    });
});

describe('thirdPrioritiesCalc simple cases', () => {
    it('[1, * 32]', () => {
        expect(thirdPrioritiesCalc([1, '*', 32])).toEqual([32]);
    });

    it('[32, /, 32]', () => {
        expect(thirdPrioritiesCalc([32, '/', 32])).toEqual([1]);
    });

    it('[32, + 32]', () => {
        expect(thirdPrioritiesCalc([32, '+', 32])).toEqual([32, '+', 32]);
    });
});

describe('thirdPrioritiesCalc mixed with fourth priorities cases', () => {
    it('[32, /, 32, +, 10, *, 10]', () => {
        expect(thirdPrioritiesCalc([32, '/', 32, '+', 10, '*', 10])).toEqual([
            1,
            '+',
            100,
        ]);
    });
});

describe('fourthPrioritiesCalc invalid cases', () => {
    it('[32, / 32]', () => {
        expect(() => fourthPrioritiesCalc([32, '/', 32])).toThrow(
            TypeError('Unexpected stack!')
        );
    });
});

describe('fourthPrioritiesCalc simple cases', () => {
    it('[32, + 32]', () => {
        expect(fourthPrioritiesCalc([32, '+', 32])).toEqual(64);
    });

    it('[32, - 32]', () => {
        expect(fourthPrioritiesCalc([32, '-', 32])).toEqual(0);
    });

    it('[32, - 32, +, 10]', () => {
        expect(fourthPrioritiesCalc([32, '-', 32, '+', 10])).toEqual(10);
    });
});
