import React, { Dispatch } from "react";
import { AnyAction } from "redux";
import { store } from "@/store";

interface Props {
  dispatch?: Dispatch<AnyAction>;
}

// if you want to get more info
// try to check https://gist.github.com/gaearon/1d19088790e70ac32ea636c025ba424e
export function withRedux(
  TargetComponent: React.ComponentType<Props>,
  getPropsFromRedux: (state: object) => Partial<Props>
) {
  class WrappedComponent extends React.Component<
    Omit<Props, keyof ReturnType<typeof getPropsFromRedux>>,
    {}
  > {
    storeSubscription?: Function;
    state: ReturnType<typeof getPropsFromRedux> = getPropsFromRedux(
      store.getState()
    );

    render() {
      return (
        <TargetComponent
          dispatch={store.dispatch}
          {...this.state}
          {...this.props}
        />
      );
    }

    componentDidMount() {
      this.storeSubscription = store.subscribe(() =>
        this.setState(getPropsFromRedux(store.getState()))
      );
    }

    componentWillUnmount() {
      this.storeSubscription && this.storeSubscription();
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (WrappedComponent as any).displayName = `${TargetComponent.displayName}ConnectedToRedux`;

  return WrappedComponent;
}
