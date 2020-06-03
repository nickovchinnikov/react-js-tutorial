import React from "react";
import { Field } from "@/components/InteractiveField/components/Field";
import { NextMove } from "components/NextMove";
import { TicTacToeGameState } from "@/rdx/reducer";
import { xMove, oMove } from "@/rdx/actions";
import { connect } from "react-redux";
import { nameActions } from "@/rdx/reducer/name";

function mapStateToProps(state: TicTacToeGameState) {
  return {
    gameField: state.gameField,
    nextMove: state.nextMove,
    userName: state.name,
  };
}

const mapDispatchToProps = {
  xMove,
  oMove,
  setName: nameActions.set,
  clearName: nameActions.clear,
};

type RawReduxScreenProps = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps;

class ReduxComponent extends React.Component<RawReduxScreenProps, {}> {
  onCellClick = (x: number, y: number) => {
    this.props[this.props.nextMove === "x" ? "xMove" : "oMove"]({ x, y });
  };

  handleUserNameChange = (ev: React.ChangeEvent) => {
    this.props.setName((ev.target as HTMLInputElement).value);
  };

  render() {
    return (
      <div>
        <h1>Open console to observe</h1>
        <h2>User name: {this.props.userName}</h2>
        <label>
          Enter name:{" "}
          <input
            value={this.props.userName}
            onChange={this.handleUserNameChange}
          />
          <button onClick={this.props.clearName}>x</button>
        </label>
        <NextMove />
        <Field field={this.props.gameField} onClick={this.onCellClick} />
        <pre>{JSON.stringify(this.props, null, 2)}</pre>
      </div>
    );
  }
}

export const ReduxData = connect(
  mapStateToProps,
  mapDispatchToProps
)(ReduxComponent);
