import faker from "faker";

import { actions, reducer, initialState } from "./reducer";

describe("Hash reducer", () => {
  it("Update hash action", () => {
    const hash = faker.lorem.words();
    expect(reducer(initialState, actions.update(hash))).toEqual(hash);
  });
});
