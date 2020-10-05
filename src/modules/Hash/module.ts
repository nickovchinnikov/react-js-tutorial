import { ISagaModule } from "redux-dynamic-modules-saga";

import { reducer } from "./reducer";
import { hashSaga } from "./saga";

export const getHashModule = (): ISagaModule<typeof reducer> => ({
  id: "hash",
  reducerMap: {
    hash: reducer,
  },
  sagas: [hashSaga],
});
