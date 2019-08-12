import React from "react";
import "./innovation.css";
import axios from "axios";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import {Link} from 'react-router-dom'
class Innovation extends React.Component {
  state = {
    innovations: []
  };
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
        // console.log("innovation axios catch: ", res);
      });
  }

  render() {
    let options = {
      margin: 10,
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
            <Link to="/innovation">
              <h2 style={{ color: "#F54A00" }}>Innovation</h2>
              </Link>
            </div>
            <div
              style={{ marginTop: "12px", fontSize: "13px" }}
              className="col "
            >
              {/* Startup | Agritech | Robotics | Medical | Science | Enviroment */}
            </div>
          </div>
        </div>

        <hr style={{ border: "1px solid black", marginTop: "-5px" }} />
        {this.state.innovations.length > 0 ? (
          <OwlCarousel className="owl-theme" {...options}>
            {this.state.innovations.map((innovation, id) => (
              <Link key={id} to={`/news/${innovation.id}`}>
                <div className="item">
                  <div
                    style={{
                      minHeight: "200px",
                      // minWidth:"250px",
                      borderRadius: "20px",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(http://localhost:3001/image/news/${
                        innovation.image
                      })`
                    }}
                  >
                    <div className="h6 innovationHeading">
                      {innovation.heading.slice(0,70)+"..."}
                    </div>
                  </div>
                </div>
              </Link>
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
