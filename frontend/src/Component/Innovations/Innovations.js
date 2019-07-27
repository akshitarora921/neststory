import React from "react";
import "../../fontawesome/css/all.css";
import "../b.css";
import "./innovation.css";
import axios from "axios";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "owl.carousel/dist/assets/owl.carousel.css";
// import SingleInnovation from './SingleInnovation'
// import $ from 'jquery'

class Innovation extends React.Component {
  state = {
    innovations: []
  };

  // scroll(direction) {
  //   let far = ($(".image-container").width() / 2) * direction;
  //   let pos = $(".image-container").scrollLeft() + far;
  //   $(".image-container").animate({ scrollLeft: pos }, 1000);
  // }

  componentDidMount() {
    axios
      .get("http://localhost:3001/innovation/data")
      .then(res => {
        let data = res.data;
        this.setState({
          innovations: data
        });
      })
      .catch(res => {
        console.log("innovation axios catch: ", res);
      });
  }

  render() {
    let options = {
      // loop: true,
      margin: 10,
      autoHeight: true,
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
      <div className="innovation">
        <div className="container-fluid">
          <div className="row">
            <div className="col-2.5 ">
              <h2 style={{ color: "#F54A00" }}>Innovation</h2>
            </div>
            <div
              style={{ marginTop: "12px", fontSize: "13px" }}
              className="col "
            >
              Startup | Agritech | Robotics | Medical | Science | Enviroment
            </div>
          </div>
        </div>

        <hr style={{ border: "1px solid black", marginTop: "-5px" }} />
        {this.state.innovations.length > 0 ? (
          <OwlCarousel className="owl-theme" {...options}>
            {this.state.innovations.map((innovation, id) => (
              // <div className="item"><img src={`http://localhost:3001/image/videos/1563367919764_purple.png`}/></div>
              <div key={id} className="item">
                {/* <img
                  alt="not found"
                  src={`http://localhost:3001/image/videos/${
                    video.video_thumbnail
                  }`}
                /> */}
                <div
                  style={{
                    minHeight: "200px",
                    // minWidth:"250px",
                    borderRadius: "20px",
                    backgroundSize: "100% 100%",
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(http://localhost:3001/image/news/${
                      innovation.image
                    })`
                  }}
                >
                  <div
                 
                    className="h6 innovationHeading"
                  >
                    {innovation.heading}
                  </div>
                </div>
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

export default Innovation;
