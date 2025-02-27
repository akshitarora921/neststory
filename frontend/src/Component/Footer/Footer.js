import React from "react";
import "./footer.css";
import {Link} from 'react-router-dom'

class Footer extends React.Component {
  render() {
    return (
      <div className="footer ">
        <nav className="navbar navbar-expand-lg navbar-expand-xs navbar-dark bg-dark">
          <Link to="/" className="navbar-brand brand">
            Nestory 2019
          </Link>
          <div className="collapse navbar-collapse ">
            <ul className="navbar-nav mx-auto text-center">
              <li className="navbar-item">
                <Link to="#" className="nav-link">
                  ABOUT
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="#" className="nav-link">
                  EVENT
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="#" className="nav-link">
                  CONTACT
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="#" className="nav-link">
                  TERM &amp; CONDITION
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="#" className="nav-link">
                  PRIVACY POLICY
                </Link>
              </li>
            </ul>
          </div>

          <nav className="navbar navbar-expand navbar-dark bg-dark">
            <div className="collapse navbar-collapse ">
              <ul className="navbar-nav ml-auto">
                <li style={{ marginLeft: "5px" }} className="navbar-item">
                  <div style={{ border: "1px solid white", marginTop: "5px" }}>
                    <i
                      style={{
                        color: "white",
                        marginTop: "5px",
                        padding: "2px"
                      }}
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
        </nav>

        <div className="footer-back1" />
      </div>
    );
  }
}

export default Footer;
