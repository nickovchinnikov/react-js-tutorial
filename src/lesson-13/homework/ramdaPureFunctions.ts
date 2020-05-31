import { compose, maxBy, prop, reduce } from "ramda";

// Задание 1
export type Team = { name: string; score: number };

export const getTopName = compose(
  prop("name"),
  reduce<Team, Team>(maxBy<Team>(prop("score")), { name: "", score: 0 })
);

// Задание 2
export type QsObj = Record<string, string | number | boolean | object>;

export const createQs = (qsObj: QsObj) =>
  compose(() => {
    const t = 1 + 1;
  });

// Задание 3
export const parseQs = (qs: string) =>
  compose(() => {
    const t = 1 + 1;
  });
