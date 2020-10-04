import { take, takeEvery, put, call } from "redux-saga/effects";
import { eventChannel } from "redux-saga";
import SocketIO from "socket.io-client";

import { actions } from "./reducer";

export const createWebSocketConnection = () =>
  SocketIO("http://localhost:3000");

export function createSocketChannel(socket: SocketIOClient.Socket) {
  return eventChannel((emit) => {
    const chatMessageHandler = ({
      payload,
    }: ReturnType<typeof actions.send>) => {
      emit(payload);
    };

    socket.on("chatMessage", chatMessageHandler);

    const unsubscribe = () => {
      socket.off("chatMessage", chatMessageHandler);
    };

    return unsubscribe;
  });
}

export function* sendMessage(
  socket: SocketIOClient.Socket,
  payload: ReturnType<typeof actions.send>
) {
  socket.emit("chatMessage", payload);
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
