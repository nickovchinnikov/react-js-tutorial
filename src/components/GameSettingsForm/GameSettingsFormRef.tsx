import React from "react";
import { GameSettingsFormProps } from "./interfaces";
import { SYMBOL_OPTIONS } from "./constants";
import { InputColor, InputText } from "./components";
import { Select } from "./components/Select/Select";

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
              <InputText
                ref={this.player1Name}
                placeholder="Player 1 name"
                required
              />
            </label>
            <label>
              Color:
              <InputColor ref={this.player1Color} />
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
                ref={this.player2Name}
                placeholder="Player 2 name"
                required
              />
            </label>
            <label>
              Color:
              <InputColor ref={this.player2Color} />
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
