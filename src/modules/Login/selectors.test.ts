import { TicTacToeGameState } from "@/store";
import { castPartialTo } from "@/utils/test/castPartialTo";
import { selectIsAuthorized } from "./selectors";

describe("Login selectors", () => {
  describe("selectIsAuthorized", () => {
    it("returns `true` for state with username", () => {
      expect(
        selectIsAuthorized(
          castPartialTo<TicTacToeGameState>({
            login: {
              username: "bob",
            },
          })
        )
      ).toBe(true);
    });

    it("returns `false` for state with no username", () => {
      expect(
        selectIsAuthorized(
          castPartialTo<TicTacToeGameState>({
            login: {
              username: "",
            },
          })
        )
      ).toBe(false);
    });
  });
});
