import React from "react";
// import DashboardHeader from './DashboardHeader'
import DashboardMain from "../../container/Dashboard/DashboardMain";
import launchpadDash from "../../container/Dashboard/launchpadDash";
import MentorDash from "../../container/Dashboard/MentorDash";
import Sidebar from "../../Component/Sidebar/Sidebar"

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import "../../fontawesome/css/all.css";
import "./dashboardheader.css";
import "../../App.css";
import $ from "jquery";
// import "../b.css";

class Dashboard extends React.Component {
  makeActive = () => {
    $("li > a").click(function() {
      $("li").removeClass();
      $(this)
        .parent()
        .addClass("active");
    });
  };
  render() {
    return (
      <Router>
        <div className="header-admin top">
        <div className="slidebar">
          <Sidebar />
        </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-3 col-12">
                <div
                  // style={{ marginLeft: "-15px", marginRight: "-15px" }}
                  className="sidenav1 float-left"
                >
                  <ul
                    className="navbar-nav ml-auto list"
                    onClick={this.makeActive}
                  >
                    <li className="navbar-item nav-item">
                      <Link to="/admin/dashboard/">
                        <i className="fas fa-rss" /> News
                      </Link>
                    </li>
                    <li
                      className="navbar-item nav-item"
                      onClick={this.makeActive}
                    >
                      <Link to="/admin/dashboard/launchpad">
                        <i className="fas fa-memory" /> Launchpad
                      </Link>
                    </li>
                    <li
                      className="navbar-item nav-item"
                      onClick={this.makeActive}
                    >
                      <Link to="/admin/dashboard/mentor">
                        <i className="fas fa-map" /> Mentor
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-9 col-12">
                <div className="routestyle py-4">
                  
                  <Route
                    path="/admin/dashboard/"
                    exact
                    component={DashboardMain}
                  />
                  <Route
                    path="/admin/dashboard/launchpad"
                    component={launchpadDash}
                  />
                  <Route
                    path="/admin/dashboard/mentor"
                    component={MentorDash}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default Dashboard;
//  <div className="row ">
//                   <nav className="navbar navbar-expand-lg navbar-dark">
//                     <div className="collapse navbar-collapse">
//                       <ul className="navbar-nav ml-auto text-center list">
//                         <li className="navbar-item nav-item">
//                           <Link to="/">News header</Link>
//                         </li>
//                         <li className="navbar-item nav-item">
//                           <Link to="/lateststories">Latest Stories</Link>
//                         </li>
//                         <li className="navbar-item nav-item">
//                           <Link to="/banner">Banner</Link>
//                         </li>
//                         <li className="navbar-item nav-item">
//                           <Link to="/innovation">Innovation</Link>
//                         </li>
//                         <li className="navbar-item nav-item">
//                           <Link to="/entrepreneurship">Entrepreneurship</Link>
//                         </li>
//                         <li className="navbar-item nav-item">
//                           <Link to="/videos">Videos</Link>
//                         </li>
//                       </ul>
//                     </div>
//                   </nav>
//                 </div>
