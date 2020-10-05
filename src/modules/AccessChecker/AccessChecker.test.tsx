import React from "react";
import { mount, shallow } from "enzyme";
import { BrowserRouter as Router } from "react-router-dom";

import { CheckState } from "@/modules/Login/reducer";

import {
  AccessCheckerComponent,
  ChekingUserMsgComponent,
  RedirectUserComponent,
} from "./AccessChecker";

const WrappedComponent = () => <div>No Error</div>;

describe("AccessChecker test", () => {
  it("Renders ChekingUserMsgComponent if `status === CheckState.initiated`", () => {
    const component = (
      <AccessCheckerComponent status={CheckState.initiated}>
        <WrappedComponent />
      </AccessCheckerComponent>
    );

    expect(mount(component).html()).toEqual(
      shallow(<ChekingUserMsgComponent />).html()
    );
  });

  it("Renders RedirectUserComponent if `status === CheckState.failed`", () => {
    const component = (
      <Router>
        <AccessCheckerComponent status={CheckState.failed}>
          <WrappedComponent />
        </AccessCheckerComponent>
      </Router>
    );

    expect(mount(component).html()).toEqual(
      shallow(
        <Router>
          <RedirectUserComponent to="/login" />
        </Router>
      ).html()
    );
  });

  it("Renders children if `status === CheckState.succeed`", () => {
    const component = (
      <AccessCheckerComponent status={CheckState.succeed}>
        <WrappedComponent />
      </AccessCheckerComponent>
    );

    expect(mount(component).html()).toEqual(
      shallow(<WrappedComponent />).html()
    );
  });
});
