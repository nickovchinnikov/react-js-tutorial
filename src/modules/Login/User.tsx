import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { isEmpty } from "ramda";

import { TicTacToeGameState } from "@/store";

import { actions } from "./reducer";

const mapStateToProps = ({ login }: TicTacToeGameState) => ({
  ...login,
});

const mapDispatchToProps = {
  logout: actions.logout,
};

export type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps;

class UserComponent extends PureComponent<Props> {
  logout = () => {
    const { logout } = this.props;
    logout();
  };
  render() {
    const { username } = this.props;
    return isEmpty(username) ? (
      <h3>
        Nice to see you! Lets <Link to="/login">login</Link> to the game!
      </h3>
    ) : (
      <div>
        <h3>Hello, {username}!</h3>
        <button onClick={this.logout}>Logout</button>
      </div>
    );
  }
}

export const User = connect(mapStateToProps, mapDispatchToProps)(UserComponent);
