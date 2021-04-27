import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import { Provider } from "react-redux";

import { TicTacToeGame, Header, SignIn, CoursesScreen } from "./screens";

import { store } from "./store";
import { selectIsAuthorized } from "@/modules/Login/selectors";

import { result } from "@/modules/Flickr";

export const App: React.FC<unknown> = () => {
  const [state, setState] = useState(store.getState());

  store.subscribe(() => setState(store.getState()));

  const isAuthorized = selectIsAuthorized(state);

  return (
    <Provider store={store}>
      <Router>
        <Header />
        <nav>
          <ul>
            <li>
              <Link to="/courses">Courses</Link>
            </li>
            {!isAuthorized ? (
              <li>
                <Link to="/signin">SignIn</Link>
              </li>
            ) : null}
            <li>
              <Link to="/ticktacktoe">TickTackToe</Link>
            </li>
            <li>
              <Link to="/flikr">Flickr app</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/courses">
            <CoursesScreen />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/ticktacktoe">
            <TicTacToeGame />
          </Route>
          <Route path="/flikr">
            {() => {
              result();
            }}
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
};
