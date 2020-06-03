import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";

import { LoginScreen, StantdartGame } from "@/components";

import { NoMatchScreen } from "@/screens/NoMatchScreen";
import { UserScreen } from "@/screens/UserScreen";
import { FormScreen } from "@/screens/FormScreen";
import { ReduxScreen } from "@/screens/ReduxScreen";

import { store } from "@/rdx/store";

export const App: React.FC<{}> = () => (
  <Provider store={store}>
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/stantdartgame">StantdartGame</Link>
          </li>
          <li>
            <Link to="/user/Nick">Nick</Link>
          </li>
          <li>
            <Link to="/form">Form</Link>
          </li>
          <li>
            <Link to="/redux">Redux</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/login">
          <LoginScreen />
        </Route>
        <Route path="/stantdartgame" render={() => <StantdartGame />} />
        <Route path="/user/:name" component={UserScreen} />
        <Route path="/form" component={FormScreen} />
        <Route path="/redux" component={ReduxScreen} />
        <Route path="*">
          <NoMatchScreen />
        </Route>
      </Switch>
    </Router>
  </Provider>
);
