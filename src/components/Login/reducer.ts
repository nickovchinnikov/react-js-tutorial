import { createSlice } from "@reduxjs/toolkit";

export const initialState = { username: "" };

export const loginSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUsername: (state, { payload }) => {
      if (payload.length > 3) {
        return { username: payload };
      }
      return state;
    },
  },
});
