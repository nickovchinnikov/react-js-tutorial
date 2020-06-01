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
  curry,
} from "ramda";

// Задание 1
export type Team = { name: string; score: number };

const topTeam = curry(
  (teams: Team[]): Team =>
    reduce<Team, Team>(maxBy<Team>(prop("score")), teams[0], teams)
);
export const getTopName = compose<Team[], Team, string>(prop("name"), topTeam);

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
export const parseQs = compose<string, string, string[], any, any>(
  fromPairs,
  map(split("=")),
  split("&"),
  drop(1)
);
