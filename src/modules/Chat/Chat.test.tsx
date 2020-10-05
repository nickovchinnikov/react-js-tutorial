import React from "react";
import { shallow } from "enzyme";
import faker from "faker";

import { actions } from "./reducer";
import { ChatComponent } from "./Chat";

const props = {
  chat: [],
  username: faker.name.firstName(),
  send: actions.send,
};

describe("ChatComponent test", () => {
  it("Render chat when username is not empty", () => {
    const component = <ChatComponent {...props} />;

    expect(shallow(component).html()).toMatchSnapshot();
  });
  it("Render null when username is empty", () => {
    const component = <ChatComponent {...{ ...props, username: "" }} />;

    expect(shallow(component).html()).toMatchSnapshot();
  });
});
