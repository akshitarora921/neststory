import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "../container/landingPage/LandingPage";
import DashboardHeader from "../container/Dashboard/DashboardHeader";
// import DashboardMain from "../container/Dashboard/DashboardMain";
// import launchpadDash from "../container/Dashboard/launchpadDash";
// import MentorDash from "../container/Dashboard/MentorDash";
import Innovation from "../container/Innovation/Innovation";
import Stories from "../container/stories/Stories";
import IndividualStory from "../container/IndividualStory/IndividualStory";
import Launchpad from "../container/Launchpad/Launchpad"
import Videos from "../container/Videos/Videos"
import Global from "../container/Global/Global"
import Header from "../component/Header/Header";
import Footer from "../component/Footer/Footer";
import Entrepreneurship from "../container/Entrepreneurship/Entrepreneurship";
const Routes = () => {
  return (
    // <Layout>
    <Router>
      <div>
        <Header />
        <Route path="/" exact component={LandingPage} />
        <Route path="/admin/dashboard/" component={DashboardHeader} />
        {/* <Route path="/admin/dashboard/news" component={DashboardMain} />
        <Route path="/admin/dashboard/launchpad" component={launchpadDash} />
        <Route path="/admin/dashboard/mentor" component={MentorDash} /> */}
        <Route path="/innovation/" component={Innovation} />
        <Route path="/stories/" component={Stories} />
        <Route path="/global" component={Global} />
        <Route path="/entrepreneurship" component={Entrepreneurship} />
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
