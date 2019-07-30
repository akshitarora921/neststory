import React from "react";
import "../../fontawesome/css/all.css";
// import '../Home.css'
import "../b.css";
import { Link } from "react-router-dom";
import "./lateststories.css";
import Axios from "axios";
import ShowMore from "react-simple-show-more";
import Moment from "react-moment";

class LatestStories extends React.Component {
  state = {
    ls: []
  };

  componentDidMount() {
    Axios.get("http://localhost:3001/lateststories/data")
      .then(res => {
        let data = res.data;
        this.setState({
          ls: data
        });
      })
      .catch(res => {
        console.log("latest stories axios catch:", res);
      });
  }

  render() {
    return (
      <div  className="latest-stories">
        <div className="container-fluid ">
          <div className="row">
            {/* heading */}
            <div className="col-lg-2.5 ro ">
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
          {this.state.ls.slice(0, this.props.last).map((listitem, idi) => (
            <Link to={`/news/${listitem.id}`}>
            <div
              key={idi}
              style={{ minHeight: "200px" }}
              className="row mb-4  "
            >
              <div
                style={{
                  backgroundSize: "cover",
                  maxHeight: "75%",
                  minHeight: "200px",
                  minWidth: "auto",
                  backgroundPosition:"center",
                  // maxWidth:"200px",
                  backgroundImage: `url(http://localhost:3001/image/news/${
                    listitem.image
                  })`
                }}
                className="col-sm-12 col-lg-4 col-md-6 newsimage"
              />

              <div className="col-lg-6 col-md-6  col-sm-12">
                <div className="container ">
                  <div>
                    <h6>{listitem.heading} </h6>
                    <hr className="newsHR " />
                    <div className="comment more text-justify">
                      <ShowMore
                        text={listitem.content}
                        length={500}
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
                  <div className="row justify-content-between">
                    <div className="col-lg-7 col-sm-12">
                      <small>
                        By{" "}
                        <font style={{ color: "#F54A00" }}>
                          {listitem.author}
                        </font>{" "}
                        |
                        <Moment format="MMMM-YY" locale="en">
                          {listitem.date}
                        </Moment>
                       
                      </small>
                    </div>
                    <div className="trending col-lg-3 ">
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
              <div className="col-lg-2 col-sm-12" />
              {/* Advertisement */}
            </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

export default LatestStories;
