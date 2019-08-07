import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "../container/landingPage/LandingPage";
import DashboardHeader from "../container/Dashboard/DashboardHeader";
import Innovation from "../container/Innovation/Innovation";
import Stories from "../container/stories/Stories";
import IndividualStory from "../container/IndividualStory/IndividualStory";
import Launchpad from "../container/Launchpad/Launchpad";
import Videos from "../container/Videos/Videos";
import Global from "../container/Global/Global";
import Header from "../component/Header/Header";
import Footer from "../component/Footer/Footer";
import Entrepreneurship from "../container/Entrepreneurship/Entrepreneurship";
import WithAuth from "../component/WithAuth/WithAuth";
const Routes = () => {
  return (
    <Router>
      <Switch>
        <div>
          <Header />
          <Route path="/" exact component={LandingPage} />
          {/* protect this route */}
          <Route
            path="/admin/dashboard/"
            component={WithAuth(DashboardHeader)}
          />
          <Route path="/innovation/" component={Innovation} />
          <Route path="/stories/" component={Stories} />
          <Route path="/global" component={Global} />
          <Route path="/entrepreneurship" component={Entrepreneurship} />
          <Route path="/launchpad/" component={Launchpad} />
          <Route path="/videos/" component={Videos} />
          <Route path="/news/:id" component={IndividualStory} />
          <Footer />
        </div>
      </Switch>
    </Router>
  );
};

export default Routes;
