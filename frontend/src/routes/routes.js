import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "../container/landingPage/LandingPage";
import Dashboard from "../container/Dashboard/Dashboard";
import Stories from "../container/stories/Stories";
import IndividualStory from "../container/IndividualStory/IndividualStory";
import Launchpad from "../container/Launchpad/Launchpad"
import Videos from "../container/Videos/Videos"
import Header from "../component/Header/Header";
import Footer from "../component/Footer/Footer";
const Routes = () => {
  return (
    // <Layout>
    <Router>
      <div>
        <Header />
        <Route path="/" exact component={LandingPage} />
        <Route path="/admin/" component={Dashboard} />
        <Route path="/stories/" component={Stories} />
        <Route path="/launchpad/" component={Launchpad} />
        <Route path="/videos/" component={Videos} />
        <Route path="/news/:id" component={IndividualStory} />
        <Footer />
      </div>
    </Router>
    // </Layout>
  );
};

export default Routes;
