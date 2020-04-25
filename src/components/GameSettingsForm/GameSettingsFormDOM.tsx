import React from "react";
import { GameSettingsFormProps } from "./interfaces";

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
              <input
                name="player1Name"
                type="text"
                placeholder="Player 1 name"
                required
              />
            </label>
            <label>
              Color:
              <input type="color" name="player1Color" />
            </label>
            <label>
              Symbol:
              <select name="player1Symbol" defaultValue="X">
                <option>X</option>
                <option>Y</option>
                <option>O</option>
              </select>
            </label>
          </fieldset>
          <fieldset>
            <legend>Player 2</legend>
            <label>
              Name:
              <input
                name="player2Name"
                type="text"
                placeholder="Player 2 name"
                required
              />
            </label>
            <label>
              Color:
              <input type="color" name="player2Color" />
            </label>
            <label>
              Symbol:
              <select name="player2Symbol" defaultValue="O">
                <option>X</option>
                <option>Y</option>
                <option>O</option>
              </select>
            </label>
          </fieldset>
          <button>Start</button>
        </fieldset>
      </form>
    );
  }
}
