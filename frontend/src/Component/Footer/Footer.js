import React from "react";
import "../../fontawesome/css/all.css";
import "../../App.css";
import "../b.css";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer ">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a href="#" className="navbar-brand">
            Nestory 2019
          </a>
          <div className="collapse navbar-collapse ">
            <ul className="navbar-nav ml-auto text-center">
              <li className="navbar-item">
                <a href="#" className="nav-link">
                  ABOUT
                </a>
              </li>
              <li className="navbar-item">
                <a href="#" className="nav-link">
                  EVENT
                </a>
              </li>
              <li className="navbar-item">
                <a href="#" className="nav-link">
                  CONTACT
                </a>
              </li>
              <li className="navbar-item">
                <a href="#" className="nav-link">
                  TERM &amp; CONDITION
                </a>
              </li>
              <li className="navbar-item">
                <a href="#" className="nav-link">
                  PRIVACY POLICY
                </a>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li style={{ marginLeft: "5px" }} className="navbar-item">
                <div style={{ border: "1px solid white", marginTop: "5px" }}>
                  <i
                    style={{ color: "white", marginTop: "5px", padding: "2px" }}
                    className="fas fa-envelope "
                  >
                    {" "}
                    Subscribe
                  </i>
                </div>
              </li>
              <li style={{ marginLeft: "5px" }} className="navbar-item">
                <i
                  style={{ color: "white", marginTop: "5px" }}
                  className="fab fa-facebook-f fa-2x"
                />
              </li>
              <li style={{ marginLeft: "5px" }} className="navbar-item">
                <i
                  style={{ color: "white", marginTop: "5px" }}
                  className="fab fa-twitter fa-2x"
                />
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Footer;
