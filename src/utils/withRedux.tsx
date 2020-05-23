import React from 'react';
import { store } from '@/rdx/store';

// if you want to get more info
// try to check https://gist.github.com/gaearon/1d19088790e70ac32ea636c025ba424e
export function withRedux<Props extends object & { dispatch?: (action: any) => void }>(TargetComponent: React.ComponentType<Props>, getPropsFromRedux: (state: any) => Partial<Props>) {
  class WrappedComponent extends React.Component<Omit<Props, keyof ReturnType<typeof getPropsFromRedux>>, {}> {
    storeSubscription?: Function;
    state: ReturnType<typeof getPropsFromRedux> = getPropsFromRedux(store.getState());

    render() {
      return (
        <TargetComponent
          dispatch={store.dispatch}
          {...this.state}
          {...this.props}
        />
      )
    }

    componentDidMount() {
      this.storeSubscription = store.subscribe(() => this.setState(getPropsFromRedux(store.getState())));
    }

    componentWillUnmount() {
      this.storeSubscription && this.storeSubscription();
    }
  }

  (WrappedComponent as any).displayName = `${TargetComponent.displayName}ConnectedToRedux`;

  return WrappedComponent;
}