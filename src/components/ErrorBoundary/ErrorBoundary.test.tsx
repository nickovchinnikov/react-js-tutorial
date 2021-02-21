import React from "react";
import { render, screen } from "@testing-library/react";

import { ErrorBoundary } from "./ErrorBoundary";

describe("ErrorBoundary test", () => {
  it("Render ErrorMsgComponent Fallback if error ", () => {
    const WrappedComponent = () => {
      throw new Error("Error!");
    };

    render(
      <ErrorBoundary>
        <WrappedComponent />
      </ErrorBoundary>
    );

    expect(screen.getAllByTestId("error-component").length).toBe(1);
  });

  it("Render children if have no error", () => {
    const WrappedComponent = () => (
      <div data-testid="no-error-component">No Error</div>
    );
    render(
      <ErrorBoundary>
        <WrappedComponent />
      </ErrorBoundary>
    );
    expect(screen.getAllByTestId("no-error-component").length).toBe(1);
  });
});
