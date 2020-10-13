import { parser } from './parser';

import {
    firstPrioritiesCalc,
    secondPrioritiesCalc,
    thirdPrioritiesCalc,
    fourthPrioritiesCalc,
} from './engine';

const calc = (line: string): number => {
    const stack = parser(line);

    if (stack === null) {
        throw new TypeError('Unexpected string');
    }

    const firstPrioritiesRes = firstPrioritiesCalc(stack);

    if (firstPrioritiesRes.length === 1) {
        return Number(firstPrioritiesRes[0]);
    }

    const secondPrioritiesRes = secondPrioritiesCalc(firstPrioritiesRes);

    const thirdPrioritiesRes = thirdPrioritiesCalc(secondPrioritiesRes);

    return fourthPrioritiesCalc(thirdPrioritiesRes);
};

const withoutBrackets = (line: string): string => {
    const regexp = new RegExp('\\([^()]+\\)');
    if (regexp.test(line)) {
        return withoutBrackets(
            line.replace(regexp, (item) =>
                calc(item.substr(1, item.length - 2)).toString()
            )
        );
    }
    return line;
};

export const runner = (line: string): number => calc(withoutBrackets(line));
