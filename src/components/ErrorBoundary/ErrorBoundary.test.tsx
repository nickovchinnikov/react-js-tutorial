import React from "react";
import { mount, shallow } from "enzyme";

import { ErrorBoundary, ErrorMsgComponent } from "./ErrorBoundary";

describe("ErrorBoundary test", () => {
  it("Renders ErrorMsgComponent Fallback if error ", () => {
    const WrappedComponent = () => {
      throw new Error("Errored!");
    };

    const component = (
      <ErrorBoundary>
        <WrappedComponent />
      </ErrorBoundary>
    );

    expect(mount(component).html()).toEqual(
      shallow(<ErrorMsgComponent />).html()
    );
  });

  it("Renders children if have no error", () => {
    const WrappedComponent = () => <div>No Error</div>;

    const component = (
      <ErrorBoundary>
        <WrappedComponent />
      </ErrorBoundary>
    );

    expect(mount(component).html()).toEqual(
      shallow(<WrappedComponent />).html()
    );
  });
});
