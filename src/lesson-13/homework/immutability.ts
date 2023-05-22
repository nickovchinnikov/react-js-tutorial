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
  const expcetedTeam: ExpectedTeam = {
    name: "",
    league: "",
    roster: 25,
  };
  expcetedTeam.name = originalTeam.name;
  expcetedTeam.league = originalTeam.league;

  return expcetedTeam;
};

// Задание 2
/*Игорь Звягин: Давайте originalArrayToExpectedArray будет изымать из исходного массива первые два значения 
и добавлять вместо них строку ‘two’, 
а также добавит в конец массива число, которое больше на 1, чем максимальное числовое значение в массиве*/
export type SomeArray = Array<number | string>;

export const originalArrayToExpectedArray = (
  originalArray: SomeArray
): SomeArray => {
  const magicArray = [...originalArray];
  const digitsInArray = magicArray.filter(
    (x) => typeof x == "number"
  ) as number[];
  let maxDigits = Math.max(...digitsInArray);
  magicArray.splice(0, 2, "two");
  magicArray.push(maxDigits !== null ? ++maxDigits : 1);

  return magicArray;
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
  const expcetedTeam = { ...originalTeam };
  expcetedTeam.captain = { ...originalTeam.captain };
  expcetedTeam.captain.age = originalTeam.captain.age + 1;

  return expcetedTeam;
};
