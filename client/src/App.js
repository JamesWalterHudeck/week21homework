import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      {/*The router renders each of our pages to display when a certain path is called in our address*/}
      <div>
        {/*Nav pulls from our nav pages to display*/}
        <Nav />
        {/*A switch statement is used to route each path to a page*/}
        <Switch>
          {/*Routes to our home page*/}
          <Route exact path="/" component={Home} />
          {/*Routes to our Saved page*/}
          <Route exact path="/saved" component={Saved} />
          {/*Brings up a 404 error page not found when a path that is found*/}
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
