import React from "react";
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { isLoggedIn } from "@/api/auth";

import { authorizedOnlyHoc } from "./authorizedOnlyHOC";

jest.mock("@/api/auth", () => ({
  isLoggedIn: jest.fn(),
}));

jest.mock("react-router-dom", () => ({
  Redirect: function Redirect(props: unknown) {
    return <div data-testid="redirect">Redirect: {JSON.stringify(props)}</div>;
  },
}));

afterEach(cleanup);

describe("authorizedOnlyHoc", () => {
  interface ComponentProps {
    name: string;
  }

  const Component: React.FC<ComponentProps> = ({ name }) => <h1>{name}</h1>;
  const WrappedComponent = authorizedOnlyHoc(Component);

  it("renders placeholder during request and component on success", async () => {
    (isLoggedIn as jest.Mock).mockResolvedValueOnce(true);

    const { container } = render(<WrappedComponent name="Bob" />);

    expect(container).toMatchInlineSnapshot(`
      <div>
        <div>
          Checking if user is authorized
        </div>
      </div>
    `);

    await waitFor(() => screen.getByRole("heading", { name: "Bob" }));

    expect(screen.getByRole("heading")).toHaveTextContent("Bob");
  });

  it("renders placeholder during request and redirect on failure", async () => {
    (isLoggedIn as jest.Mock).mockResolvedValueOnce(false);

    const { container } = render(<WrappedComponent name="Bob" />);

    expect(container).toMatchInlineSnapshot(`
      <div>
        <div>
          Checking if user is authorized
        </div>
      </div>
    `);

    await waitFor(() => screen.getByTestId("redirect"));

    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          data-testid="redirect"
        >
          Redirect: 
          {"to":"/login"}
        </div>
      </div>
    `);
  });
});
