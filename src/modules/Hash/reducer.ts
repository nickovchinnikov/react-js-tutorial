import { createSlice } from "@reduxjs/toolkit";

export const initialState = "";

export const hashSlice = createSlice({
  name: "hash",
  initialState,
  reducers: {
    update: (state, { payload }) => payload,
  },
});

export const { reducer, actions } = hashSlice;
