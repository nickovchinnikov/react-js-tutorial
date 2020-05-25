import React from "react";
import { ReduxScreen } from "./ReduxScreen";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { mount, shallow } from "enzyme";

const mockStore = configureStore([]);

describe("ReduxScreen", () => {
  let store: any;

  beforeEach(() => {
    store = mockStore({
      nextMove: "x",
      gameField: [[]],
    });
  });

  it("should generate action on click", () => {
    const wrapper = mount(
      <Provider store={store}>
        <ReduxScreen />
      </Provider>
    );

    (wrapper.find("Field").props() as any).onClick(100, 999);

    expect(store.getActions()).toMatchInlineSnapshot(`
      Array [
        Object {
          "payload": Object {
            "x": 100,
            "y": 999,
          },
          "type": "X_MOVE",
        },
      ]
    `);
  });
});
