import React from "react";
import "../../fontawesome/css/all.css";
import "../b.css";
import axios from "axios";
import SingleInnovation from './SingleInnovation'
import $ from 'jquery'

class Innovation extends React.Component {
  state = {
    innovations: []
  };

  scroll(direction) {
    let far = ($(".image-container").width() / 2) * direction;
    let pos = $(".image-container").scrollLeft() + far;
    $(".image-container").animate({ scrollLeft: pos }, 1000);
  }

  componentDidMount() {
    axios.get("http://localhost:3001/innovation/data").then(res => {
      let data = res.data;
      this.setState({
        innovations: data
      });
    });
  }

  render() {
    const handleClick = () => {
      alert("click");
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
        <div className="container-fluid">
        
              {/* image slider starts */}
          <div className="main">
            <div className="wrapper">
              <a className="prev" onClick={this.scroll.bind(null, -1)}>
                &#10094;
              </a>
              <div className="image-container">
                {/* mydata */}
                {this.state.innovations.map(innovation=>(
                     <div key={innovation.id} className="innovationContainer">
                     <div
                       style={{
                         backgroundImage:
                           `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(http://localhost:3001/image/innovation/${innovation.image})`
                       }}
                       className="row imageThumbnail"
                     >
                       <div className="h6 innovationHeading">{innovation.image_heading}</div>
                     </div>
                   </div>
                ))}
                {/* mydata end */}
                
              </div>
              <a className="next" onClick={this.scroll.bind(null, 1)}>
                &#10095;
              </a>
            </div>
          </div>
          {/* Image slider ends */}







            {/* map function starts */}
            {/* {this.state.innovations.map(innovation => 
            <SingleInnovation url={innovation.image} heading={innovation.heading}/>
            )} */}

            {/* <div
              style={{
                height: "200px",
                width: "200px",
                borderRadius: "20px",
                backgroundImage:
                  "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url('https://www.gstatic.com/webp/gallery3/1.sm.png')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
                marginLeft: "10px"
              }}
              className="col"
            >
              <div
                style={{
                  position: "absolute",
                  bottom: "8px",
                  left: "16px",
                  color: "white"
                }}
                className="h6"
              >
                this.props.caption
              </div>
            </div> */}
            {/* <div
              style={{
                height: "200px",
                width: "200px",
                borderRadius: "20px",
                backgroundImage:
                  "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url('https://www.gstatic.com/webp/gallery3/1.sm.png')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
                marginLeft: "10px"
              }}
              className="col"
            >
              <div
                style={{
                  position: "absolute",
                  bottom: "8px",
                  left: "16px",
                  color: "white"
                }}
                className="h6"
              >
                this.props.caption
              </div>
            </div> */}
            {/* <div
              style={{
                height: "200px",
                width: "200px",
                borderRadius: "20px",
                backgroundImage:
                  "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url('https://www.gstatic.com/webp/gallery3/1.sm.png')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
                marginLeft: "10px"
              }}
              className="col"
            >
              <div
                style={{
                  position: "absolute",
                  bottom: "8px",
                  left: "16px",
                  color: "white"
                }}
                className="h6"
              >
                this.props.caption
              </div> */}
              {/* <i
       style={{ float: "right", marginTop: "20%", color: "white" }}
                className="fas fa-angle-right fa-4x"
                onClick={handleClick}
              /> */}
            {/* </div> */}
          </div>
       
      </div>
    );
  }
}

export default Innovation;
