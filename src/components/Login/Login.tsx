import React, { useCallback, useState } from "react";
import { Redirect } from "react-router";
import { connect } from "react-redux";
import { isEmpty } from "ramda";

import { TicTacToeGameState } from "@/rdx/store";

import { loginSlice } from "./reducer";

const mapStateToProps = ({ login }: TicTacToeGameState) => ({
  ...login,
});

const mapDispatchToProps = {
  setUsername: loginSlice.actions.setUsername,
};

export type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps;

export const LoginComponent: React.FC<Props> = ({ username, setUsername }) => {
  const [name, setName] = useState(username);
  const onSubmit = useCallback(
    async (ev) => {
      ev.preventDefault();
      setUsername(name);
    },
    [name, setUsername]
  );
  return isEmpty(username) ? (
    <form onSubmit={onSubmit}>
      <label>
        Name:
        <input
          placeholder="Enter your login"
          value={name}
          onChange={(ev) => setName((ev.target as HTMLInputElement).value)}
        />
      </label>
      <button>Login</button>
    </form>
  ) : (
    <Redirect to="/stantdartgame" />
  );
};

export const Login = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginComponent);
