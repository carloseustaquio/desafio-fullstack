import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import RegisterUser from "../views/RegisterUser";
import Login from "../views/Login";

const Routes = () => (
  <Router>
    <Switch>
      <Redirect exact from="/" to="/register" />
      <Route exact path="/register" component={RegisterUser} />
      <Route exact path="/login" component={Login} />
      <Route path="/" component={() => <h1>404 Not found</h1>} />
    </Switch>
  </Router>
)

export default Routes