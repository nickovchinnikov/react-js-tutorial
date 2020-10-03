import faker from "faker";

import { actions, reducer, initialState } from "./reducer";

describe("Chat reducer", () => {
  it("Sending new message", () => {
    const message = {
      author: `${faker.name.firstName()} ${faker.name.lastName()}`,
      message: `${faker.lorem.words()}`,
    };
    expect(reducer(initialState, actions.send(message))).toEqual([
      ...initialState,
      message,
    ]);
  });
  it("Update chat from sourse", () => {
    const messages = [
      {
        author: `${faker.name.firstName()} ${faker.name.lastName()}`,
        message: `${faker.lorem.words()}`,
      },
      {
        author: `${faker.name.firstName()} ${faker.name.lastName()}`,
        message: `${faker.lorem.words()}`,
      },
    ];
    expect(reducer(initialState, actions.update(messages))).toEqual([
      ...initialState,
      ...messages,
    ]);
  });
});
