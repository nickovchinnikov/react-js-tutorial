import { ISagaModule } from "redux-dynamic-modules-saga";

import { reducer } from "./reducer";
import { gameSaga } from "./saga";

export const getInteractiveFieldModule = (): ISagaModule<typeof reducer> => ({
  id: "game",
  reducerMap: {
    game: reducer,
  },
  sagas: [gameSaga],
});
