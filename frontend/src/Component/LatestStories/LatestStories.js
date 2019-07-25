import React from "react";
import "../../fontawesome/css/all.css";
// import '../Home.css'
import "../b.css";
import "../css/lateststories.css";
import Axios from "axios";
import ShowMore from "react-simple-show-more";
import Moment from 'react-moment';

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
            <div key={listitem.id} 
            style={{minHeight:"200px"}}
            className="row mb-4  ">
              <div
                style={{
                  backgroundSize: "100% 100%",
                  maxHeight:"250px",
                  minHeight:"250px",
                  backgroundImage: `url(http://localhost:3001/image/lateststories/${
                    listitem.image
                  })`
                }}
                className="col-sm-12 col-lg-4 col-md-6 newsimage"
              />

              <div className="col-lg-6 col-md-6  col-sm-12">
                <div className="container ">
                  <div >
                    <h6>{listitem.news_heading} </h6>
                    <hr className="newsHR " />
                    <div className="comment more text-justify">
                      <ShowMore
                        text={listitem.news_content}
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
                        |<Moment format='MMMM-YY' locale="en">{listitem.publish_date}</Moment>| length
                        Comments
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
          ))}
        </div>
      </div>
    );
  }
}

export default LatestStories;
