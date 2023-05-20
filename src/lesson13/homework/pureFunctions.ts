// // Задание 1
export type Team = { name: string; score: number };

export const getTopName = (
  teams: Team[]
  // eslint-disable-next-line
  // @ts-ignore
): string => {
  const maxTeam: Team = teams.reduce(
    (maxTeam: Team, item: Team) => {
      if (item.score > maxTeam.score) {
        return item;
      } else {
        return maxTeam;
      }
    },
    { name: "", score: 0 }
  );

  return maxTeam.name;
};

// // Задание 2
export type QsObj = Record<string, string | number | boolean | object>;

export const createQs = (
  qsObj: QsObj
  // eslint-disable-next-line
  // @ts-ignore
): string => {
  const params: Array<string> = [];

  for (const [key, value] of Object.entries(qsObj)) {
    params.push(`${key}=${value}`);
  }

  return "?" + params.join("&");
};

// // Задание 3

export const parseQs = (
  qs: string
  // eslint-disable-next-line
  // @ts-ignore
): QsObj => {
  qs = qs.replace("?", "");

  const parser = (str: string, delimeter: string) =>
    String(str).split(delimeter);

  const result = parser(qs, "&").reduce((result: {}, item) => {
    const value = parser(item, "=");
    // @ts-ignore
    result[value[0]] = value[1];
    return result;
  }, {});

  return result;
};
