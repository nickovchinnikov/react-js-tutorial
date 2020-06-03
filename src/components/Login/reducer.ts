import { createSlice } from "@reduxjs/toolkit";

export const initialState = { username: "" };

export const loginSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      if (payload.length > 3) {
        return { username: payload };
      }
      return state;
    },
    logout: () => initialState,
  },
});

export const { reducer, actions } = loginSlice;
