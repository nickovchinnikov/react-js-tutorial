import React from "react";
import styled from "@emotion/styled";
import { ImageServer as Image } from "./ImageServer";
import { ImageRandom } from "./ImageRandom";

const Container = styled.div`
  text-align: center;
`;

interface ScreenState {
  id: number;
  interval: number;
  isActive: boolean;
}

export class App extends React.Component<{}, ScreenState> {
  constructor({}) {
    super({});
    this.state = {
      id: 1,
      interval: 1000,
      isActive: true,
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  private increment() {
    this.setState((state) => ({ id: state.id + 1 }));
  }

  private decrement() {
    this.setState((state) => ({ id: state.id - 1 }));
  }

  private toggle() {
    this.setState((state) => ({ isActive: !state.isActive }));
  }

  render() {
    const { id, interval, isActive } = this.state;
    return (
      <Container>
        <h1>Navigate Image</h1>
        <div>
          <button onClick={this.decrement}>prev</button>
          <Image id={id} />
          <button onClick={this.increment}>next</button>
        </div>
        <h4>{id}</h4>

        <h1>Random Image</h1>
        <input
          type="number"
          onChange={(e) => {
            this.setState({
              interval: parseInt(e.target.value),
            });
          }}
          value={interval}
        />
        <button onClick={this.toggle}>{isActive ? "stop" : "start"}</button>
        <div>
          <ImageRandom interval={interval} isActive={isActive} />
        </div>
      </Container>
    );
  }
}
