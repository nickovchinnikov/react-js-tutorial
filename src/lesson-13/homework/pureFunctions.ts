// Задание 1
export type Team = { name: string; score: number };

export const getTopName = (teams: Team[]): string => {
  return teams.reduce((prev, current) =>
    prev.score > current.score ? prev : current
  ).name;
};

// Задание 2
export type QsObj = Record<string, string | number | boolean | object>;

export const createQs = (qsObj: QsObj): string => {
  let queryString = "?";
  for (const [key, value] of Object.entries(qsObj)) {
    debugger;
    queryString += `${key}=${value}&`;
  }
  return queryString.substring(0, queryString.length - 1);
};

// Задание 3

export const parseQs = (qs: string): QsObj => {
  const queryWithOutMarkUp = qs.substring(1);
  const queryParamsArray = queryWithOutMarkUp.split("&");
  const queryStringObject: QsObj = {};

  for (const queryParam of queryParamsArray) {
    const keyValueArray = queryParam.split("=");
    const key = keyValueArray[0];
    const value = keyValueArray[1];
    queryStringObject[key] = value;
  }

  return queryStringObject;
};
