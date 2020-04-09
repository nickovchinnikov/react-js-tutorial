import React, { Component } from "react";

import { ClickCounterButton } from "./ClickCounterButton";

interface Prop {
  start?: number;
}

interface State {
  count: number;
}

export class ClickCounter extends Component<Prop, State> {
  constructor(props: Prop) {
    super(props);
    this.state = {
      count: props.start || 0,
    };
    this.increment = this.increment.bind(this);
  }

  increment() {
    const { count } = this.state;
    this.setState({ count: count + 1 });
  }

  componentDidMount() {
    console.log("ClickCounter: componentDidMount");
  }

  render() {
    const { count } = this.state;
    return (
      <ClickCounterButton increment={this.increment}>
        {count}
      </ClickCounterButton>
    );
  }
}
