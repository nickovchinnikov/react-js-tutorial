import React, { Component, ReactNode } from "react";

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
      count: 0,
    };
    this.increment = this.increment.bind(this);
  }

  increment(): void {
    const { count } = this.state;
    this.setState({ count: count + 1 });
  }

  render(): ReactNode {
    const { count } = this.state;
    return <button onClick={this.increment}>Clicked {count} times!</button>;
  }
}
