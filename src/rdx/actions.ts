import { createAction } from "@reduxjs/toolkit";
export type Coordinates = { x: number; y: number };

export const xMove = createAction("xMove", (payload: Coordinates) => ({
  payload,
  meta: { delay: 500 },
}));

export const oMove = createAction<Coordinates>("oMove");
