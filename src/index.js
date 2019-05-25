import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss";

import Home from "views/pages/Home.jsx";
import Projects from "views/pages/Projects.jsx";
import Bio from "views/pages/Bio.jsx";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route
          path="/"
          exact
          render={props => <Home {...props} />}
      />
      <Route
          path="/projects"
          exact
          render={props => <Projects {...props} />}
      />
      <Route
        path="/bio"
        exact
        render={props => <Bio {...props} />}
      />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
