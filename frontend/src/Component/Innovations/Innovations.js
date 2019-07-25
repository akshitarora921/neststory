import React from "react";
import "../../fontawesome/css/all.css";
import "../b.css";
import "../css/innovation.css"
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
    axios.get("http://localhost:3001/innovation/data").then(res => {
      let data = res.data;
      this.setState({
        innovations: data
      });
    });
  }

  render() {
    let options = {
      // loop: true,
      margin: 10,
      // nav:true,
      responsive: {
        0: {
          items: 2
        },
        600: {
          items: 3
        },
        800: {
          items: 4
        },
        1000: {
          items: 5
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
                  minHeight:"150px",
                  borderRadius:"20px",
                  backgroundSize: "100% 100%",
                        backgroundImage:
                          `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(http://localhost:3001/image/innovation/${innovation.image})`
                      }}>
                        
                      <div className="h6 innovationHeading">{innovation.image_heading}</div>
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
{/* <div className="container-fluid">
{/* image slider starts 
<div className="main">
  <div className="wrapper">
    <a className="prev" onClick={this.scroll.bind(null, -1)}>
      &#10094;
    </a>
    <div className="image-container">
      {/* mydata 
      {this.state.innovations.map(innovation => (
        <div key={innovation.id} className="innovationContainer">
          <div
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(http://localhost:3001/image/innovation/${
                innovation.image
              })`
            }}
            className="row imageThumbnail"
          >
            <div className="h6 innovationHeading">
              {innovation.image_heading}
            </div>
          </div>
        </div>
      ))}
      {/* mydata end 
    </div>
    <a className="next" onClick={this.scroll.bind(null, 1)}>
      &#10095;
    </a>
  </div>
</div>
{/* Image slider ends 
</div> */}