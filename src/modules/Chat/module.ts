import { ISagaModule } from "redux-dynamic-modules-saga";

import { reducer } from "./reducer";
import { chatSaga } from "./saga";

export const getChatModule = (): ISagaModule<typeof reducer> => ({
  id: "chat",
  reducerMap: {
    chat: reducer,
  },
  sagas: [chatSaga],
});
