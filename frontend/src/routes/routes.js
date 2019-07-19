import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "../container/landingPage/LandingPage";
import Dashboard from "../container/Dashboard/Dashboard";
import Stories from "../container/stories/Stories";

function Routes() {
  return(
    <Router>
    <div>
      <Route path="/" exact component={LandingPage} />
      <Route path="/admin/" component={Dashboard} />
      <Route path="/stories/" component={Stories} />
    </div>
  </Router>
  )
}
export default Routes;
