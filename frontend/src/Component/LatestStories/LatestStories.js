import React from "react";
import "../../fontawesome/css/all.css";
// import '../Home.css'
import "../b.css";
import "../css/lateststories.css";
import Axios from "axios";
import ShowMore from "react-simple-show-more";

class LatestStories extends React.Component {
  state = {
    ls: []
  };

  componentDidMount() {
    Axios.get("http://localhost:3001/lateststories/data").then(res => {
      let data = res.data;
      this.setState({
        ls: data
      });
    });
  }
  render() {
    return (
      <div className="latest-stories ">
        <div className="container-fluid ">
        <div className="row">
            {/* heading */}
            <div className="col-2.5 ">
              <h2 style={{ color: "#F54A00" }}>Latest Stories</h2>
            </div>
            {/* heading extra text */}
            <div
              style={{ marginTop: "12px", fontSize: "13px" }}
              className="col "
            >
              Tech | Science | Startup Talks | Innovation | Entertainment |
              Enviroment | More
            </div>
          </div>
        <hr className="horizontalrule" />
          {/* mapping Starts from Here */}
          {this.state.ls.slice(0, this.props.last).map(listitem => (
            <div key={listitem.id} className="row mb-4">
              <div
                style={{
                  backgroundImage: `url(http://localhost:3001/image/lateststories/${
                    listitem.image
                  })`
                }}
                className="col-4 newsimage"
              />

              <div className="col-lg-6 ">
                <div className="container ">
                  <div className="row ">
                    <h6>{listitem.news_heading} </h6>
                    <hr className="newsHR " />
                    <div className="comment more text-justify">
                      <ShowMore
                        text={listitem.news_content}
                        length={400}
                        showMoreLabel=" show More"
                        showLessLabel=" Collapse"
                        tag="a"
                        className="text-blue"
                        ellipsis="..."
                        style={{
                          cursor: "pointer",
                          color: "blue"
                        }}
                        enabled
                      />
                    </div>
                  </div>
                  <div className="row ">
                    <div style={{ marginLeft: "-15px" }} className="col">
                      <small>
                        By{" "}
                        <font style={{ color: "#F54A00" }}>
                          {listitem.author}
                        </font>{" "}
                        | {listitem.date_of_publish} | props.comment.length
                        Comments
                      </small>
                      <div className="trending">
                        {" "}
                        TRENDING:
                        <font style={{ color: "#ffffff", fontSize: "small" }}>
                          {" "}
                          {listitem.trending}{" "}
                        </font>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-2" />
              {/* Advertisement */}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default LatestStories;
