import React from "react";
import axios from "axios";
import Sidebar from "../../Component/Sidebar/Sidebar";
import OwlCarousel from "react-owl-carousel";
import Moment from "react-moment";
import "./videos.css";

class Videos extends React.Component {
  state = {
    videos: []
  };
  componentDidMount() {
    axios.get("http://localhost:3001/videos/data").then(res => {
      let data = res.data;
      this.setState({
        videos: data
      });
    });
  }
  render() {
    let options = {
      margin: 10,
      video: true,
      responsive: {
        0: {
          items: 2
        },
        600: {
          items: 1
        },
        800: {
          items: 2
        },
        1000: {
          items: 4
        }
      }
    };
    return (
      <div className="top">
        <div className="slidebar">
          <Sidebar />
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-auto ">
              <h2 className="title-video">Videos</h2>
            </div>
            <div
              style={{ paddingTop: "10px", fontSize: "13px" }}
              className="col-auto "
            >
              {/* Tech | Science | Startup Talks | Innovation | Entertainment |
              Enviroment | More */}
            </div>
          </div>
          <hr style={{ border: "1px solid black", marginTop: "-5px" }} />

          {/* startup Category */}
          {this.state.videos.filter(video => video.sub_category === "startup")
            .length > 0 ? (
            <div className="row">
              <div className="col-lg-3 col-12 mx-auto">
                <div className="category text-center">Startup</div>
              </div>
              <div className="col-lg-9 col-12">
                {this.state.videos.length > 0 ? (
                  <OwlCarousel className="owl-theme" {...options}>
                    {this.state.videos
                      .filter(video => video.sub_category === "startup")
                      .map((video, id) => (
                        <div key={id} className="item">
                          <div
                            style={{
                              minHeight: "200px",
                              borderRadius: "20px",
                              backgroundSize: "cover",
                              backgroundPosition: "center",
                              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(http://localhost:3001/image/news/${
                                video.image
                              })`
                            }}
                          >
                            <i className="far fa-play-circle fa-2x playButton" />
                          </div>

                          <div className="h6">{video.heading}</div>

                          <small className="text-muted author">
                            {video.author} |{" "}
                            <Moment format="MMMM-YY" locale="en">
                              {video.date}
                            </Moment>
                          </small>
                        </div>
                      ))}
                  </OwlCarousel>
                ) : (
                  ""
                )}
              </div>
            </div>
          ) : (
            ""
          )}
          {/* agritech Category */}
          {this.state.videos.filter(video => video.sub_category === "agritech")
            .length > 0 ? (
            <div className="row">
              <div className="col-lg-3 col-12 mx-auto">
                <div className="category text-center">AgriTech</div>
              </div>
              <div className="col-lg-9 col-12">
                {this.state.videos.length > 0 ? (
                  <OwlCarousel className="owl-theme" {...options}>
                    {this.state.videos
                      .filter(video => video.sub_category === "agritech")
                      .map((video, id) => (
                        <div key={id} className="item">
                          <div
                            style={{
                              minHeight: "200px",
                              borderRadius: "20px",
                              backgroundSize: "cover",
                              backgroundPosition: "center",
                              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(http://localhost:3001/image/news/${
                                video.image
                              })`
                            }}
                          >
                            <i className="far fa-play-circle fa-2x playButton" />
                          </div>
                          <div className="h6">{video.heading}</div>
                          <small className="text-muted author">
                            {video.author} |{" "}
                            <Moment format="MMMM-YY" locale="en">
                              {video.date}
                            </Moment>
                          </small>
                        </div>
                      ))}
                  </OwlCarousel>
                ) : (
                  ""
                )}
              </div>
            </div>
          ) : (
            ""
          )}
          {/* Robotics Category */}
          {this.state.videos.filter(video => video.sub_category === "robotics")
            .length > 0 ? (
            <div className="row">
              <div className="col-lg-3 col-12 mx-auto">
                <div className="category text-center">Robotics</div>
              </div>
              <div className="col-lg-9 col-12">
                {this.state.videos.length > 0 ? (
                  <OwlCarousel className="owl-theme" {...options}>
                    {this.state.videos
                      .filter(video => video.sub_category === "robotics")
                      .map((video, id) => (
                        <div key={id} className="item">
                          <div
                            style={{
                              minHeight: "200px",
                              borderRadius: "20px",
                              backgroundSize: "cover",
                              backgroundPosition: "center",
                              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(http://localhost:3001/image/news/${
                                video.image
                              })`
                            }}
                          >
                            <i className="far fa-play-circle fa-2x playButton" />
                          </div>

                          <div className="h6">{video.heading}</div>

                          <small className="text-muted author">
                            {video.author} |{" "}
                            <Moment format="MMMM-YY" locale="en">
                              {video.date}
                            </Moment>
                          </small>
                        </div>
                      ))}
                  </OwlCarousel>
                ) : (
                  ""
                )}
              </div>
            </div>
          ) : (
            ""
          )}
          {/* Medical Category */}
          {this.state.videos.filter(video => video.sub_category === "medical")
            .length > 0 ? (
            <div className="row">
              <div className="col-lg-3 col-12 mx-auto">
                <div className="category text-center">Medical</div>
              </div>
              <div className="col-lg-9 col-12">
                {this.state.videos.length > 0 ? (
                  <OwlCarousel className="owl-theme" {...options}>
                    {this.state.videos
                      .filter(video => video.sub_category === "medical")
                      .map((video, id) => (
                        <div key={id} className="item">
                          <div
                            style={{
                              minHeight: "200px",
                              borderRadius: "20px",
                              backgroundSize: "cover",
                              backgroundPosition: "center",
                              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(http://localhost:3001/image/news/${
                                video.image
                              })`
                            }}
                          >
                            <i className="far fa-play-circle fa-2x playButton" />
                          </div>

                          <div className="h6">{video.heading}</div>

                          <small className="text-muted author">
                            {video.author} |{" "}
                            <Moment format="MMMM-YY" locale="en">
                              {video.date}
                            </Moment>
                          </small>
                        </div>
                      ))}
                  </OwlCarousel>
                ) : (
                  ""
                )}
              </div>
            </div>
          ) : (
            ""
          )}
          {/* Science Caegory */}
          {this.state.videos.filter(video => video.sub_category === "science")
            .length > 0 ? (
            <div className="row">
              <div className="col-lg-3 col-12 mx-auto">
                <div className="category text-center">Science</div>
              </div>
              <div className="col-lg-9 col-12">
                {this.state.videos.length > 0 ? (
                  <OwlCarousel className="owl-theme" {...options}>
                    {this.state.videos
                      .filter(video => video.sub_category === "science")
                      .map((video, id) => (
                        <div key={id} className="item">
                          <div
                            style={{
                              minHeight: "200px",
                              borderRadius: "20px",
                              backgroundSize: "cover",
                              backgroundPosition: "center",
                              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(http://localhost:3001/image/news/${
                                video.image
                              })`
                            }}
                          >
                            <i className="far fa-play-circle fa-2x playButton" />
                          </div>

                          <div className="h6">{video.heading}</div>

                          <small className="text-muted author">
                            {video.author} |{" "}
                            <Moment format="MMMM-YY" locale="en">
                              {video.date}
                            </Moment>
                          </small>
                        </div>
                      ))}
                  </OwlCarousel>
                ) : (
                  ""
                )}
              </div>
            </div>
          ) : (
            ""
          )}
          {/* Enviroment Category */}
          {this.state.videos.filter(
            video => video.sub_category === "enviroment"
          ).length > 0 ? (
            <div className="row">
              <div className="col-lg-3 col-12 mx-auto">
                <div className="category text-center">Enviroment</div>
              </div>
              <div className="col-lg-9 col-12">
                {this.state.videos.length > 0 ? (
                  <OwlCarousel className="owl-theme" {...options}>
                    {this.state.videos
                      .filter(video => video.sub_category === "enviroment")
                      .map((video, id) => (
                        <div key={id} className="item">
                          <div
                            style={{
                              minHeight: "200px",
                              borderRadius: "20px",
                              backgroundSize: "cover",
                              backgroundPosition: "center",
                              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(http://localhost:3001/image/news/${
                                video.image
                              })`
                            }}
                          >
                            <i className="far fa-play-circle fa-2x playButton" />
                          </div>

                          <div className="h6">{video.heading}</div>

                          <small className="text-muted author">
                            {video.author} |{" "}
                            <Moment format="MMMM-YY" locale="en">
                              {video.date}
                            </Moment>
                          </small>
                        </div>
                      ))}
                  </OwlCarousel>
                ) : (
                  ""
                )}
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

export default Videos;
