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
  ): ExpectedTeam => {
    const expected = { name: "New York Badgers", roster: 25 };
    const newTeam = { ...originalTeam, ...expected };
    const { size, ...expectedTeam } = newTeam;
    return expectedTeam;
  };
  
  // // Задание 2
  type SomeArray = (number | string)[];
  
  export const originalArrayToExpectedArray = (
    originalArray: Readonly<SomeArray>
  ): SomeArray => {
    const newArray = [...originalArray].splice(1);
    newArray.push(5);
    newArray[0] = "two";
    return newArray;
  };
  
  // // Задание 3
  
  export type Team = {
    name: string;
    captain: {
      name: string;
      age: number;
    };
  };
  
  export const originalTeamToExpectedTeamDeep = (originalTeam: Team): Team => {
    const newTeam = JSON.parse(JSON.stringify(originalTeam));
    newTeam.captain.age = 28;
    return newTeam;
  };
  