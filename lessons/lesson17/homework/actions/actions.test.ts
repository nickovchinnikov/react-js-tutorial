import { loadingCreator, successCreator, errorCreator } from "./actions";

describe("actions", () => {
  it("when loading creator invoked then isLoading prop changed", () => {
    const isLoading = true;
    const expectedAction = {
      type: "LOADING",
      isLoading,
    };
    expect(loadingCreator(isLoading)).toEqual(expectedAction);
  });
  it("when success creator invoked then data prop filled with payload", () => {
    const payload = JSON.stringify({ data: "smthg" });
    const expectedAction = {
      type: "SUCCESS",
      isLoading: false,
      data: payload,
      error: undefined,
    };
    expect(successCreator(payload)).toEqual(expectedAction);
  });
  it("when error creator invoked then error prop filled with error object", () => {
    const error = "Request failed";
    const expectedAction = {
      type: "ERROR",
      isLoading: false,
      data: undefined,
      error,
    };
    expect(errorCreator(error)).toEqual(expectedAction);
  });
});
