import React from "react";
import { authorizedOnlyHoc } from "./authorizedOnlyHoc";
import { isLoggedIn } from "@/api/auth";
import { mount } from "enzyme";
import { sleep } from "@/utils/sleep";

jest.mock("@/api/auth", () => ({
  isLoggedIn: jest.fn(),
}));

jest.mock("react-router-dom", () => ({
  Redirect: function Redirect(props: any) {
    return <div>Redirect: {JSON.stringify(props)}</div>;
  },
}));

describe("authorizedOnlyHoc", () => {
  interface ComponentProps {
    name: string;
  }
  const Component: React.FC<ComponentProps> = ({ name }) => <h1>{name}</h1>;
  const WrappedComponent = authorizedOnlyHoc(Component);

  it("renders placeholder during request and component on success", async () => {
    (isLoggedIn as jest.Mock).mockResolvedValueOnce(true);
    const wrapper = mount(<WrappedComponent name="Bob" />);
    expect(wrapper.html()).toMatchInlineSnapshot(
      `"<div>Checking if user is authorized</div>"`
    );
    await sleep(10);

    wrapper.update();
    expect(wrapper.html()).toMatchInlineSnapshot(`"<h1>Bob</h1>"`);
  });

  it("renders placeholder during request and redirect on failure", async () => {
    (isLoggedIn as jest.Mock).mockResolvedValueOnce(false);
    const wrapper = mount(<WrappedComponent name="Bob" />);
    expect(wrapper.html()).toMatchInlineSnapshot(
      `"<div>Checking if user is authorized</div>"`
    );
    await sleep(10);
    wrapper.update();
    expect(wrapper.html()).toMatchInlineSnapshot(
      `"<div>Redirect: {\\"to\\":\\"/\\"}</div>"`
    );
  });
});
