import React from "react";
import axios from "axios";
// import $ from "jquery";
import "./header.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

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
  // scrollNews = direction => {
  //   let far = ($(".news-container").width() / 2) * direction;
  //   let pos = $(".news-container").scrollLeft() + far;
  //   $(".news-container").animate({ scrollLeft: pos }, 1000);
  // };

  render() {
    let options = {
      loop: true,
      // autoplaySpeed:1,
      // margin: 10,
      dots: false,
      autoplay: true,
      // nav:true,
      items: 1
    };
    return (
      <div className="main">
        {/* <div className="wrapper">
          <a className="prev" onClick={this.scrollNews.bind(null, -1)}>
            &#10094;
          </a>
          <div className="news-container">
              
            {this.state.newsData.map(newData => (
              <div key={newData.id} className="news"><i className="fas fa-circle"></i>{" "}{newData.news}</div>
            ))}
          </div>
          <a className="next" onClick={this.scrollNews.bind(null,1)}>&#10095;</a>
         
        </div> */}

        {this.state.newsData.length > 0 ? (
          <OwlCarousel className="owl-theme" {...options}>
            {this.state.newsData
            .map((newData, id) => (
              <div key={id} className="item">
                {newData.heading.slice(0,45)+"..."}
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
