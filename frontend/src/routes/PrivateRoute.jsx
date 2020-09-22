import React, { useContext, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem("profitfy_token");
  const user = localStorage.getItem("profitfy_user");

  return (
    <Route
      {...rest}
      render={(props) => {
        if (!token || !user) {
          return (
            <Redirect to={{ pathname: "/", state: { from: props.location } }} />
          );
        }

        return <Component {...props} />;
      }}
    />
  );
};

export default PrivateRoute;
