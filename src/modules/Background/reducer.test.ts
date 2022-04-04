import { actions, reducer, initialState, BackgroundStatus } from "./reducer";

describe("background reducer", () => {
  it("Start action", () => {
    expect(reducer(initialState, actions.start())).toEqual({
      status: BackgroundStatus.start,
    });
  });
  it("Cancel action", () => {
    expect(reducer(initialState, actions.cancel())).toEqual({
      status: BackgroundStatus.cancel,
    });
  });
});
