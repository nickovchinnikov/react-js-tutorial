import React, { RefObject } from "react";
import { GameSettingsFormProps } from "./interfaces";

type Refs = {
  name: RefObject<HTMLInputElement>;
  symbol: RefObject<HTMLSelectElement>;
  color: RefObject<HTMLInputElement>;
};

export class GameSettingsFormRef extends React.Component<
  GameSettingsFormProps,
  {}
> {
  inputsRefs: Array<Refs> = [];

  handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    this.props.onSubmit({
      player1: {
        name: this.inputsRefs[0].name.current?.value || "",
        symbol: this.inputsRefs[0].symbol.current?.value || "",
        color: this.inputsRefs[0].color.current?.value || "",
      },
      player2: {
        name: this.inputsRefs[1].name.current?.value || "",
        symbol: this.inputsRefs[1].symbol.current?.value || "",
        color: this.inputsRefs[1].color.current?.value || "",
      },
    });
  };

  getFieldSet(index: number) {
    this.inputsRefs.push({
      name: React.createRef<HTMLInputElement>(),
      symbol: React.createRef<HTMLSelectElement>(),
      color: React.createRef<HTMLInputElement>(),
    });
    return (
      <fieldset>
        <legend>{`Player ${index + 1}`}</legend>
        <label>
          Name:
          <input
            ref={this.inputsRefs[index].name}
            type="text"
            placeholder={`Player ${index + 1} name`}
            required
          />
        </label>
        <label>
          Color:
          <input type="color" ref={this.inputsRefs[index].color} />
        </label>
        <label>
          Symbol:
          <select ref={this.inputsRefs[index].symbol} defaultValue="X">
            <option>X</option>
            <option>Y</option>
            <option>O</option>
          </select>
        </label>
      </fieldset>
    );
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <fieldset>
          <legend>Game Settings</legend>
          {this.getFieldSet(0)}
          {this.getFieldSet(1)}
          <button>Start</button>
        </fieldset>
      </form>
    );
  }
}
