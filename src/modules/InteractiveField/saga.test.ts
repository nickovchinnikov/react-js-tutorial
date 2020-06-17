import { select } from "redux-saga/effects";
import { expectSaga, testSaga } from "redux-saga-test-plan";

import { selectors } from "./reducer";
import { gameStateWatcher, watchAndLog, watchFirstThreeAction } from "./saga";

import {
  actions,
  firstPlayerMark,
  secondPlayerMark,
  GameStatus,
} from "./reducer";

describe("Game saga", () => {
  it("gameStateWatcher detect the first move", () => {
    return expectSaga(gameStateWatcher)
      .provide([
        [
          select(selectors.game),
          {
            moves: 1,
            gameField: [
              ["", "", ""],
              ["", firstPlayerMark, ""],
              ["", "", ""],
            ],
          },
        ],
      ])
      .put(actions.changeStatus(GameStatus.Play))
      .run();
  });
  it("gameStateWatcher detect the full field", () => {
    return expectSaga(gameStateWatcher)
      .provide([
        [
          select(selectors.game),
          {
            moves: 9,
            gameField: [
              [firstPlayerMark, firstPlayerMark, secondPlayerMark],
              [secondPlayerMark, secondPlayerMark, firstPlayerMark],
              [firstPlayerMark, secondPlayerMark, firstPlayerMark],
            ],
          },
        ],
      ])
      .put(actions.changeStatus(GameStatus.GameOver))
      .run();
  });
  it("gameStateWatcher started to check winner", () => {
    return expectSaga(gameStateWatcher)
      .provide([
        [
          select(selectors.game),
          {
            moves: 5,
            gameField: [
              ["", secondPlayerMark, firstPlayerMark],
              ["", secondPlayerMark, firstPlayerMark],
              ["", secondPlayerMark, ""],
            ],
          },
        ],
      ])
      .put(actions.changeStatus(GameStatus.GameOver))
      .put(actions.setWinner(secondPlayerMark))
      .run();
  });
  it("watchAndLog", () => {
    const saga = testSaga(watchAndLog);
    saga
      .next()
      .take("*")
      .next()
      .select()
      .restart()
      .next()
      .take("*")
      .next()
      .select()
      .back(2)
      .next()
      .take("*")
      .next()
      .select()
      .next()
      .finish();
  });
  it("watchFirstThreeAction", () => {
    const saga = testSaga(watchFirstThreeAction);
    saga.next().take("*").next().take("*").next().take("*").next().isDone();
  });
});
