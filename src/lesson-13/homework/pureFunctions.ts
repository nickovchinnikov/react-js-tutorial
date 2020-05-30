// Задание 1
export type Team = { name: string; score: number };

export const getTopName = (teams: Team[]): string => {
  const topTeam = teams.reduce<Team>((topTeamCandidate, currentTeam) => {
    return topTeamCandidate.score < currentTeam.score
      ? currentTeam
      : topTeamCandidate;
  }, teams[0]);
  return topTeam.name;
};

// Задание 2
export type QsObj = Record<string, string | number | boolean | object>;

export const createQs = (qsObj: QsObj): string => {
  return Object.keys(qsObj).reduce<string>((queryStr, currentKey, index) => {
    return `${queryStr}${index == 0 ? "" : "&"}${currentKey}=${
      qsObj[currentKey]
    }`;
  }, "?");
};

// Задание 3
export const parseQs = (qs: string): QsObj => {
  const parts = qs.slice(1, qs.length).split("&");
  return parts.reduce<QsObj>(
    (prevQueryStr, currentPart) => {
      const [key, value] = currentPart.split("=");
      return { ...prevQueryStr, [key]: value };
    },
    {
      page: "",
      pageSize: "",
      total: "",
      somethingElse: "",
    }
  );
};
