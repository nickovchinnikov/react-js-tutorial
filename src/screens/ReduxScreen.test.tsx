import React from "react";
import { ReduxScreen } from "./ReduxScreen";
import { Provider } from "react-redux";
import { mount } from "enzyme";
import { reducer } from "@/rdx/reducer";
import { createStore } from "redux";

describe("ReduxScreen", () => {
  let store: any;

  beforeEach(() => {
    store = createStore(reducer, {
      nextMove: "x",
      gameField: [
        ["", ""],
        ["", ""],
      ],
    });
    jest.spyOn(store, "dispatch");
  });

  it("should generate action on click", () => {
    const wrapper = mount(
      <Provider store={store}>
        <ReduxScreen />
      </Provider>
    );

    (wrapper.find("Field").props() as any).onClick(0, 1);
    wrapper.update();
    (wrapper.find("Field").props() as any).onClick(1, 1);

    expect(store.getState()).toMatchInlineSnapshot(`
      Object {
        "gameField": Array [
          Array [
            "",
            "",
          ],
          Array [
            "x",
            "o",
          ],
        ],
        "nextMove": "x",
      }
    `);
    expect((store.dispatch as jest.Mock).mock.calls).toMatchInlineSnapshot(`
      Array [
        Array [
          Object {
            "payload": Object {
              "x": 0,
              "y": 1,
            },
            "type": "X_MOVE",
          },
        ],
        Array [
          Object {
            "payload": Object {
              "x": 1,
              "y": 1,
            },
            "type": "O_MOVE",
          },
        ],
      ]
    `);
  });
});
