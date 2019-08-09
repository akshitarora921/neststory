import React from "react";
// import "../../fontawesome/css/all.css";
// import '../Home.css'
import "../b.css";
import { Link } from "react-router-dom";
import "./lateststories.css";
import Axios from "axios";
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
      <div className="latest-stories">
        <div className="container-fluid ">
          <div className="row">
            {/* heading */}
            <div className="col-lg-2.5  ">
              <Link to="/stories/">
                <h2 style={{ color: "#F54A00" }}>Latest Stories</h2>
              </Link>
            </div>
            {/* heading extra text */}
            <div
              style={{ marginTop: "12px", fontSize: "1.3vw" }}
              className="col "
            >
              {/* Tech | Science | Startup Talks | Innovation | Entertainment |
              Enviroment | More */}
            </div>
          </div>
          <hr className="horizontalrule" />
          {/* mapping Starts from Here */}
          {this.state.ls.slice(0, this.props.last).map((listitem, idi) => (
            <Link key={idi} to={`/news/${listitem.id}`}>
              <div style={{ minHeight: "200px" }} className="row mb-4  ">
                <div
                  style={{
                    // maxHeight: "75%",
                    minHeight: "200px",
                    maxHeight: "220px",
                    minWidth: "auto",
                    // maxWidth:"200px",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundImage: `url(http://localhost:3001/image/news/${
                      listitem.image
                    })`
                  }}
                  className="col-12 col-lg-4  newsimage"
                />

                <div className="col-lg-6 col-12 mx-2">
                  <div className="row">
                    <h6>{listitem.heading} </h6>
                    <hr className="newsHR" />
                    <div className="comment text-justify">
                      {/* <ShowMore
                        text={listitem.content}
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
                      {/* {listitem.content.slice(0,550).split("\n").map((para, id) => (
                        <p key={id} >
                          {para}
                        </p>
                      ))
                      } */}
                      {listitem.content.slice(0,550).split("\n")[0]+"..."}
                    </div>
                  </div>
                  <div className="row justify-content-between">
                    <div className="col-lg-7 col-12">
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
                    {listitem.trending.length > 0 ? (
                      <div className="trending col-lg-3 col-12">
                        {" "}
                        TRENDING:
                        <font style={{ color: "#ffffff", fontSize: "small" }}>
                          {" "}
                          {listitem.trending}{" "}
                        </font>
                      </div>
                    ) : (
                      ""
                    )}
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
