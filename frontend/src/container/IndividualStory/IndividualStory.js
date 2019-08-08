import React from "react";
import axios from "axios";
import Sidebar from "../../Component/Sidebar/Sidebar";
import OwlCarousel from "react-owl-carousel";
// import "owl.carousel/dist/assets/owl.theme.default.css";
// import "owl.carousel/dist/assets/owl.carousel.css";
import "./individualstory.css";

import { Link } from "react-router-dom";
//fix and don't render for every page
// import Header from "../../component/Header/Header";
// import Footer from "../../component/Footer/Footer"

class IndividualStories extends React.Component {
  state = {
    story: [],
    related: []
  };
  async componentDidMount() {
    await axios
      .get(`http://localhost:3001/news/data/${this.props.match.params.id}`) //get data for perticular id
      .then(res => {
        let data = res.data;
        console.log("Data", data.id);
        this.setState({
          story: data
        });
      })
      .catch(res => {
        console.log("individual image axois catch: ", res);
      });
    //async await
    //get realted data
    // let s = this.state.story;
    console.log("request ", this.state.story.tags);
    axios
      .get(`http://localhost:3001/news/data/related/${this.state.story.id}`) //get data for perticular id
      .then(res => {
        let data = res.data;
        this.setState({
          related: data
        });
      });
  }
  render() {
    let options = {
      // loop: true,
      // margin: 10,
      autoHeight: true,
      // nav:true,
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

    // let s = this.state.story;
    // var news_data =  s[0];
    // console.log("news_data ", news_data);

    // console.log("s ",this.state.story.heading);
    // let result = JSON.parse(JSON.stringify(this.state.story))
    // console.log(this.state.story.forEach(element =>{
    //  return(element.id)
    // }))
    return (
      <div className="top">
        {/* <Header /> */}
        {/* <h1>{this.state.story.id}</h1> */}
        {/* {this.state.story.map(story1 => ( */}
        <div>
          <div className="slidebar">
            <Sidebar />
          </div>
          <div className="heading-div">
            <h1 className="heading">{this.state.story.heading}</h1>
          </div>
          <div className="container">
            {/* <OwlCarousel className="owl-theme" margin={10} items={1}> */}
            <div className="item ">
              <div
                style={{
                  minHeight: "400px",
                  // minWidth:"250px",
                  borderRadius: "5px",
                  backgroundPosition: "center",
                  // backgroundSize: " 1000px",
                  backgroundRepeat: "no-repeat",
                  // backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(http://localhost:3001/image/news/${this.state.story.image})`
                  backgroundImage: `url(http://localhost:3001/image/news/${
                    this.state.story.image
                  })`
                }}
              />
            </div>
            {/* </OwlCarousel> */}
            <h6 className="text-justify">{this.state.story.content}</h6>
          </div>
        </div>
        {this.state.related.length > 0 ? (
          <div>
            <h2>Related News</h2>
            <OwlCarousel className="owl-theme" {...options}>
              {this.state.related.map((relatedNews, id) => (
                <a href={`/news/${relatedNews.id}`}>
                  <div key={id} className="item  related-news">
                    <div
                      style={{
                        minHeight: "200px",
                        // maxHeight: "200px",
                        // minWidth:"250px",
                        borderRadius: "20px",
                        backgroundSize: "100% 100%",
                        backgroundRepeat: "no-repeat",
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(http://localhost:3001/image/news/${
                          relatedNews.image
                        })`
                      }}
                    />
                    <div className="h6">
                      {relatedNews.heading.slice(1, 25) + "..."}
                    </div>
                  </div>
                </a>
              ))}
            </OwlCarousel>
          </div>
        ) : (
          ""
        )}
        {/* <Footer/> */}
      </div>
    );
  }
}

export default IndividualStories;
