import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import faker from "faker";

import { actions } from "./reducer";
import { ChatComponent } from "./Chat";

const props = {
  chat: [],
  username: faker.name.firstName(),
  send: actions.send,
};

afterEach(cleanup);

describe("ChatComponent test", () => {
  it("Render chat when username is not empty", () => {
    render(<ChatComponent {...props} />);
    expect(screen.getAllByRole("form").length).toBe(1);
  });
  it("Render null when username is empty", () => {
    const { container } = render(
      <ChatComponent {...{ ...props, username: "" }} />
    );

    expect(container).toMatchInlineSnapshot(`<div />`);
  });
});
