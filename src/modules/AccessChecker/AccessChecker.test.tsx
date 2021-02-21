import React, { FC } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { cleanup, render, screen } from "@testing-library/react";

import { CheckState } from "@/modules/Login/reducer";
import { AccessCheckerComponent } from "./AccessChecker";

const WrappedComponent: FC = () => <div data-testid="no-error">No Error</div>;

afterEach(cleanup);

describe("AccessChecker test", () => {
  it("Renders ChekingUserMsgComponent if `status === CheckState.initiated`", () => {
    render(
      <AccessCheckerComponent status={CheckState.initiated}>
        <WrappedComponent />
      </AccessCheckerComponent>
    );
    expect(screen.getAllByTestId("checking-user-msg-component").length).toBe(1);
  });

  it("Renders RedirectUserComponent if `status === CheckState.failed`", () => {
    const { container } = render(
      <Router>
        <AccessCheckerComponent status={CheckState.failed}>
          <WrappedComponent />
        </AccessCheckerComponent>
      </Router>
    );
    expect(container).toMatchInlineSnapshot(`<div />`);
  });

  it("Renders children if `status === CheckState.succeed`", () => {
    render(
      <AccessCheckerComponent status={CheckState.succeed}>
        <WrappedComponent />
      </AccessCheckerComponent>
    );
    expect(screen.getAllByTestId("no-error").length).toBe(1);
  });
});
