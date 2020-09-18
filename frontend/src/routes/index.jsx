import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import RegisterUser from "../views/RegisterUser";

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={RegisterUser} />
      <Route exact path="/login" component={() => <p>Login</p>} />
      <Route path="/" component={() => <h1>404 Not found</h1>} />
    </Switch>
  </Router>
)

export default Routes