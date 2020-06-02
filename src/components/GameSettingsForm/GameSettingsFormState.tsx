import React, { FormEvent } from "react";
import { GameSettingsFormProps } from "./interfaces";
import { SYMBOL_OPTIONS } from "./constants";
import { InputColor, InputText } from "./components";
import { Select } from "./components/Select/Select";

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

  handleSubmit = (ev: FormEvent) => {
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

  componentDidUpdate() {
    // eslint-disable-next-line no-console
    console.log("@@GameSettingsFormState.componentDidUpdate");
  }

  handleFormInputChange = (
    ev: FormEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    this.setState({
      [(ev.target as HTMLInputElement).getAttribute(
        "name"
      ) as keyof GameSettingsFormStateState]: (ev.target as HTMLInputElement)
        .value,
    } as object);
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
                placeholder="Player 1 name"
                required
                name="player1Name"
                value={this.state.player1Name}
                onChange={this.handleFormInputChange}
              />
            </label>
            <label>
              Color:
              <InputColor
                name="player1Color"
                value={this.state.player1Color}
                onChange={this.handleFormInputChange}
              />
            </label>
            <Select
              label="Symbol"
              name="player1Symbol"
              defaultValue="X"
              options={SYMBOL_OPTIONS}
              onChange={this.handleFormInputChange}
            />
          </fieldset>
          <fieldset>
            <legend>Player 2</legend>
            <label>
              Name:
              <InputText
                placeholder="Player 2 name"
                required
                name="player2Name"
                value={this.state.player2Name}
                onChange={this.handleFormInputChange}
              />
            </label>
            <label>
              Color:
              <InputColor
                name="player2Color"
                value={this.state.player2Color}
                onChange={this.handleFormInputChange}
              />
            </label>
            <Select
              label="Symbol"
              name="player2Symbol"
              defaultValue="X"
              options={SYMBOL_OPTIONS}
              onChange={this.handleFormInputChange}
            />
          </fieldset>
          <button>Start</button>
        </fieldset>
      </form>
    );
  }
}
