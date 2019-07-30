import React from "react";
import "./launchpad.css";
class Launchpad extends React.Component {
  render() {
    return (
      <div style={{ paddingTop: "8.6%" }}>
        <div className="container-fluid">
          <div className="row part1">
            <div className="col">
              <div
                className="row"
                style={{
                  paddingTop: "5%"
                }}
              >
                <div className="col">
                  <div className="row justify-content-center">
                    <div className="col-lg-auto col-sm-12 text-center">
                      <div
                        className="circle mx-auto"
                        style={{
                          backgroundColor: "red"
                        }}
                      />
                      <br />
                      <h5>Heading 1</h5>
                    </div>
                    <div className="col-lg-auto col-sm-12 text-center">
                      <div
                        className="circle mx-auto"
                        style={{
                          backgroundColor: "red"
                        }}
                      />
                      <br />
                      <h5>Heading 2</h5>
                    </div>
                    <div className="col-lg-auto col-sm-12 text-center">
                      <div
                        className="circle mx-auto"
                        style={{
                          backgroundColor: "red"
                        }}
                      />
                      <br />
                      <h5>Heading 3</h5>
                    </div>
                    <div className="col-lg-auto col-sm-12 text-center">
                      <div
                        className="circle mx-auto"
                        style={{
                          backgroundColor: "red"
                        }}
                      />
                      <br />
                      <h5>Heading 4</h5>
                    </div>
                  </div>
                  {/* padding 20%
                  one row for icons and on erow for heading */}
                </div>
              </div>
              <div
                className="row justify-content-center"
                style={{
                  paddingTop: "2%"
                }}
              >
                <div className="col-2" />
                <div className="col-6 text-center">
                  A global launchpad program that helps entrepreneurs build and
                  scale great ideas by guiding them with the best of Fame
                  Technology - its people, network, and advanced technologies
                </div>
                <div className="col-2" />
              </div>
              <div className="row">
                <div className="col-lg-auto">
                  <div id="launchpad">Launchpad</div>
                </div>
                <div className="col-lg-auto">
                  <div id="accelerator">Accelerator</div>
                </div>
                <div className="col-lg-auto">
                  <div id="fame">Powered by <br/>Fame Technology</div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="row part2"
          >
            <div className="col">
              <div className="row pt-3">
                <div className="col-lg-8">
                  <div className="row">
                    <div
                      className="col"
                      style={{ fontSize: "6vw", fontWeight: "bold" }}
                    >
                      Heading
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <p className="text-justify">
                        Launchpad regional accelerators are tailored
                        specifically to their local markets, and provide access
                        to the best of Google - its people, network, and
                        advanced technologies - helping startups build great
                        products. In addition to our accelerators, Launchpad
                        regional initiatives include exclusive events,
                        mentorship opportunities, and trainings. Keep an eye out
                        for opportunities to participate in over 40 countries
                        around the world.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div
                    className="p-2"
                    style={{
                      height: "200px",
                      width: "auto",
                      borderRadius: "15px",
                      backgroundColor: "lightcoral"
                    }}
                  >
                    <img />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <h2
                    className="text-center"
                    style={{
                      fontSize: "4vw",
                      fontWeight: "bold",
                      color: "white"
                    }}
                  >
                    Mentors
                  </h2>
                </div>
              </div>
              {/* 2mentors */}
              <div className="row p-2 ">
                <div className="col-lg-4 col-sm-12">
                  <div className="mentor-img" />
                  <div className="rect row justify-content-between">
                    <div className="col-4 detail">
                      <p>Christian Yan</p>
                    </div>
                    <div className="col-4 text-right detail">
                      <p>Co-Founder & COO Aurora - Smart LED Lighting System</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-sm-12" />
                <div className="col-lg-4 col-sm-12">
                  <div className="mentor-img" />
                  <div className="rect row justify-content-between">
                    <div className="col-4 detail">
                      <p>Christian Yan</p>
                    </div>
                    <div className="col-4 text-right detail">
                      <p>Co-Founder & COO Aurora - Smart LED Lighting System</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-sm-12" />
              </div>
              <br />
              {/* 2mentors */}
              <div className="row p-2">
                <div className="col-lg-2" />
                <div className="col-lg-4 col-sm-12">
                  <div className="mentor-img" />
                  <div className="rect row justify-content-between">
                    <div className="col-4 detail">
                      <p>Christian Yan</p>
                    </div>
                    <div className="col-4 text-right detail">
                      <p>Co-Founder & COO Aurora - Smart LED Lighting System</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2" />
                <div className="col-lg-4 col-sm-12">
                  <div className="mentor-img" />
                  <div className="rect row justify-content-between">
                    <div className="col-4 detail">
                      <p>Christian Yan</p>
                    </div>
                    <div className="col-4 text-right detail">
                      <p>Co-Founder & COO Aurora - Smart LED Lighting System</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row justify-content-center footer-back">
                <div className="col-auto">
                  <div className="footer-navheads">Ideas</div>
                </div>
                <div className="col-auto">
                  <div className="footer-navheads">Startups</div>
                </div>
                <div className="col-auto">
                  <div className="footer-navheads">Investors</div>
                </div>
                <div className="col-auto">
                  <div className="footer-navheads">Business</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Launchpad;
