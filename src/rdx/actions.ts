export const X_MOVE = 'X_MOVE';
export const O_MOVE = 'O_MOVE';

type Coordinates = { x: number; y: number };

export function xMove(payload: Coordinates) {
  return {
    type: X_MOVE,
    payload,
  }
}

export function oMove(payload: Coordinates) {
  return {
    type: O_MOVE,
    payload,
  }
}