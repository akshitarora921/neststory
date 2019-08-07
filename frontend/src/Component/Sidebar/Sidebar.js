import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import $ from "jquery";

class Sidebar extends React.Component {
  openNav = () => {
    console.log("clicked!!");
    $("#mySidenav").css({ width: "250px" });
    $("#footer").css({ width: "250px" });
  };

  closeNav = () => {
    $("#mySidenav").css({ width: "0px" });
    $("#footer").css({ width: "0px" });
  };
  render() {
    return (
      <div>
        <div id="mySidenav" className="sidenav">
          <div className="navbar-header">
            <p>Here is more for you</p>
            <a
              href="javascript:void(0)"
              className="closebtn"
              onClick={this.closeNav}
            >
              &times;
            </a>
          </div>
          {localStorage.getItem("user") !== null ? (
            <div className="navbar-heading">
              <Link to="/admin/dashboard">Dashboard</Link>
            </div>
          ) : (
            ""
          )}

          <div className="navbar-heading">
            <Link to="/">Homes</Link>
          </div>
          <div>
            {/* <ul className="list">
              <li>Latest</li>
              <li>Trending</li>
              <li>Politics</li>
              <li>Global</li>
            </ul> */}
          </div>
          <div className="navbar-heading">
            <Link to="/stories">Stories</Link>
          </div>
          <div>
            {/* <ul className="list">
              <li>Latest</li>
              <li>Trending</li>
              <li>Politics</li>
              <li>Global</li>
            </ul> */}
          </div>
          <div className="navbar-heading">
            <Link to="/global">Global</Link>
          </div>
          <div>
            {/* <ul className="list">
              <li>Latest</li>
              <li>Trending</li>
              <li>Politics</li>
              <li>Global</li>
            </ul> */}
          </div>
          <div className="navbar-heading">
            <Link to="/innovation">Innovation</Link>
          </div>
          <div>
            {/* <ul className="list">
              <li>Latest</li>
              <li>Trending</li>
              <li>Politics</li>
              <li>Global</li>
            </ul> */}
          </div>
          <div className="navbar-heading">
            <Link to="/launchpad">Launchpad</Link>
          </div>
          <div>
            {/* <ul className="list">
              <li>Latest</li>
              <li>Trending</li>
              <li>Politics</li>
              <li>Global</li>
            </ul> */}
          </div>
          <div className="navbar-heading">
            <Link to="/entrepreneurship">Entrepreneurship</Link>
          </div>
          <div>
            {/* <ul className="list">
              <li>Latest</li>
              <li>Trending</li>
              <li>Politics</li>
              <li>Global</li>
            </ul> */}
          </div>
          <div className="navbar-heading">
            <Link to="/videos">Videos</Link>
          </div>
          <div>
            {/* <ul className="list">
              <li>Latest</li>
              <li>Trending</li>
              <li>Politics</li>
              <li>Global</li>
            </ul> */}
          </div>

          <div id="footer" className="navbar-footer">
            <div className="footer-heading">Nest Story</div>
          </div>
        </div>
        {/* <span className="akshit" onClick={this.openNav}>
          &#9776; open
        </span> */}
        <div
          style={{
            position: "absolute",
            zIndex: "2",
            padding: "90px 20px 90px 90px",
            marginTop: "-140px",
            marginLeft: "-160px",
            backgroundColor: "white",
            msTransform: "rotate(45deg)" /* IE 9 */,
            WebkitTransform: "rotate(45deg)" /* Safari 3-8 */,
            transform: "rotate(45deg)"
          }}
        >
          <i
            style={{
              marginLeft: "100px",
              msTransform: "rotate(-45deg)" /* IE 9 */,
              WebkitTransform: "rotate(-45deg)" /* Safari 3-8 */,
              transform: "rotate(-45deg)",
              color: "orangered"
            }}
            onClick={this.openNav}
            className="fas fa-bars fa-2x "
          />
        </div>
      </div>
    );
  }
}

export default Sidebar;
