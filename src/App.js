import React from "react";
import "./App.css";
import { BrowserRouter as Switch, Route } from "react-router-dom";

import WelcomePage from "./pages/WelcomePage";
import InputPage from "./pages/InputPage";
import OutputPage from "./pages/OutputPage";
import FactsPage from "./pages/FactsPage";
import DonationsPage from "./pages/DonationsPage";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={WelcomePage} />
        <Route path="/input" component={InputPage} />
        <Route path="/output" component={OutputPage} />
        <Route path="/facts" component={FactsPage} />
        <Route path="/donations" component={DonationsPage} />
      </Switch>
      </div>
  );
};

export default App;
