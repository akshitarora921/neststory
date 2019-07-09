import React from "react";
import "../fontawesome/css/all.css";
import "../App.css";
import "./b.css";

class Entrepreneurship extends React.Component {
  render() {
    return (
      <div className="entrepreneurship ">
        <h2 style={{ color: "#F54A00" }}>Entrepreneurship</h2>
        <hr style={{ border: "1px solid black", marginTop: "-5px" }} />
        <div class="container-fluid ">
          <div className="row ">
            <div style={{ border: "5px solid white" }} className="col-4 ">
              <div className="row ">
                <div
                  style={{ border: "5px solid white" }}
                  style={{
                    height: "200px",
                    width: "200px",
                    backgroundImage:
                      "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url('https://www.gstatic.com/webp/gallery3/1.sm.png')",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100% 100%"
                  }}
                  className="col"
                />
              </div>
              <div className="row ">
                <h4>Heading</h4>
              </div>
              <div className="row">
                <small>Some random text for the image</small>
              </div>
            </div>
            <div
              style={{ border: "5px solid white", marginTop: "-5px" }}
              className="col-8 "
            >
              <div style={{ border: "5px solid white" }} className="row ">
                <div
                  style={{
                    height: "200px",
                    width: "200px",
                    backgroundImage:
                      "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url('https://www.gstatic.com/webp/gallery3/1.sm.png')",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100% 100%"
                  }}
                  className="col-4 "
                />
                <div style={{ marginLeft: "15px" }} className="col ">
                  <div className="row ">
                    <h4>Heading</h4>
                  </div>
                  <div className="row">
                    <small>Some random text for the image</small>
                  </div>
                </div>
              </div>
              <div style={{ border: "5px solid white" }} className="row ">
                <div
                  style={{
                    height: "200px",
                    width: "200px",
                    backgroundImage:
                      "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url('https://www.gstatic.com/webp/gallery3/1.sm.png')",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100% 100%"
                  }}
                  className="col-4 "
                />
                <div style={{ marginLeft: "15px" }} className="col ">
                  <div className="row ">
                    <h4>Heading</h4>
                  </div>
                  <div className="row">
                    <small>Some random text for the image</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Entrepreneurship;
