import React from "react";
import ReactGA from 'react-ga';
import { useGA4React } from "ga-4-react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";

ReactGA.initialize('UA-201204691-1');
ReactGA.pageview(window.location.pathname + window.location.search);

const emailJSKey = {
  template: process.env.REACT_APP_EMAILJS_TEMPLATE,
  service: process.env.REACT_APP_EMAILJS_SERVICE,
  user: process.env.REACT_APP_EMAILJS_USER
};

const App = () => {

  const ga = useGA4React();
  console.log(ga);

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