import React from "react";
import { GameSettingsFormProps } from "./interfaces";

export class GameSettingsFormDOM extends React.Component<
  GameSettingsFormProps,
  {}
> {
  handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const target = ev.target as HTMLFormElement;
    this.props.onSubmit({
      player1: {
        name: (target.querySelector("[name=player1Name]") as HTMLInputElement)
          .value,
        symbol: (target.querySelector(
          "[name=player1Symbol]"
        ) as HTMLSelectElement).value,
        color: (target.querySelector("[name=player1Color]") as HTMLInputElement)
          .value,
      },
      player2: {
        name: (target.querySelector("[name=player2Name]") as HTMLInputElement)
          .value,
        symbol: (target.querySelector(
          "[name=player2Symbol]"
        ) as HTMLSelectElement).value,
        color: (target.querySelector("[name=player2Color]") as HTMLInputElement)
          .value,
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
