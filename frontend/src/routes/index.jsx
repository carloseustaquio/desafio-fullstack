import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import RegisterUser from "../views/RegisterUser";
import Login from "../views/Login";
import ForgotPass from "../views/ForgotPass";
import Welcome from "../views/Welcome";
import PrivateRoute from "./PrivateRoute";

const Routes = () => (
  <Router>
    <Switch>
      <Redirect exact from="/" to="/login" />
      <Route exact path="/register" component={RegisterUser} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/forgot-pass" component={ForgotPass} />
      <PrivateRoute exact path="/app" component={Welcome} />

      <Route path="/" component={() => <h1>404 Not found</h1>} />
    </Switch>
  </Router>
)

export default Routes