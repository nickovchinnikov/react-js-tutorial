// // Задание 1
export type Team = { name: string; score: number };

export const getTopName = (teams: Team[]): string =>
  [...teams].sort((team1, team2) => team2.score - team1.score)[0].name;

// Задание 2
export type QsObjValue =
  | string
  | number
  | boolean
  | (string | number | boolean)[];

export type QsObj = Record<string, QsObjValue>;

export const createQs = (qsObj: QsObj): string => {
  const formatValue = (value: QsObjValue): string => {
    if (Array.isArray(value)) {
      return `[${value.toString()}]`;
    } else return value.toString();
  };

  const queryArray: string[] = [];
  Object.keys(qsObj).map((e) =>
    queryArray.push(`${e}=${formatValue(qsObj[e])}`)
  );
  return `?${queryArray.join("&")}`;
};

// Задание 3

export const parseQs = (qs: string): QsObj => {
  const parseArray = (arr: string[]): string[] | [][] => {
    if (arr[1].match(/\[(.*?)\]/)) {
      arr[1] = JSON.parse(arr[1]);
    }
    return arr;
  };

  const qsObj = Object.fromEntries(
    qs
      .substring(1)
      .split("&")
      .map((e) => e.split("="))
      .map((e) => parseArray(e))
  );

  return qsObj;
};
