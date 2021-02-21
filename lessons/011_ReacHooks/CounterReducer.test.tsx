import React from "react";

import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { CounterReducer } from "./CounterReducer";

describe("CounterReducer test", () => {
  it("should use custom step when incrementing", async () => {
    render(<CounterReducer />);
    const decButton = screen.getByTestId("decrement");
    const incButton = screen.getByTestId("increment");
    const count = screen.getByTestId("count");

    expect(count).toHaveTextContent("Count: 0");
    expect(decButton).toHaveTextContent("-");
    expect(incButton).toHaveTextContent("+");

    fireEvent.click(incButton);

    expect(count).toHaveTextContent("Count: 1");

    fireEvent.click(decButton);

    expect(count).toHaveTextContent("Count: 0");
  });
});
