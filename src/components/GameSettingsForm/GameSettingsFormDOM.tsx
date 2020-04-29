import React from "react";
import { GameSettingsFormProps } from "./interfaces";
import { SYMBOL_OPTIONS } from "./constants";
import { InputColor, InputText } from "./components";
import { Select } from "./components/Select/Select";

const getInputValue = (form: HTMLFormElement, name: string): string => {
  return (form.querySelector(`[name=${name}]`) as HTMLInputElement).value;
};

export class GameSettingsFormDOM extends React.Component<
  GameSettingsFormProps,
  {}
> {
  handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const target = ev.target as HTMLFormElement;
    this.props.onSubmit({
      player1: {
        name: getInputValue(target, "player1Name"),
        symbol: getInputValue(target, "player1Symbol"),
        color: getInputValue(target, "player1Color"),
      },
      player2: {
        name: getInputValue(target, "player2Name"),
        symbol: getInputValue(target, "player2Symbol"),
        color: getInputValue(target, "player2Color"),
      },
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <fieldset>
          <legend>Game Settings</legend>
          <fieldset>
            <legend>Player 1</legend>
            <label>
              Name:
              <InputText
                name="player1Name"
                placeholder="Player 1 name"
                required
              />
            </label>
            <label>
              Color:
              <InputColor name="player1Color" />
            </label>
            <Select
              label="Symbol:"
              name="player1Symbol"
              defaultValue="X"
              options={SYMBOL_OPTIONS}
            />
          </fieldset>
          <fieldset>
            <legend>Player 2</legend>
            <label>
              Name:
              <InputText
                name="player2Name"
                placeholder="Player 2 name"
                required
              />
            </label>
            <label>
              Color:
              <InputColor name="player2Color" />
            </label>
            <Select
              label="Symbol:"
              name="player1Symbol"
              defaultValue="X"
              options={SYMBOL_OPTIONS}
            />
          </fieldset>
          <button>Start</button>
        </fieldset>
      </form>
    );
  }
}
