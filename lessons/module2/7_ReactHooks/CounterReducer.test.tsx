import React from "react";

import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import {
  CounterReducer,
  initialState,
  reducer,
  actions,
} from "./CounterReducer";

describe("CounterReducer test", () => {
  describe("Reducer test", () => {
    it("Default init with increment action", async () => {
      expect(reducer(initialState, { type: actions.increment })).toEqual({
        count: 1,
      });
    });
    it("Init with value decrement action", async () => {
      expect(reducer({ count: 10 }, { type: actions.decrement })).toEqual({
        count: 9,
      });
    });
  });
  describe("Component test", () => {
    it("should use custom step when incrementing", async () => {
      render(<CounterReducer />);
      const decButton = screen.getByRole("button", { name: "-" });
      const incButton = screen.getByRole("button", { name: "+" });
      const count = screen.getByTestId("count");

      expect(count).toHaveTextContent("Count: 0");

      fireEvent.click(incButton);

      expect(count).toHaveTextContent("Count: 1");

      fireEvent.click(decButton);

      expect(count).toHaveTextContent("Count: 0");
    });
  });
});
