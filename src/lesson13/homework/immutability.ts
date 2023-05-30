// // Задание 1
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
  // eslint-disable-next-line
    // @ts-ignore
): ExpectedTeam => {
  const result: ExpectedTeam = {
    name: "New York Badgers",
    roster: 25,
    league: originalTeam.league,
  };

  return result;
};

// // Задание 2
type SomeArray = Array<number | string>;

export const originalArrayToExpectedArray = (
  originalArray: SomeArray
  // eslint-disable-next-line
    // @ts-ignore
): SomeArray => {
  const newLastItem: number | string = originalArray[originalArray.length - 1];

  const result: SomeArray = originalArray.slice(-2);

  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  result.push(newLastItem + 1);
  result.unshift("two");

  return result;
};

// // Задание 3

export type Team = {
  name: string;
  captain: {
    name: string;
    age: number;
  };
};

export const originalTeamToExpectedTeam2 = (
  originalTeam: Team
  // eslint-disable-next-line
    // @ts-ignore
): Team => {
  const result: Team = JSON.parse(JSON.stringify(originalTeam));

  result.captain.age = 28;

  return result;
};
