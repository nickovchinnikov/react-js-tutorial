import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import { Provider } from "react-redux";

import { TicTacToeGame, Header, SignIn } from "./screens";

import { store } from "./store";
import { selectIsAuthorized } from "@/modules/Login/selectors";

export const App: React.FC<{}> = () => {
  const [state, setState] = useState(store.getState());

  store.subscribe(() => setState(store.getState()));

  const isAuthorized = selectIsAuthorized(state);

  return (
    <Provider store={store}>
      <Router>
        <Header />
        <nav>
          <ul>
            {!isAuthorized ? (
              <li>
                <Link to="/signin">SignIn</Link>
              </li>
            ) : null}
            <li>
              <Link to="/ticktacktoe">TickTackToe</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/ticktacktoe">
            <TicTacToeGame />
          </Route>
          <Route path="*">
            <Redirect to="/signin" />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
};
