import React from "react";
import axios from "axios";
import Sidebar from "../../Component/Sidebar/Sidebar";
// import ShowMore from "react-simple-show-more";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import "./innovation.css";

class Innovation extends React.Component {
  state = {
    visible: 4,
    innovations: []
  };

  loadMore = () => {
    this.setState(prev => {
      return { visible: prev.visible + 3 };
    });
  };

  componentDidMount() {
    axios.get("http://localhost:3001/innovation/data").then(res => {
      let data = res.data;
      this.setState({
        innovations: data
      });
    });
  }
  render() {
    console.log("innovations", this.state.innovations);
    return (
      <div className="innovation top">
        <div className="slidebar">
          <Sidebar />
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-auto ">
              <h2 className="title-innovation">Innovations</h2>
            </div>
            <div
              style={{ paddingTop: "10px", fontSize: "13px" }}
              className="col-auto "
            >
              {/* Tech | Science | Startup Talks | Innovation | Entertainment |
              Enviroment | More */}
            </div>
          </div>
          <hr style={{ border: "1px solid black", marginTop: "-5px" }} />
        </div>

        {this.state.innovations
          .slice(0, this.state.visible)
          .map((news, idi) => (
            <Link key={idi} to={`/news/${news.id}`}>
              <div
                
                style={{ minHeight: "200px" }}
                className="row mb-4 innovation "
              >
                <div
                  style={{
                    maxHeight: "75%",
                    minHeight: "200px",
                    minWidth: "auto",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    // maxWidth:"200px",
                    backgroundImage: `url(http://localhost:3001/image/news/${
                      news.image
                    })`
                  }}
                  className="col-12 col-lg-4 newsimage"
                />

                <div className="col-lg-6 col-12">
                  <h6>{news.heading} </h6>
                  <hr className="newsHR " />
                  <div className="comment more text-justify">
                    {/* <ShowMore
                      text={news.content}
                      length={500}
                      showMoreLabel=" show More"
                      showLessLabel=" Collapse"
                      // tag="a"
                      className="text-blue"
                      ellipsis="..."
                      style={{
                        cursor: "pointer",
                        color: "blue"
                      }}
                      enabled
                    /> */}
                     {news.content.slice(0,550).split("\n")[0]+"..."}
                  </div>

                  <div className="row justify-content-around align-items-end">
                    <div className="col-lg-7 col-12">
                      <small>
                        By{" "}
                        <font style={{ color: "#F54A00" }}>{news.author}</font>{" "}
                        |
                        <Moment format="MMMM-YY" locale="en">
                          {news.date}
                        </Moment>
                      </small>
                    </div>
                    <div className="trending col-lg-3 col-12">
                      {" "}
                      TRENDING:
                      <font style={{ color: "#ffffff", fontSize: "small" }}>
                        {" "}
                        {news.trending}{" "}
                      </font>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 " />
            </Link>
          ))}

        {this.state.visible < this.state.innovations.length && (
          <button
            onClick={this.loadMore}
            type="button"
            className="btn load-more mb-2"
          >
            More
          </button>
        )}
      </div>
    );
  }
}
export default Innovation;
