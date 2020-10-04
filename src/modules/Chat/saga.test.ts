import { testSaga } from "redux-saga-test-plan";
import faker from "faker";

import {
  chatSaga,
  createWebSocketConnection,
  createSocketChannel,
  sendMessage,
} from "./saga";
import { actions } from "./reducer";

describe("Chat Saga", () => {
  describe("Chat saga scenario", () => {
    it("Create socket connection and channel", () => {
      const socket = createWebSocketConnection();
      const payload = {
        author: faker.name.firstName(),
        message: faker.lorem.sentence(),
      };
      const dummyChannel = "*";

      testSaga(chatSaga)
        .next()
        .call(createWebSocketConnection)
        .next(socket)
        .call(createSocketChannel, socket)
        .next(dummyChannel)
        .takeEvery(actions.send.type, sendMessage, socket)
        .next()
        .take(dummyChannel)
        .next(payload)
        .put(actions.update([payload]))
        .finish();
    });
  });
});
