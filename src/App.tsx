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
import { Basis } from "../lessons/module1/6_JSX_CSS/Basis";
import { Modules } from "../lessons/module1/6_JSX_CSS/Modules";
import { CssInJs } from "../lessons/module1/6_JSX_CSS/Css-in-js";

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
            <li>
              <Link to="/lessons/6/basis">basis</Link>
            </li>
            <li>
              <Link to="/lessons/6/module">module</Link>
            </li>
            <li>
              <Link to="/lessons/6/css-in-js">css-in-js</Link>
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
          <Route path="/lessons/6/basis">
            <Basis />
          </Route>
          <Route path="/lessons/6/module">
            <Modules />
          </Route>
          <Route path="/lessons/6/css-in-js">
            <CssInJs />
          </Route>
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
          <Route path="*">
            <Redirect to="/signin" />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
};
