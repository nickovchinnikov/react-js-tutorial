import React from "react";
import { GameSettingsFormProps } from "./interfaces";

const getInputValue = (form: HTMLFormElement, name: string): string => {
  return (form.querySelector(`[name=${name}]`) as HTMLInputElement).value;
};

const PlayerSubform: React.FC<{ playerNumber: number }> = ({
  playerNumber,
}) => {
  return (
    <label>
      <legend>Player {playerNumber}</legend>
      <label>
        Name:
        <input
          name={`player${playerNumber}Name`}
          type="text"
          placeholder={`Player ${playerNumber} name`}
          required
        />
      </label>
      <label>
        Color:
        <input type="color" name={`player${playerNumber}Color`} />
      </label>
      <label>
        Symbol:
        <select name={`player${playerNumber}Symbol`} defaultValue="X">
          <option>X</option>
          <option>Y</option>
          <option>O</option>
        </select>
      </label>
    </label>
  );
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
          <PlayerSubform playerNumber={1} />
          <PlayerSubform playerNumber={2} />
          <button>Start</button>
        </fieldset>
      </form>
    );
  }
}
