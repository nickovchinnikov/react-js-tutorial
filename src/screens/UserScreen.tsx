import React from "react";
import { RouteComponentProps } from "react-router-dom";

interface RouteParams {
  name: string;
}

export class UserScreen extends React.PureComponent<
  RouteComponentProps<RouteParams>,
  {}
> {
  render() {
    return (
      <div>
        <h1>Hello, {this.props.match.params.name}!</h1>
      </div>
    );
  }
}
