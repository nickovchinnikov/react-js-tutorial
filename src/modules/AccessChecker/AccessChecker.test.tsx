import React, { FC } from "react";
import { cleanup, render, screen } from "@testing-library/react";

import { CheckState } from "@/modules/Login/reducer";
import { AccessCheckerComponent } from "./AccessChecker";

const WrappedComponent: FC = () => <div data-testid="no-error">No Error</div>;

jest.mock("react-router-dom", () => ({
  Redirect: (props: unknown) => {
    return <div>Redirect: {JSON.stringify(props)}</div>;
  },
}));

afterEach(cleanup);

describe("AccessChecker test", () => {
  it("Renders ChekingUserMsgComponent if `status === CheckState.initiated`", () => {
    render(
      <AccessCheckerComponent status={CheckState.initiated}>
        <WrappedComponent />
      </AccessCheckerComponent>
    );
    expect(
      screen.getAllByRole("heading", {
        name: "Checking if user is authorized...",
      }).length
    ).toBe(1);
  });

  it("Renders RedirectUserComponent if `status === CheckState.failed`", () => {
    const { container } = render(
      <AccessCheckerComponent status={CheckState.failed}>
        <WrappedComponent />
      </AccessCheckerComponent>
    );
    expect(container).toMatchInlineSnapshot(`
      <div>
        <div>
          Redirect: 
          {"to":"/login"}
        </div>
      </div>
    `);
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
