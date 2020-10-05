import React, { Component, ReactNode } from "react";

export interface Props {
  children: ReactNode;
}

export interface State {
  hasError: boolean;
}

export const ErrorMsgComponent = () => <h1>Something went wrong.</h1>;

export class ErrorBoundary extends Component<Props, State> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    // You can also log the error to an error reporting service
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <ErrorMsgComponent />;
    }

    return this.props.children;
  }
}
