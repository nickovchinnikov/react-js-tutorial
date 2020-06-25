import { TicTacToeGameState } from "@/store";

export function selectIsAuthorized(state: TicTacToeGameState): boolean {
  return Boolean(state.login.username);
}
