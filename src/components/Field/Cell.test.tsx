import React from "react";
import { cleanup, render, screen, fireEvent } from "@testing-library/react";

import { Cell } from "./Cell";

afterEach(cleanup);

describe("Cell", () => {
  it("calls onClick callback on click by empty cell", () => {
    const onClick = jest.fn();

    render(<Cell onClick={onClick} />);
    fireEvent.click(screen.getByRole("button"));
    expect(onClick).toHaveBeenCalled();
  });
  it("does not call onClick callback on click by filled cell", () => {
    const onClick = jest.fn();

    render(<Cell onClick={onClick}>x</Cell>);
    fireEvent.click(screen.getByRole("button"));
    expect(onClick).not.toHaveBeenCalled();
  });
  it("calls onClick callback with passed x, y params", () => {
    const onClick = jest.fn();
    const coords = {
      x: 12,
      y: 14,
    };

    render(<Cell onClick={onClick} {...coords} />);
    fireEvent.click(screen.getByRole("button"));
    expect(onClick).toHaveBeenCalledWith(...Object.values(coords));
  });
});
