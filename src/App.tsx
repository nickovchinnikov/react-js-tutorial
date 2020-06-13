import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import { Provider } from "react-redux";

import { TicTacToeGame, Header, SignIn } from "@/screens";
import { store } from "@/rdx/store";

export const App: React.FC<{}> = () => (
  <Provider store={store}>
    <Router>
      <Header />
      <nav>
        <ul>
          <li>
            <Link to="/signin">SignIn</Link>
          </li>
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
