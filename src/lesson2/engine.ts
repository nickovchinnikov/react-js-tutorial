import { ParsedLineType } from './parser';
import { isNumber } from './helpers';
import {
    mathScalarOperators,
    mathAssociativeOperators,
    mathPriorities,
    mathOperatorsPriorities,
} from './mathOperators';

const [FIRST, SECOND, THIRD, FOURTH] = mathPriorities;

export const firstPrioritiesCalc = (stack: ParsedLineType): ParsedLineType =>
    stack.reduce<ParsedLineType>((result, nextItem) => {
        const item = result[result.length - 1];

        if (
            !isNumber(String(nextItem)) &&
            mathOperatorsPriorities[nextItem] === FIRST
        ) {
            if (!mathAssociativeOperators[nextItem]) {
                throw new TypeError('Unexpected stack!');
            }
            result = [
                ...result.slice(0, -1),
                mathAssociativeOperators[nextItem](Number(item)),
            ];
        } else {
            result.push(nextItem);
        }
        return result;
    }, []);

export const secondPrioritiesCalc = (stack: ParsedLineType): ParsedLineType =>
    stack.reduce<ParsedLineType>((result, nextItem) => {
        const prevItem = result[result.length - 2];
        const item = result[result.length - 1];

        if (mathOperatorsPriorities[item] === FIRST) {
            throw new TypeError('Unexpected stack!');
        }

        if (
            !isNumber(String(item)) &&
            mathOperatorsPriorities[item] === SECOND
        ) {
            if (!mathScalarOperators[item]) {
                throw new TypeError('Unexpected stack!');
            }
            result = [
                ...result.slice(0, -2),
                mathScalarOperators[item](Number(prevItem), Number(nextItem)),
            ];
        } else {
            result.push(nextItem);
        }
        return result;
    }, []);

export const thirdPrioritiesCalc = (stack: ParsedLineType): ParsedLineType =>
    stack.reduce<ParsedLineType>((result, nextItem) => {
        const prevItem = result[result.length - 2];
        const item = result[result.length - 1];

        if (mathOperatorsPriorities[item] === SECOND) {
            throw new TypeError('Unexpected stack!');
        }

        if (
            !isNumber(String(item)) &&
            mathOperatorsPriorities[item] === THIRD
        ) {
            if (!mathScalarOperators[item]) {
                throw new TypeError('Unexpected stack!');
            }
            result = [
                ...result.slice(0, -2),
                mathScalarOperators[item](Number(prevItem), Number(nextItem)),
            ];
        } else {
            result.push(nextItem);
        }
        return result;
    }, []);

export const fourthPrioritiesCalc = (stack: ParsedLineType): number =>
    stack.reduce<number>((result, nextItem, key) => {
        const item = stack[key - 1];

        if (mathOperatorsPriorities[item] === THIRD) {
            throw new TypeError('Unexpected stack!');
        }

        if (
            !isNumber(String(item)) &&
            mathOperatorsPriorities[item] === FOURTH
        ) {
            result = mathScalarOperators[item](
                Number(result),
                Number(nextItem)
            );
        }
        return result;
    }, Number(stack[0]));
