// Задание 1
export type OriginalTeam = {
  size: number;
  name: string;
  league: string;
};

export type ExpectedTeam = {
  name: string;
  league: string;
  roster: number;
};

export const originalTeamToExpectedTeam = (
  originalTeam: OriginalTeam
): ExpectedTeam => {
  return {
    league: "",
    name: "",
    roster: 0,
  };
};

// Задание 2
type SomeArray = Array<number | string>;

export const originalArrayToExpectedArray = <T>(
  originalArray: readonly T[]
): SomeArray => {
  return [];
};

// Задание 3
export type Team = {
  name: string;
  captain: {
    name: string;
    age: number;
  };
};

export const originalTeamToExpectedTeamDeep = (originalTeam: Team): Team => {
  return {
    name: "",
    captain: {
      name: "",
      age: 0,
    },
  };
};
