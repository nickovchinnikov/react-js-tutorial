import { actions, reducer, initialState } from "./reducer";

describe("Hash reducer", () => {
  it("Update hash action", () => {
    const hash = "test";
    expect(reducer(initialState, actions.update(hash))).toEqual({ hash });
  });
});
