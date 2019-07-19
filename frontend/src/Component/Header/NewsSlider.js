import React from "react";
import axios from "axios";
import $ from "jquery";
import "../css/header.css";

class NewsSlider extends React.Component {
  state = {
    newsData: []
  };
  componentDidMount() {
    axios.get("http://localhost:3001/newsheader/data").then(res => {
      let data = res.data;
      this.setState({
        newsData: data
      });
    });
  }
  scrollNews = direction => {
    let far = ($(".news-container").width() / 2) * direction;
    let pos = $(".news-container").scrollLeft() + far;
    $(".news-container").animate({ scrollLeft: pos }, 1000);
  };

  render() {
    return (
      <div className="main mt-1">
        <div className="wrapper">
          <a className="prev" onClick={this.scrollNews.bind(null, -1)}>
            &#10094;
          </a>
          <div className="news-container">
              {/* mapping starts here */}
            {this.state.newsData.map(newData => (
              <div key={newData.id} className="news"><i className="fas fa-circle"></i>{" "}{newData.news}</div>
            ))}
          </div>
          <a className="next" onClick={this.scrollNews.bind(null,1)}>&#10095;</a>
         
        </div>
      </div>
    );
  }
}
export default NewsSlider;
