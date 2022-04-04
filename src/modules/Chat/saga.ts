import { take, takeEvery, put, call } from "redux-saga/effects";
import { EventChannel, eventChannel } from "redux-saga";
import SocketIO from "socket.io-client";

import { actions } from "./reducer";

export const createWebSocketConnection = (): SocketIOClient.Socket =>
  SocketIO("http://localhost:3000");

const chatMessageEvent = "chatMessage";

export function createSocketChannel(
  socket: SocketIOClient.Socket
): EventChannel<unknown> {
  return eventChannel((emit) => {
    const chatMessageHandler = ({
      payload,
    }: ReturnType<typeof actions.send>) => {
      emit(payload);
    };

    socket.on(chatMessageEvent, chatMessageHandler);

    const unsubscribe = () => {
      socket.off(chatMessageEvent, chatMessageHandler);
    };

    return unsubscribe;
  });
}

export function* sendMessage(
  socket: SocketIOClient.Socket,
  payload: ReturnType<typeof actions.send>
): Generator<void> {
  socket.emit(chatMessageEvent, payload);
}

export function* chatSaga() {
  const socket = yield call(createWebSocketConnection);
  const socketChannel = yield call(createSocketChannel, socket);

  yield takeEvery(actions.send.type, sendMessage, socket);

  while (true) {
    try {
      const payload = yield take(socketChannel);
      yield put(actions.update([payload]));
    } catch (err) {
      console.error("socket error:", err);
      socketChannel.close();
    }
  }
}
