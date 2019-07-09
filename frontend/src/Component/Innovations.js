import React from "react";
import "../fontawesome/css/all.css";
import "./b.css";

class Innovation extends React.Component {
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
          <div className="row">
            {/* map function starts */}
            <div
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
            </div>
            <div
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
            </div>
            <div
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
            </div>
            <div
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
              <i
                style={{ float: "right", marginTop: "20%", color:'white' }}
                className="fas fa-angle-right fa-4x"
                onClick={handleClick}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Innovation;
