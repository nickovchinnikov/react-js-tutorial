import {
  compose,
  //...
} from "ramda";

// Задание 1
export type Team = { name: string; score: number };

export const getTopName = compose(/* ... */);

// Задание 2
export type QsObj = Record<string, string | number | boolean | object>;

const createQs = compose(/* ... */);

// Задание 3
const parseQs = compose(/* ... */);
