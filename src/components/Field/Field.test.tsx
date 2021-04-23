import React from "react";
import { cleanup, render, screen, fireEvent } from "@testing-library/react";

import { Field } from "./Field";

afterEach(cleanup);

describe("Field", () => {
  it("renders filled cells", () => {
    render(
      <Field
        field={[
          ["x", "o"],
          ["o", ""],
        ]}
        onClick={jest.fn()}
      />
    );

    expect(screen.getByText("x")).toBeInTheDocument();
    expect(screen.getAllByText("o").length).toBe(2);
  });
  it("passed onClick inside cells", () => {
    const onClick = jest.fn();

    render(<Field field={[["", "x", "o"]]} onClick={onClick} />);

    fireEvent.click(screen.getByRole("button", { name: "" }));
    expect(onClick).toHaveBeenCalledWith(0, 0);
  });
});
