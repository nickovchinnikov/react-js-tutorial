import { createAction } from "@reduxjs/toolkit";
export type Coordinates = { x: number; y: number };

export const xMove = createAction<Coordinates>("xMove");
export const oMove = createAction<Coordinates>("oMove");
