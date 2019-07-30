import React from "react";
import axios from "axios";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
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
      // loop: true,
      margin: 10,
      video: true,
      // nav:true,
      responsive: {
        0: {
          items: 2
        },
        600: {
          items: 2
        },
        800: {
          items: 3
        },
        1000: {
          items: 4
        }
      }
    };
    console.log("videos:", this.state.videos);
    return (
      <div style={{ paddingTop: "8.6%" }}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-auto ">
              <h2 style={{ color: "#F54A00" }}>Videos</h2>
            </div>
            <div
              style={{ paddingTop: "10px", fontSize: "13px" }}
              className="col-auto "
            >
              Tech | Science | Startup Talks | Innovation | Entertainment |
              Enviroment | More
            </div>
          </div>
          <hr style={{ border: "1px solid black", marginTop: "-5px" }} />

          <div className="row">
            <div className="col-3 mx-auto">
              <div className="category text-center">Medical</div>
            </div>
            <div className="col-9">
              {this.state.videos.length>0?(
              <OwlCarousel className="owl-theme" {...options}>
                {this.state.videos
                  .filter(video => {
                    console.log("decision: ", video.sub_category === "medical");
                    return video.sub_category === "medical";
                  })
                  .map((video, id) => (
                      
                    <div key={id} className="item">
                      <div
                        style={{
                          minHeight: "200px",
                          borderRadius: "20px",
                          backgroundSize: "100% 100%",
                          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(http://localhost:3001/image/news/${
                            video.video_thumbnail
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
              ):("")}            
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Videos;
