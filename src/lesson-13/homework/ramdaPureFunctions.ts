import {
  compose,
  concat,
  drop,
  fromPairs,
  join,
  map,
  maxBy,
  prop,
  reduce,
  split,
  toPairs,
} from "ramda";

// Задание 1
export type Team = { name: string; score: number };

export const getTopName = compose(
  prop("name"),
  reduce<Team, Team>(maxBy<Team>(prop("score")), { name: "", score: 0 })
);

// Задание 2
export type QsObj = Record<string, string | number | boolean | object>;

export const createQs = compose<
  QsObj,
  Array<[string, string | number | boolean | object]>,
  string[],
  string,
  string
>(concat("?"), join("&"), map(join("=")), toPairs);

// Задание 3
export const parseQs = compose<string, string, string[], string[], QsObj>(
  fromPairs,
  map(split("=")),
  split("&"),
  drop(1)
);
