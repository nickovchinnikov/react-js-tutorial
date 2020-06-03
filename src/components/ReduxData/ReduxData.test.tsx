import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import configureStore from "redux-mock-store";
import { mount } from "enzyme";

import { reducer } from "@/rdx/reducer";

import { ReduxData } from "./ReduxData";

describe("ReduxData with mocked store", () => {
  const mockStore = configureStore([]);

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
        <ReduxData />
      </Provider>
    );

    (wrapper.find("Field").props() as any).onClick(100, 999);

    expect(store.getActions()).toMatchInlineSnapshot(`
      Array [
        Object {
          "meta": Object {
            "delay": 500,
          },
          "payload": Object {
            "x": 100,
            "y": 999,
          },
          "type": "xMove",
        },
      ]
    `);
  });
});

describe("ReduxData with real store", () => {
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
        <ReduxData />
      </Provider>
    );

    (wrapper.find("Field").props() as any).onClick(0, 1);
    wrapper.update(); // we need this if we're going to compare snapshots
    (wrapper.find("Field").props() as any).onClick(1, 1);

    expect(store.getState()).toMatchInlineSnapshot(`
      Object {
        "gameField": Array [
          Array [
            "",
            "",
          ],
          Array [
            "o",
            "x",
          ],
        ],
        "name": "",
        "nextMove": "x",
      }
    `);
    expect((store.dispatch as jest.Mock).mock.calls).toMatchInlineSnapshot(`
      Array [
        Array [
          Object {
            "meta": Object {
              "delay": 500,
            },
            "payload": Object {
              "x": 0,
              "y": 1,
            },
            "type": "xMove",
          },
        ],
        Array [
          Object {
            "payload": Object {
              "x": 1,
              "y": 1,
            },
            "type": "oMove",
          },
        ],
      ]
    `);
  });
});
