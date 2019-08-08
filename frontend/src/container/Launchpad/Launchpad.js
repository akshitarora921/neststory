import React from "react";
import axios from "axios";
import Moment from "react-moment";
import Sidebar from "../../Component/Sidebar/Sidebar";
import "./launchpad.css";
class Launchpad extends React.Component {
  state = {
    launchpad: [],
    mentor: [],
    today:""
  };

  componentDidMount() {
    axios
      .get("http://localhost:3001/launchpad")
      .then(res => {
        let data = res.data;
        this.setState({
          launchpad: data
        });
        axios
          .get(`http://localhost:3001/mentor/${data[0].launchpad_id}`)
          .then(res => {
            let data = res.data;
            this.setState({
              mentor: data
            });
          })
          .catch(err => {
            console.log("axios error launchpad: ", err);
          });
      })
      .catch(err => {
        console.log("axios error launchpad: ", err);
      });
  }
  componentWillMount(){
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1; //gives last months so we have to add 1
    let yyyy = today.getFullYear();
    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;
    let t = `${yyyy}-${mm}-${dd}`;
    this.setState({
      today:t
    })
  }
  render() {
    
    return (
      <div className="top">
        {/* {alert(todayDate)} */}
        <div className="slidebar">
          <Sidebar />
        </div>
        {this.state.launchpad.map(lp => (
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
                      <div className="col-lg-auto col-12 text-center">
                        <div className="circle mx-auto">
                          <i className="fas fa-rocket fa-4x icon" />
                        </div>
                        <br />
                        <h5>Launchpad</h5>
                      </div>
                      <div className="col-lg-auto col-12 text-center">
                        <div className="circle mx-auto">
                          <i class="fab fa-studiovinari fa-4x icon" />
                        </div>
                        <br />
                        <h5>Studio</h5>
                      </div>
                      <div className="col-lg-auto col-12 text-center">
                        <div className="circle mx-auto">
                          <i class="fas fa-couch fa-4x icon" />
                        </div>
                        <br />
                        <h5>Event</h5>
                      </div>
                      <div className="col-lg-auto col-12 text-center">
                        <div
                          className="circle mx-auto"
                          style={{
                            backgroundColor: "white"
                          }}
                        >
                          <i className="fas fa-bullseye fa-4x icon" />
                        </div>
                        <br />
                        <h5>Competition</h5>
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
                  <div className="col-lg-2 col-1" />
                  <div className="col-lg-8 col-12 text-center">
                    A global launchpad program that helps entrepreneurs build
                    and scale great ideas by guiding them with the best of Fame
                    Technology - its people, network, and advanced technologies
                  </div>
                  <div className="col-lg-2 col-1" />
                </div>
                <div className="row justify-content-center ">
                  <div className="col-lg-12 col-12 px-1">
                    <div id="launchpad">Launchpad</div>
                  </div>
                  <div className="col-lg-12 col-12 px-1">
                    <div id="accelerator">{lp.heading}</div>
                  </div>
                  <div className="col-lg-12 col-12 px-1">
                    <div id="fame">Powered by Fame Technology</div>
                  </div>
                  <div className="col-lg-12 col-12 px-1">
                    <div id="launchpad-date">
                      <Moment diff={this.state.today} unit="days" locale="en">
                        {lp.date}
                      </Moment>
                      {" "}Days to Go
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row part2">
              <div className="col-lg-12 col-12">
                <div className="row pt-3">
                  <div className="col-lg-8 col-12">
                    <div className="row">
                      <div className="col-12 lp-heading">{lp.heading}</div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <p className="text-justify">{lp.content}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-12">
                    <div
                      className="p-2 col-4 launchpad-video"
                      style={{
                        minHeight: "200px",
                        minWidth: "300px",
                        borderRadius: "15px",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundImage: `url(http://localhost:3001/image/news/${
                          lp.video_thumbnail
                        })`
                      }}
                    >
                      <i className="far fa-play-circle fa-2x playButton" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <h2 className="text-center mentor-heading">Mentors</h2>
                  </div>
                </div>
                <div className="row justify-content-center ">
                  {this.state.mentor.map((ment, id) => (
                    <div className="col-lg-4 col-12">
                      <div
                        className="mentor-img"
                        style={{
                          backgroundPosition: "center",
                          backgroundSize: "cover",
                          backgroundImage: `url(http://localhost:3001/image/news/${
                            ment.image
                          })`
                        }}
                      />
                      <div className="rect mx-auto">
                        <div
                          style={{
                            paddingTop: "65%"
                          }}
                          className="row"
                        >
                          <div className="col-lg-12 col-12 detail text-center">
                            <p>{ment.name}</p>
                          </div>

                          <div className="col-lg-12 col-12 detail text-center ">
                            <h6>{ment.designation}</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <br />
                {/* 2mentors */}
                {/* <div className="row p-2">
                  <div className="col-lg-2" />
                  <div className="col-lg-4 col-sm-12">
                    <div className="mentor-img" />
                    <div className="rect row justify-content-between">
                      <div className="col-4 detail">
                        <p>Christian Yan</p>
                      </div>
                      <div className="col-4 text-right detail">
                        <p>
                          Co-Founder & COO Aurora - Smart LED Lighting System
                        </p>
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
                        <p>
                          Co-Founder & COO Aurora - Smart LED Lighting System
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row p-2">
                  <div className="col-lg-4 col-sm-12">
                    <div className="mentor-img" />
                    <div className="rect row justify-content-between">
                      <div className="col-4 detail">
                        <p>Christian Yan</p>
                      </div>
                      <div className="col-4 text-right detail">
                        <p>
                          Co-Founder & COO Aurora - Smart LED Lighting System
                        </p>
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
                        <p>
                          Co-Founder & COO Aurora - Smart LED Lighting System
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2" />
                </div> */}

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
        ))}
      </div>
    );
  }
}

export default Launchpad;
