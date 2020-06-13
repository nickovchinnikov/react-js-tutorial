import { transpose, filter, isNil, complement } from "ramda";

import { GameFieldType } from "./reducer";

export const createEmptyGameField = (rows: number, cols: number) =>
  Array.from({ length: rows }).map(() =>
    Array.from({ length: cols }).fill("")
  ) as GameFieldType;

export const getCols = (gameField: GameFieldType) => transpose(gameField);

export const getMainDiagonals = (gameField: GameFieldType) => {
  const diagonal1: string[] = [];
  const diagonal2: string[] = [];

  for (let i = 0; i < gameField.length; i++) {
    for (let j = 0; j < gameField.length; j++) {
      // Get elements for the main diagonal (diagonal-1). So I need to increment the i and j equally
      if (i === j) {
        diagonal1.push(gameField[i][j]);
      }
      // Get elements for the secondary diagonal (diagonal-2). So I need to decrement j.
      // Taking the value of the inner array from reverse(i.e.last element comes first)
      if (j === gameField.length - i - 1) {
        diagonal2.push(gameField[i][j]);
      }
    }
  }

  return [diagonal1, diagonal2];
};

export const getDiagonals = (gameField: GameFieldType, bottomToTop = true) => {
  const Ylength = gameField.length;
  const Xlength = gameField[0].length;
  const maxLength = Math.max(Xlength, Ylength);
  const result: string[][] = [];
  for (let k = 0; k <= 2 * maxLength; k++) {
    for (let y = 0; y <= Ylength - 1; y++) {
      const x = k - (bottomToTop ? Ylength - y : y);
      if (x >= 0 && x < Xlength && gameField[y][x]) {
        if (!result[k]) {
          result[k] = [];
        }
        result[k].push(gameField[y][x]);
      }
    }
  }
  return filter(complement(isNil), result);
};

export const getAllDiagonals = (gameField: GameFieldType) => {
  const bottomToTop = getDiagonals(gameField);
  const topToBottom = getDiagonals(gameField, false);
  return [...bottomToTop, ...topToBottom];
};

export const getMarkCount = (gameFieldState: GameFieldType, mark: string) =>
  gameFieldState.map((vector) =>
    vector.reduce((acc, item) => {
      if (item === mark) {
        return acc + 1;
      }
      return acc;
    }, 0)
  );

export const getInfoAboutGameField = (
  gameFieldState: GameFieldType,
  mark: string
) => {
  const cols = getCols(gameFieldState);
  const diag = getAllDiagonals(gameFieldState);
  return getMarkCount([...gameFieldState, ...cols, ...diag], mark);
};
