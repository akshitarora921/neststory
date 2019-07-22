import React from "react";
// import DashboardHeader from './DashboardHeader'
import NewsHeaderInput from "../../component/AdminInput/NewsHeaderInput";
import BannerInput from "../../component/AdminInput/BannerInput";
import LatestStoriesInput from "../../component/AdminInput/LatestStoriesInput";
import InnovationInput from "../../component/AdminInput/InnovationInput";
import EntrepreneurshipInput from "../../component/AdminInput/EntrepreneurshipInput";
import VideosInput from "../../component/AdminInput/VideosInput";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../../fontawesome/css/all.css";
import "./dashboardheader.css";
import "../../App.css";
import $ from 'jquery'
// import "../b.css";

class Dashboard extends React.Component {
  makeActive=()=>{
    $('li > a').click(function() {
      $('li').removeClass();
      $(this).parent().addClass('active');
  });
  }
  render() {
    return (
      <Router>
        <div style={{ zIndex: "3", position: "fixed" }} className="header-admin">
          <div className="container-fluid headerStyleadmin">
            <div className="row">
              <div className="col h1 logo">Nestory</div>
              <div className="col-9 col-md-8">
                <div className="row">
                  <div className="h1 ml-4 mt-2">Dash Board</div>
                </div>
              </div>
            </div>
          </div>
          <div class="sidenav1">
            <ul className="navbar-nav ml-auto  list" onClick={this.makeActive}>
              <li className="navbar-item nav-item">
                <Link to="/admin/newsheader">
                  <i className="fas fa-rss" /> News header
                </Link>
              </li>
              <li className="navbar-item nav-item" onClick={this.makeActive}>
                <Link to="/admin/lateststories">
                  <i class="fas fa-memory" /> Latest Stories
                </Link>
              </li>
              <li className="navbar-item nav-item" onClick={this.makeActive}>
                <Link to="/admin/banner">
                  <i class="fas fa-map" /> Banner
                </Link>
              </li>
              <li className="navbar-item nav-item" onClick={this.makeActive}>
                <Link to="/admin/innovation">
                  <i class="fas fa-asterisk" /> Innovation
                </Link>
              </li>
              <li className="navbar-item nav-item" onClick={this.makeActive}>
                <Link to="/admin/entrepreneurship">
                  <i class="fas fa-laptop-code" /> Entrepreneurship
                </Link>
              </li>
              <li className="navbar-item nav-item" onClick={this.makeActive}>
                <Link to="/admin/videos">
                  <i class="fas fa-video" /> Videos
                </Link>
              </li>
            </ul>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-3" />

              <div className="col-9">
                <div className="routestyle">
                  <Route path="/admin/newsheader/" exact component={NewsHeaderInput} />
                  <Route
                    path="/admin/lateststories/"
                    component={LatestStoriesInput}
                  />
                  <Route path="/admin/banner/" component={BannerInput} />
                  <Route path="/admin/innovation/" component={InnovationInput} />
                  <Route
                    path="/admin/entrepreneurship/"
                    component={EntrepreneurshipInput}
                  />
                  <Route path="/admin/videos/" component={VideosInput} />
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
