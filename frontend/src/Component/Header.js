import React from "react";
import "./header.css";
import "../fontawesome/css/all.css";
import "../App.css";
import "./b.css";

class Header extends React.Component {
  render() {
    return (
      <div style={{ zIndex: "3", position: "relative" }} className="header">
        <div
          style={{
            backgroundImage: "linear-gradient(orangered, black)",
            borderBottom: "4px solid red",
            borderRadius: "0px 0px 75px 75px"
          }}
          className="container-fluid "
        >
          <div className="row">
            <div
              style={{
                color: "white",
                fontFamily: "Noto Serif",
                marginLeft: "50px",
                paddingTop: "10px",
                fontSize: "60px"
              }}
              className="col h1"
            >
              Nestory
            </div>
            <div className="col">
              <div
                style={{
                  backgroundColor: "white",
                  borderRadius: "10px 0px 0px 10px"
                }}
                className="row"
              >
                <div className="col-7 ">
                  <div class="d-flex justify-content-between">
                    <div className="p-1">
                      <i
                        style={{
                          paddingTop: "5px"
                        }}
                        class="fas fa-angle-left fa-2x"
                      />
                    </div>
                    <div
                      style={{ marginTop: "10px", alignContent: "center" }}
                      className="p-8"
                    >
                      <font
                        style={{
                          fontSize: "18px"
                        }}
                      >
                        This.props.text ksdjglkj
                      </font>
                    </div>
                    <div className="p-1">
                      <i
                        style={{
                          paddingTop: "5px"
                        }}
                        class="fas fa-angle-right fa-2x "
                      />
                    </div>
                  </div>
                </div>
                <div className="col">
                  <nav className="navbar navbar-expand-lg">
                    <div className="navbar-collapse collapse">
                      <ul className="navbar-nav ml-auto ">
                        <li
                          style={{ marginLeft: "5px" }}
                          className="navbar-item"
                        >
                          <div
                            style={{
                              border: "1px solid black",
                              padding: "2px",
                              marginTop: "2px"
                            }}
                          >
                            <i
                              style={{ marginLeft: "5px" }}
                              class="fas fa-envelope "
                            >
                              {" "}
                              Subscribe
                            </i>
                          </div>
                        </li>
                        <li
                          style={{ marginLeft: "5px" }}
                          className="navbar-item"
                        >
                          <i
                            style={{ marginLeft: "15px" }}
                            class="fas fa-user fa-2x"
                          />
                        </li>
                        <li className="navbar-item">
                          <i
                            style={{ marginLeft: "15px" }}
                            class="fas fa-search fa-2x "
                          />
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
              <div className="row ">
                <nav className="navbar navbar-expand-lg navbar-dark">
                  <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto text-center">
                      <li className="navbar-item">
                        <a href="#" className="nav-link">
                          NEWS
                        </a>
                      </li>
                      <li className="navbar-item">
                        <a href="#" className="nav-link">
                          STORY
                        </a>
                      </li>
                      <li className="navbar-item">
                        <a href="#" className="nav-link">
                          GLOBAL
                        </a>
                      </li>
                      <li className="navbar-item">
                        <a href="#" className="nav-link">
                          INNOVATION
                        </a>
                      </li>
                      <li className="navbar-item">
                        <a href="#" className="nav-link">
                          INSIGHTS
                        </a>
                      </li>
                      <li className="navbar-item">
                        <a href="#" className="nav-link">
                          ENTREPRENEURSHIP
                        </a>
                      </li>
                      <li className="navbar-item">
                        <a href="#" className="nav-link">
                          VIDEOS
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
