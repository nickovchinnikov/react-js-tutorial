import {
  compose,
  curry,
  map,
  reduce,
  join,
  toPairs,
  concat,
  replace,
  split,
} from "ramda";

// // Задание 1
export type Team = { name: string; score: number };

const getTeamByMaxScore = (maxTeam: Team, item: Team): Team => {
  if (item.score > maxTeam.score) {
    return item;
  } else {
    return maxTeam;
  }
};

const trace = curry((tag, x) => {
  console.log(tag, x);
  return x;
});

const getTeamName = (item: Team): string => item.name;

// eslint-disable-next-line
// @ts-ignore
export const getTopName = compose(
  getTeamName,
  reduce(getTeamByMaxScore, { name: "", score: 0 })
);

// // Задание 2
export type QsObj = Record<string, string | number | boolean | object>;

// eslint-disable-next-line
// @ts-ignore
export const createQs = compose(
  concat("?"),
  join("&"),
  map(join("=")),
  toPairs
);

// eslint-disable-next-line
// @ts-ignore
// Задание 3

const show = (x) => x;

const reduceIterator = (acc: object, elem: Array<string>) => {
  // @ts-ignore
  acc[elem[0]] = elem[1];
  return acc;
};

export const parseQs = compose(
  show,
  reduce(reduceIterator, {}),
  map(split("=")),
  split("&"),
  replace("?", "")
);
