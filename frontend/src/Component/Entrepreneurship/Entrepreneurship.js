import React from "react";
import axios from "axios";
import "./entrepreneurship.css";
import {Link} from 'react-router-dom'

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
        // console.log("Erroorrr==========>", err);
      });
  }
  render() {
    return (
      <div className="entrepreneurship ">
        <Link to="/entrepreneurship">
        <h2 style={{ color: "#F54A00" }}>Entrepreneurship</h2>
        </Link>
        <hr style={{ border: "1px solid black", marginTop: "-5px" }} />
        <div className="container-fluid ">
          <div className="row ">
            <div
              style={{ border: "5px solid white" }}
              className="col-lg-4 col-12"
            >
              {this.state.entpdata.slice(0, 1).map((entp, id) => (
                <Link key={id} to={`/news/${entp.id}`}>
                  <div className="row ">
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
                  <small>{entp.content.slice(0,550).split("\n")[0]}...</small>
                    {/* <small>{entp.content.slice(0,750).split("\n").map((para, id) => (
                        <p key={id} >
                          {para}
                        </p>
                      ))}</small> */}
                  </div>
                </Link>
              ))}
            </div>
            <div
              style={{ border: "5px solid white", marginTop: "-5px" }}
              className="col-lg-8  col-12"
            >
              {this.state.entpdata.slice(1, 4).map((entp, id) => (
                <Link  key={id} to={`/news/${entp.id}`}>
                  <div
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
                        {/* <small>{entp.content}</small> */}
                        <small>{entp.content.slice(0,750).split("\n")[0]}...</small>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Entrepreneurship;
