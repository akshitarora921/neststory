import React from "react";
import axios from "axios";
import "./header.css";
import OwlCarousel from "react-owl-carousel";

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

  render() {
    let options = {
      loop: true,
      dots: false,
      autoplay: true,
      items: 1
    };
    return (
      <div className="main">
        {this.state.newsData.length > 0 ? (
          <OwlCarousel className="owl-theme" {...options}>
            {this.state.newsData
            .map((newData, id) => (
              <div key={id}
              style={{height:"25px"}} className="item">
                {newData.heading}
              </div>
            ))}
          </OwlCarousel>
        ) : (
          ""
        )}
      </div>
    );
  }
}
export default NewsSlider;
