import React, { ReactNode, FC } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { TicTacToeGameState } from "@/store";
import { CheckState } from "@/modules/Login/reducer";

const mapStateToProps = ({ login }: TicTacToeGameState) => ({
  status: login.status,
});

export interface Props extends ReturnType<typeof mapStateToProps> {
  children: ReactNode;
  redirectPath?: string;
}

export const ChekingUserMsgComponent: FC = () => (
  <h3>Checking if user is authorized...</h3>
);

export const RedirectUserComponent: FC<{ to: string }> = ({ to }) => (
  <Redirect to={to} />
);

export const AccessCheckerComponent: FC<Props> = ({
  children,
  status,
  redirectPath = "/login",
}) => {
  if (status === CheckState.initiated) {
    return <ChekingUserMsgComponent />;
  }

  if (status === CheckState.failed) {
    return <RedirectUserComponent to={redirectPath} />;
  }

  return <>{children}</>;
};

export const AccessChecker = connect(mapStateToProps)(AccessCheckerComponent);
