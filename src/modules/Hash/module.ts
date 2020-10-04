import { ISagaModule } from "redux-dynamic-modules-saga";

import { reducer } from "./reducer";

export const getHashModule = (): ISagaModule<typeof reducer> => ({
  id: "hash",
  reducerMap: {
    hash: reducer,
  },
  sagas: [],
});
