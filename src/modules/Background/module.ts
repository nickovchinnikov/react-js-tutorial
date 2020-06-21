import { ISagaModule } from "redux-dynamic-modules-saga";

import { reducer } from "./reducer";
import { backgroundSaga } from "./saga";

export const getBackgroundModule = (): ISagaModule<typeof reducer> => ({
  id: "background",
  reducerMap: {
    background: reducer,
  },
  sagas: [backgroundSaga],
});
