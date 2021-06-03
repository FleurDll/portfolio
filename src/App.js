import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";

const emailJSKey = {
  template: process.env.REACT_APP_EMAILJS_TEMPLATE,
  service: process.env.REACT_APP_EMAILJS_SERVICE,
  user: process.env.REACT_APP_EMAILJS_USER
};

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/"
          render={props => (
            <Home {...props} emailJSKey={emailJSKey} />
          )}
          exact
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;