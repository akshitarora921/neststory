import React from "react";
import axios from "axios";
import "../../fontawesome/css/all.css";
import "./entrepreneurship.css";

class Entrepreneurship extends React.Component {
  state = {
    entpdata: []
  };
  componentDidMount() {
    axios
      .get("http://localhost:3001/entrepreneurship/data")
      .then(res => {
        let data = res.data;
        this.setState({
          entpdata: data
        });
      })
      .catch(err => {
        console.log("Erroorrr==========>", err);
      });
  }
  render() {
    return (
      <div className="entrepreneurship ">
        <h2 style={{ color: "#F54A00" }}>Entrepreneurship</h2>
        <hr style={{ border: "1px solid black", marginTop: "-5px" }} />
        <div className="container-fluid ">
          <div className="row ">
            <div
              style={{ border: "5px solid white" }}
              className="col-lg-4 col-12"
            >
              {this.state.entpdata.slice(0, 1).map((entp, id) => (
                <a href={`/news/${entp.id}`}>
                  <div key={id} className="row ">
                    <div
                      style={{
                        border: "5px solid white",
                        height: "200px",
                        width: "200px",
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(http://localhost:3001/image/news/${
                          entp.image
                        })`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                      }}
                      className="col-lg-12  col-12"
                    />
                  </div>
                  <div className="row ">
                    <h4>{entp.heading}</h4>
                  </div>
                  <div className="row text-justify ">
                    <small>{entp.content}</small>
                  </div>
                </a>
              ))}
            </div>
            <div
              style={{ border: "5px solid white", marginTop: "-5px" }}
              className="col-lg-8  col-12"
            >
              {this.state.entpdata.slice(1, 4).map((entp, id) => (
                <a href={`/news/${entp.id}`}>
                  <div
                    key={id}
                    style={{ border: "5px solid white" }}
                    className="row "
                  >
                    <div
                      style={{
                        height: "200px",
                        width: "200px",
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(http://localhost:3001/image/news/${
                          entp.image
                        })`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                      }}
                      className="col-lg-4 col-12"
                    />
                    <div className="col">
                      <div className="row ">
                        <h4 className="enp-content">{entp.heading}</h4>
                      </div>
                      <div className="row text-justify enp-content">
                        <small>{entp.content}</small>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
              {/* <div style={{ border: "5px solid white" }} className="row ">
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
              </div> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Entrepreneurship;
