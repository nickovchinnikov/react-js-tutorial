import { transpose } from "ramda";

import { GameFieldType } from "./reducer";

export const getCols = (gameField: GameFieldType) => transpose(gameField);

export const getDiagonals = (gameField: GameFieldType) => {
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

export const getMarksCount = (gameFieldState: GameFieldType, mark: string) =>
  gameFieldState.map((vector) =>
    vector.reduce((acc, item) => {
      if (item === mark) {
        return ++acc;
      }
      return acc;
    }, 0)
  );

export const getInfoAboutGameField = (
  gameFieldState: GameFieldType,
  mark: string
) => {
  const cols = getCols(gameFieldState);
  const diag = getDiagonals(gameFieldState);
  return getMarksCount([...gameFieldState, ...cols, ...diag], mark);
};
