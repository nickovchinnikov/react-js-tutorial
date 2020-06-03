import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";

import { Login, StantdartGame, NoMatch, User, ReduxData } from "@/components";

import { store } from "@/rdx/store";

export const App: React.FC<{}> = () => (
  <Provider store={store}>
    <Router>
      <User />
      <nav>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/stantdartgame">StantdartGame</Link>
          </li>
          <li>
            <Link to="/redux">ReduxData</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/stantdartgame" render={() => <StantdartGame />} />
        <Route path="/redux" component={ReduxData} />
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  </Provider>
);
