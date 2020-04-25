import React from "react";
import { GameSettingsFormProps } from "./interfaces";

interface GameSettingsFormStateState {
  player1Name: string;
  player1Color: string;
  player1Symbol: string;
  player2Name: string;
  player2Color: string;
  player2Symbol: string;
}

export class GameSettingsFormState extends React.Component<
  GameSettingsFormProps,
  GameSettingsFormStateState
> {
  state = {
    player1Name: "",
    player1Color: "red",
    player1Symbol: "X",
    player2Name: "",
    player2Color: "green",
    player2Symbol: "O",
  };

  handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    this.props.onSubmit({
      player1: {
        name: this.state.player1Name,
        symbol: this.state.player1Symbol,
        color: this.state.player1Color,
      },
      player2: {
        name: this.state.player2Name,
        symbol: this.state.player2Symbol,
        color: this.state.player2Color,
      },
    });
  };

  handleFormChange = (prop: keyof GameSettingsFormStateState) => (
    ev: React.ChangeEvent
  ) => {
    this.setState(
      {
        [prop]: (ev.target as HTMLInputElement).value,
      } as any /** don't do this in real projects. Better to have multiple setters */
    );
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
                type="text"
                placeholder="Player 1 name"
                required
                value={this.state.player1Name}
                onChange={this.handleFormChange("player1Name")}
              />
            </label>
            <label>
              Color:
              <input
                type="color"
                value={this.state.player1Color}
                onChange={this.handleFormChange("player1Color")}
              />
            </label>
            <label>
              Symbol:
              <select
                defaultValue="X"
                onChange={this.handleFormChange("player1Symbol")}
                value={this.state.player1Symbol}
              >
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
                type="text"
                placeholder="Player 2 name"
                required
                value={this.state.player2Name}
                onChange={this.handleFormChange("player2Name")}
              />
            </label>
            <label>
              Color:
              <input
                type="color"
                value={this.state.player2Color}
                onChange={this.handleFormChange("player2Color")}
              />
            </label>
            <label>
              Symbol:
              <select
                defaultValue="O"
                value={this.state.player2Symbol}
                onChange={this.handleFormChange("player2Symbol")}
              >
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
