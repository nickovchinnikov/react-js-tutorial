import { isNumber } from "./helpers";
import {  mathOperators } from "./mathOperators";

export type ParsedLineType = (number | string)[];

export const parser = (line: string): ParsedLineType | null => {
  let _countOpenBrackets = 0;
  let _countCloseBrackets = 0;
  for (let i = 0; i < line.length; i++) {
    if (line[i] === ')') {
      _countCloseBrackets++;
    }
    if (line[i] === '(') {
      _countOpenBrackets++;
    }
  }
  if (_countOpenBrackets !== _countCloseBrackets) {
    console.log("Число открытых и закрытых скобок не совпадает");
    throw new TypeError("Unexpected string");
  }
  const stack = line.split(" ");
  const res =  stack.reduce<ParsedLineType>((result, item, key) => {
    const prevItem = stack[key - 1];
    let itemHasCloseBrackets = false;
    let countOpenBrackets = 0;
    let countCloseBrackets = 0;

    if (item.includes('(') || item.includes(')')) {
      let openBracketsIsOpen = false;
      let numberInsideBrackets = false;
      let itemLength = item.length;
      let oldItem = item;
      for (let i = 0; i < itemLength; i++) {
        let curSymbol = oldItem[i];
        if (curSymbol === '(') {
          openBracketsIsOpen = true;
          countOpenBrackets++;
          item = item.replace('(', '');

        }
        if (curSymbol === ')' ) {
          if (i == 0) {
            console.log("Закрытая скобка впереди");
            throw new TypeError("Unexpected string");
          }
          if (countOpenBrackets !== 0 && !numberInsideBrackets) {
            console.log("Число НЕ внутри скобок");
            throw new TypeError("Unexpected string");
          }
          countCloseBrackets++;
          item = item.replace(')', '');
          openBracketsIsOpen = false;
          itemHasCloseBrackets = true;
        }
        if (isNumber(curSymbol)) {
          numberInsideBrackets = true;
        }
      }
      if (
        (countOpenBrackets > 0 && countCloseBrackets > 0)
        &&  countOpenBrackets !== countCloseBrackets) {
        console.log("Число открытых и закрытых скобок не совпадает");
        throw new TypeError("Unexpected string");
      }
      if (countOpenBrackets === countCloseBrackets){
        countOpenBrackets = 0;
        itemHasCloseBrackets = false;
      }

      if (countOpenBrackets > 0) {
        result.push('(');
      }

      if (isNumber(item)) {
        stack[key] = item;
      }

    }

    const isValidNumberPush = !isNumber(prevItem) && isNumber(item);
    const isValidOperatorPush =
      isNumber(prevItem) &&
      !isNumber(item) &&
      mathOperators.hasOwnProperty(item);

    if (isValidNumberPush) {
      result.push(Number(item));
      if (itemHasCloseBrackets) {
        for (let i = 0; i < countCloseBrackets; i++) {
          result.push(')');
        }
      }
    } else if (isValidOperatorPush) {
      result.push(item);
    } else {
      throw new TypeError("Unexpected string");
    }
    return result;
  }, []);

  console.log(res);
  return res;
};
