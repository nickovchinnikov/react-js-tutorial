import React from "react";
import { GameSettingsFormProps } from "./interfaces";

export class GameSettingsFormRef extends React.Component<
  GameSettingsFormProps,
  {}
> {
  player1Name = React.createRef<HTMLInputElement>();
  player1Color = React.createRef<HTMLInputElement>();
  player1Symbol = React.createRef<HTMLSelectElement>();
  player2Name = React.createRef<HTMLInputElement>();
  player2Color = React.createRef<HTMLInputElement>();
  player2Symbol = React.createRef<HTMLSelectElement>();

  handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    this.props.onSubmit({
      player1: {
        name: this.player1Name.current!.value,
        symbol: this.player1Symbol.current!.value,
        color: this.player1Color.current!.value,
      },
      player2: {
        name: this.player2Name.current!.value,
        symbol: this.player2Symbol.current!.value,
        color: this.player2Color.current!.value,
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
                ref={this.player1Name}
                type="text"
                placeholder="Player 1 name"
                required
              />
            </label>
            <label>
              Color:
              <input type="color" ref={this.player1Color} />
            </label>
            <label>
              Symbol:
              <select ref={this.player1Symbol} defaultValue="X">
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
                ref={this.player2Name}
                type="text"
                placeholder="Player 2 name"
                required
              />
            </label>
            <label>
              Color:
              <input type="color" ref={this.player2Color} />
            </label>
            <label>
              Symbol:
              <select ref={this.player2Symbol} defaultValue="O">
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
