import { createSlice } from "@reduxjs/toolkit";

import { TicTacToeGameState } from "@/store";

export const BackgroundStatus = {
  init: "init",
  start: "start",
  cancel: "cancel",
};

export const selectors = {
  background: ({ background }: TicTacToeGameState) => background,
};

export const initialState = {
  status: BackgroundStatus.init,
};

export const backgroundSlice = createSlice({
  name: "background",
  initialState,
  reducers: {
    start: (state) => {
      state.status = BackgroundStatus.start;
      return state;
    },
    cancel: (state) => {
      state.status = BackgroundStatus.cancel;
      return state;
    },
  },
});

export const { reducer, actions } = backgroundSlice;
