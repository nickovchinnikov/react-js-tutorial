import React, { Component } from "react";
import { connect } from "react-redux";

import { TicTacToeGameState } from "@/store";

import { actions } from "./reducer";

const mapStateToProps = ({ game }: TicTacToeGameState) => ({
  fieldSize: game.fieldSize,
  playerMarks: game.playerMarks,
  nextTurn: game.nextTurn,
});

const mapDispatchToProps = {
  createGameWithParams: actions.createGameWithParams,
};

export type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps;

export interface State {
  xSize: number;
  ySize: number;
  player1Mark: string;
  player2Mark: string;
  nextTurn: string;
}

class CreateCustomGameComponent extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      xSize: this.props.fieldSize[0],
      ySize: this.props.fieldSize[1],
      player1Mark: this.props.playerMarks[0],
      player2Mark: this.props.playerMarks[1],
      nextTurn: this.props.nextTurn,
    };
  }
  handleSumbit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.props.createGameWithParams({
      fieldSize: [this.state.xSize, this.state.ySize],
      playerMarks: [this.state.player1Mark, this.state.player2Mark],
      nextTurn: this.state.nextTurn,
    });
  };
  render() {
    return (
      <>
        <h3>Create game with custom params</h3>
        <form onSubmit={this.handleSumbit}>
          <label>
            xSize:
            <input
              name="xSize"
              type="number"
              value={this.state.xSize}
              onChange={({ currentTarget }) =>
                this.setState({ xSize: Number(currentTarget.value) })
              }
            />
          </label>
          <br />
          <label>
            ySize:
            <input
              name="ySize"
              type="number"
              value={this.state.ySize}
              onChange={({ currentTarget }) =>
                this.setState({ ySize: Number(currentTarget.value) })
              }
            />
          </label>
          <br />
          <label>
            Player1 mark:
            <input
              name="Player1Mark"
              type="string"
              maxLength={1}
              value={this.state.player1Mark}
              onChange={({ currentTarget }) =>
                this.setState({ player1Mark: String(currentTarget.value) })
              }
            />
          </label>
          <br />
          <label>
            Player2 mark:
            <input
              name="Player2Mark"
              type="string"
              maxLength={1}
              value={this.state.player2Mark}
              onChange={({ currentTarget }) =>
                this.setState({ player2Mark: String(currentTarget.value) })
              }
            />
          </label>
          <br />
          <label>
            NextTurn:
            <input
              name="NextTurn"
              type="string"
              maxLength={1}
              value={this.state.nextTurn}
              onChange={({ currentTarget }) =>
                this.setState({ nextTurn: String(currentTarget.value) })
              }
            />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}

export const CreateCustomGame = connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateCustomGameComponent);
