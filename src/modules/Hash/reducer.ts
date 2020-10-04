import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  hash: "",
};

export const hashSlice = createSlice({
  name: "hash",
  initialState,
  reducers: {
    update: (state, { payload }) => ({ hash: payload }),
  },
});

export const { reducer, actions } = hashSlice;
