import { reducer } from "./reducers.asyncFlow";

const defaultState = {
  isLoading: false,
  data: undefined,
  error: undefined,
  probability: undefined,
};

describe("reducer", () => {
  it("invoke reducer without action", () => {
    expect(reducer(defaultState, { type: undefined })).toEqual(defaultState);
  });
  it("invoke reducer with LOADING action", () => {
    expect(reducer(defaultState, { type: "LOADING" })).toEqual({
      isLoading: true,
      data: undefined,
      error: undefined,
      probability: undefined,
    });
  });
  it("invoke reducer with SUCCESS action", () => {
    expect(reducer(defaultState, { type: "SUCCESS", data: "smthg" })).toEqual({
      isLoading: false,
      data: "smthg",
      error: undefined,
      probability: undefined,
    });
  });
  it("invoke reducer with ERROR action", () => {
    expect(
      reducer(defaultState, {
        type: "ERROR",
        error: { message: "request failed" },
      })
    ).toEqual({
      isLoading: false,
      data: undefined,
      error: { message: "request failed" },
      probability: undefined,
    });
  });
});
