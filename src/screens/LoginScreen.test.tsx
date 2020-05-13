import React from "react";

import { LoginScreen } from "./LoginScreen";
import { shallow } from "enzyme";
import { login } from "@/api/auth";

const mockHistory = { push: jest.fn() };
jest.mock("react-router-dom", () => ({
  useHistory: () => mockHistory,
}));

jest.mock("@/api/auth", () => ({
  login: jest.fn(),
}));

describe("LoginScreen", () => {
  it("navigates to user page on submit", async () => {
    const name = "BobMarley";
    const screen = shallow(<LoginScreen />);

    screen.find("input").simulate("change", { target: { value: name } });
    await screen
      .find("form")
      .simulate("submit", { preventDefault: () => null });

    expect(login).toHaveBeenCalledWith(name);
    expect(mockHistory.push).toHaveBeenCalledWith(`/user/${name}`);
  });
});
