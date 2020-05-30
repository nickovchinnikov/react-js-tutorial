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
    league: originalTeam.league,
    name: "New York Badgers",
    roster: 25,
  };
};

// Задание 2
type SomeArray = Array<number | string>;

export const originalArrayToExpectedArray = <T>(
  originalArray: readonly T[]
): SomeArray => {
  return originalArray.map((el, index) => {
    if (index == 0) {
      return "two"
    } else {
      return Number(el) + 1;
    }
  });
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
    ...originalTeam,
    captain: {
      ...originalTeam.captain,
      age: 28,
    },
  };
};
