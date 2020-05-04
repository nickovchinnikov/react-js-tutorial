import React from "react";
import { mount } from "enzyme";
import { GameSettingsFormState } from "./GameSettingsFormState";

describe("GameSettingsFormState", () => {
  // https://github.com/enzymejs/enzyme/issues/308
  it("should call onSubmit with props", () => {
    const onSubmit = jest.fn();
    const data = {
      player1: {
        name: "bob",
        color: "red",
        symbol: "X",
      },
      player2: {
        name: "sam",
        color: "green",
        symbol: "O",
      },
    };

    const el = mount(<GameSettingsFormState onSubmit={onSubmit} />);
    el.find('input[placeholder="Player 1 name"]').simulate("change", {
      target: { value: data.player1.name, getAttribute: () => "player1Name" },
    });
    el.find('input[placeholder="Player 2 name"]').simulate("change", {
      target: { value: data.player2.name, getAttribute: () => "player2Name" },
    });
    el.find('input[type="color"]')
      .at(0)
      .simulate("change", {
        target: {
          value: data.player1.color,
          getAttribute: () => "player1Color",
        },
      });
    el.find('input[type="color"]')
      .at(1)
      .simulate("change", {
        target: {
          value: data.player2.color,
          getAttribute: () => "player2Color",
        },
      });
    el.find("button").simulate("submit");
    expect(onSubmit).toHaveBeenCalled();
    expect(onSubmit.mock.calls[0][0]).toMatchObject(data);
  });
});
