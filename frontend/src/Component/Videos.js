import React from "react";
import "../fontawesome/css/all.css";
import "../App.css";
class Videos extends React.Component {
  render() {
    return (
      <div className="Videos">
        <div className="container-fluid">
          <div className="row">
            <div className="col-2.5 ">
              <h2 style={{ color: "#F54A00" }}>Videos</h2>
            </div>
            <div
              style={{ marginTop: "12px", fontSize: "13px" }}
              className="col "
            >
              Tech | Science | Startup Talks | Innovation | Entertainment |
              Enviroment | More
            </div>
          </div>
        </div>
        <hr style={{ border: "1px solid black", marginTop: "-5px" }} />
        <div className="container-fluid ">
          <div className="row ">
            {/* mapping of all the videos */}
            <div style={{ marginLeft: "10px" }} className="col ">
              <div
                style={{
                  height: "200px",
                  width: "300px",
                  borderRadius: "20px",
                  backgroundImage:
                    "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url('https://www.gstatic.com/webp/gallery3/1.sm.png')",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "100% 100%"
                }}
                className="row "
              >
                <i
                  style={{
                    color: "#5c5c5c",
                    position: "absolute",
                    top: "40%",
                    left: "45%",
                    transform: "translate(-50%, -50%)"
                  }}
                  class="far fa-play-circle fa-3x"
                />
              </div>
              <div className="row h6">this.props.vidoes.cation</div>
              <div className="row ">
                <small className="text-muted">
                  this.props.auther | this.props.datePublished
                </small>
              </div>
            </div>
            <div style={{ marginLeft: "10px" }} className="col ">
              <div
                style={{
                  height: "200px",
                  width: "300px",
                  borderRadius: "20px",
                  backgroundImage:
                    "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url('https://www.gstatic.com/webp/gallery3/1.sm.png')",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "100% 100%"
                }}
                className="row "
              >
                <i
                  style={{
                    color: "#5c5c5c",
                    position: "absolute",
                    top: "40%",
                    left: "45%",
                    transform: "translate(-50%, -50%)"
                  }}
                  class="far fa-play-circle fa-3x"
                />
              </div>
              <div className="row h6">this.props.vidoes.cation</div>
              <div className="row ">
                <small className="text-muted">
                  this.props.auther | this.props.datePublished
                </small>
              </div>
            </div>
            <div style={{ marginLeft: "10px" }} className="col ">
              <div
                style={{
                  height: "200px",
                  width: "300px",
                  borderRadius: "20px",
                  backgroundImage:
                    "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url('https://www.gstatic.com/webp/gallery3/1.sm.png')",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "100% 100%"
                }}
                className="row "
              >
                <i
                  style={{
                    position: "absolute",
                    top: "40%",
                    left: "45%",
                    transform: "translate(-50%, -50%)",
                    color: "#5c5c5c"
                  }}
                  class="far fa-play-circle fa-3x"
                />
              </div>
              <div className="row h6">this.props.vidoes.cation</div>
              <div className="row ">
                <small className="text-muted ">
                  this.props.auther | this.props.datePublished
                </small>
              </div>
            </div>
            <div style={{ marginLeft: "10px" }} className="col ">
              <div
                style={{
                  height: "200px",
                  width: "300px",
                  borderRadius: "20px",
                  backgroundImage:
                    "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url('https://www.gstatic.com/webp/gallery3/1.sm.png')",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "100% 100%"
                }}
                className="row "
              >
                <i
                  style={{
                    color: "#5c5c5c",
                    position: "absolute",
                    top: "40%",
                    left: "45%",
                    transform: "translate(-50%, -50%)"
                  }}
                  class="far fa-play-circle fa-3x"
                />
              </div>
              <div className="row h6">this.props.vidoes.cation</div>
              <div className="row ">
                <small className="text-muted">
                  this.props.auther | this.props.datePublished
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Videos;
