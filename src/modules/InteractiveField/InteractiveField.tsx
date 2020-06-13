import React, { FC } from "react";
import { connect } from "react-redux";

import { TicTacToeGameState } from "@/store";
import { Field } from "@/components";

import { actions } from "./reducer";

const mapStateToProps = ({ game }: TicTacToeGameState) => ({
  field: game.gameField,
});

const mapDispatchToProps = {
  click: actions.click,
};

export type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps;

const InteractiveFieldComponent: FC<Props> = ({ field, click }) => {
  const onClick = (x: number, y: number) => click({ x, y });

  return <Field field={field} onClick={onClick} />;
};

export const InteractiveField = connect(
  mapStateToProps,
  mapDispatchToProps
)(InteractiveFieldComponent);
