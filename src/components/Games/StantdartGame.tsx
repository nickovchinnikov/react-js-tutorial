import React, { FC } from "react";
import { connect } from "react-redux";

import { TicTacToeGameState } from "@/rdx/store";
import { AccessChecker, Field } from "@/components";

import { actions } from "./reducer";

const mapStateToProps = ({ game }: TicTacToeGameState) => ({
  field: game.gameField,
});

const mapDispatchToProps = {
  click: actions.click,
};

export type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps;

const InteractiveField: FC<Props> = ({ field, click }) => {
  const onClick = (x: number, y: number) => click({ x, y });

  return (
    <AccessChecker>
      <Field field={field} onClick={onClick} />
    </AccessChecker>
  );
};

export const StantdartGame = connect(
  mapStateToProps,
  mapDispatchToProps
)(InteractiveField);
