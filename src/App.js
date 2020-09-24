import React, { Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Register from "./components/Register";
const App = () => {
  return (
    <Router>
      <Fragment>
        <Route exact path='/' component={Register} />
      </Fragment>
    </Router>
  );
};

export default App;
