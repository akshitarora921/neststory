import React from "react";
import axios from "axios";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import Sidebar from "../../component/Sidebar/Sidebar";
import "./individualstory.css";
//fix and don't render for every page
// import Header from "../../component/Header/Header";
// import Footer from "../../component/Footer/Footer"

class IndividualStories extends React.Component {
  state = {
    story: {},
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
      }).catch(res=>{
        console.log("individual image axois catch: ", res)
      })
    //async await
    //get realted data
    // let s = this.state.story;
    console.log("resqurest ", this.state.story.tags)
    axios
      .get(`http://localhost:3001/news/data/related/${this.state.story.id}`) //get data for perticular id
      .then(res => {
        let data =  res.data;
        this.setState({
          related: data
        });
      });
  }
  render() {
    let options = {
      // loop: true,
      margin: 10,
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
      <div style={{ paddingTop: "8.5%" }}>
        {/* <Header /> */}
        <Sidebar />
        {/* <h1>{this.state.story.id}</h1> */}
        {/* {this.state.story.map(story1 => ( */}
          <div>
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
                      backcgroundRepeat: "no-repeat",
                      // backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(http://localhost:3001/image/news/${this.state.story.image})`
                      backgroundImage: `url(http://localhost:3001/image/news/${this.state.story.image})`
                    }}
                  />
                </div>
              {/* </OwlCarousel> */}
              <h5>{this.state.story.content}</h5>
            </div>
          </div>
         <h2>Related News</h2>           
        {this.state.related.length > 0 ? (
          <OwlCarousel className="owl-theme" {...options}>
            {this.state.related.map((relatedNews, id) => (
              <div key={id} className="item p-2">
                <div
                  style={{
                    minHeight: "200px",
                    // minWidth:"250px",
                    borderRadius: "20px",
                    backgroundSize: "100% 100%",
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(http://localhost:3001/image/news/${
                      relatedNews.image
                    })`
                  }}
                />
                <div className="h6 ">{relatedNews.heading}</div>
              </div>
            ))}
          </OwlCarousel>
        ) : (
          ""
        )}
        {/* <Footer/> */}
      </div>
    );
  }
}

export default IndividualStories;
