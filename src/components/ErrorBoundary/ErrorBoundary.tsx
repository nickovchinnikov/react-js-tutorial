import React, { FC, Component, ReactNode } from "react";

export interface Props {
  children: ReactNode;
}

export interface State {
  hasError: boolean;
}

export const ErrorMsgComponent: FC = () => (
  <h1 data-testid="error-component">Something went wrong.</h1>
);

export class ErrorBoundary extends Component<Props, State> {
  state = { hasError: false };

  static getDerivedStateFromError(): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: never): void {
    // You can also log the error to an error reporting service
    console.error(error, errorInfo);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <ErrorMsgComponent />;
    }

    return this.props.children;
  }
}
