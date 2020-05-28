import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { LoginScreen } from "@/screens/LoginScreen";
import { FieldScreen } from "@/screens/FieldScreen";
import { NoMatchScreen } from "@/screens/NoMatchScreen";
import { UserScreen } from "@/screens/UserScreen";
import { ReduxScreen } from "@/screens/ReduxScreen";
import { Provider } from "react-redux";
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
            <Link to="/field">Field</Link>
          </li>
          <li>
            <Link to="/user/Nick">Nick</Link>
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
        <Route path="/field" render={() => <FieldScreen />} />
        <Route path="/user/:name" component={UserScreen} />
        <Route path="/redux" component={ReduxScreen} />
        <Route path="*">
          <NoMatchScreen />
        </Route>
      </Switch>
    </Router>
  </Provider>
);
