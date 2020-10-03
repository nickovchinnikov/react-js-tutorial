import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Message {
  author: string;
  message: string;
}

export type SendAction = PayloadAction<Message>;
export type UpdateAction = PayloadAction<Message[]>;

export const initialState = [
  {
    author: "Admin",
    message: "Hey, let's try to be nice and polite with each other, plz!",
  },
];

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    send: (state, { payload }: SendAction) => [...state, { ...payload }],
    update: (state, { payload }: UpdateAction) => [...state, ...payload],
  },
});

export const { reducer, actions } = chatSlice;
