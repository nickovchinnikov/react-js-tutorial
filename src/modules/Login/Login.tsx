import React, { useCallback, useState } from "react";
import { Redirect } from "react-router";
import { connect } from "react-redux";
import { isEmpty } from "ramda";

import { TicTacToeGameState } from "@/store";

import { actions } from "./reducer";

const mapStateToProps = ({ login }: TicTacToeGameState) => ({
  ...login,
});

const mapDispatchToProps = {
  login: actions.login,
};

export type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps;

export const LoginComponent: React.FC<Props> = ({ username, login }) => {
  const [name, setName] = useState(username);
  const onSubmit = useCallback(
    async (ev) => {
      ev.preventDefault();
      if (!isEmpty(name)) {
        login(name);
      }
    },
    [name, login]
  );
  return isEmpty(username) ? (
    <form onSubmit={onSubmit}>
      <label>
        Name:
        <input
          placeholder="Enter your login"
          value={name}
          onChange={(ev) => setName((ev.target as HTMLInputElement).value)}
          required
          minLength={4}
          maxLength={10}
        />
      </label>
      <button>Login</button>
    </form>
  ) : (
    <Redirect to="/ticktacktoe" />
  );
};

export const Login = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginComponent);
