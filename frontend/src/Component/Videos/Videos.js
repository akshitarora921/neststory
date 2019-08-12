import React from "react";
import "../../fontawesome/css/all.css";
import "./videos.css";
import axios from "axios";
import OwlCarousel from "react-owl-carousel";
import Moment from "react-moment";
import { Link } from "react-router-dom";
class Videos extends React.Component {
  state = {
    videos: []
  };
  // scroll(direction) {
  //   let far = ($(".image-container").width() / 2) * direction;
  //   let pos = $(".image-container").scrollLeft() + far;
  //   $(".image-container").animate({ scrollLeft: pos }, 1000);
  // }

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
    return (
      <div className="Videos">
        <div className="container-fluid">
          <div className="row">
            {/* heading */}
            <div className="col-2.5 ">
              <Link to="/videos" className="nav-link">
                <h2 style={{ color: "#F54A00" }}>Videos</h2>
              </Link>
            </div>
            {/* heading extra text */}
            <div
              style={{ marginTop: "12px", fontSize: "13px" }}
              className="col "
            >
              {/* Tech | Science | Startup Talks | Innovation | Entertainment |
              Enviroment | More */}
            </div>
          </div>
        </div>
        <hr style={{ border: "1px solid black", marginTop: "-5px" }} />
        {this.state.videos.length > 0 ? (
          <OwlCarousel className="owl-theme" {...options}>
            {this.state.videos.slice(0, 10).map((v, id) => (
              <div key={id} className="item">
                <div
                  style={{
                    minHeight: "200px",
                    borderRadius: "20px",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(http://localhost:3001/image/news/${
                      v.image
                    })`
                  }}
                >
                  <i className="far fa-play-circle fa-2x playButton" />
                </div>

                <div className="h6">{v.heading}</div>

                <small className="text-muted author">
                  {v.author} |{" "}
                  <Moment format="MMMM-YY" locale="en">
                    {v.date}
                  </Moment>
                </small>
              </div>
            ))}
          </OwlCarousel>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Videos;
