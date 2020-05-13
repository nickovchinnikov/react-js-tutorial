import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { logout } from "@/api/auth";

interface RouteParams {
  name: string;
}

export class UserScreen extends React.PureComponent<
  RouteComponentProps<RouteParams>,
  {}
> {
  logout = async () => {
    await logout();
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
        <h1>Hello, {this.props.match.params.name}!</h1>
        <button onClick={this.logout}>Logout</button>
      </div>
    );
  }
}
