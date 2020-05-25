import React from "react";
import { Field } from "@/components/InteractiveField/components/Field";
import { Action, Dispatch } from "redux";
import { NextMove } from "components/NextMove";
import { TicTacToeGameState } from "@/rdx/reducer";
import { Coordinates, xMove, oMove } from "@/rdx/actions";
import { connect } from "react-redux";

interface RawReduxScreenProps {
  nextMove: string;
  gameField: string[][];
  xMove: (coords: Coordinates) => void;
  oMove: (coords: Coordinates) => void;
}

class RawReduxScreen extends React.Component<RawReduxScreenProps, {}> {
  onCellClick = (x: number, y: number) => {
    this.props[this.props.nextMove ? "xMove" : "oMove"]({ x, y });
  };

  render() {
    return (
      <div>
        <h1>Open console to observe</h1>
        <NextMove />
        <Field field={this.props.gameField} onClick={this.onCellClick} />
        <pre>{JSON.stringify(this.props, null, 2)}</pre>
      </div>
    );
  }
}

function mapStateToProps(state: TicTacToeGameState) {
  return {
    gameField: state.gameField,
    nextMove: state.nextMove,
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    xMove: (coords: Coordinates) => dispatch(xMove(coords)),
    oMove: (coords: Coordinates) => dispatch(oMove(coords)),
  };
}

export const ReduxScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(RawReduxScreen);
