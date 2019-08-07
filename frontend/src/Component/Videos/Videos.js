import React from "react";
import "../../fontawesome/css/all.css";
// import "../App.css";
import "./videos.css";
// import $ from "jquery";
import axios from "axios";
import OwlCarousel from "react-owl-carousel";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";
import Moment from "react-moment";
import {Link} from 'react-router-dom'
// import ReactPlayer from "react-player";
// import 'moment/locale/fr';
// import SingleVideo from "./SingleVideo";
class Videos extends React.Component {
  state = {
    videos: []
  };
  // scroll(direction) {
  //   let far = ($(".image-container").width() / 2) * direction;
  //   let pos = $(".image-container").scrollLeft() + far;
  //   $(".image-container").animate({ scrollLeft: pos }, 1000);
  // }

  componentDidMount() {
    axios.get("http://localhost:3001/videos/data").then(res => {
      let data = res.data;
      this.setState({
        videos: data
      });
    });
  }

  render() {
    let options = {
      // loop: true,
      margin: 10,
      video: true,
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
    return (
      <div className="Videos">
        <div className="container-fluid">
          <div className="row">
            {/* heading */}
            <div className="col-2.5 ">
              <Link to="/videos" className="nav-link">
                <h2 style={{ color: "#F54A00" }}>Videos</h2>
              </Link>
            </div>
            {/* heading extra text */}
            <div
              style={{ marginTop: "12px", fontSize: "13px" }}
              className="col "
            >
              {/* Tech | Science | Startup Talks | Innovation | Entertainment |
              Enviroment | More */}
            </div>
          </div>
        </div>
        <hr style={{ border: "1px solid black", marginTop: "-5px" }} />
        {this.state.videos.length > 0 ? (
          <OwlCarousel className="owl-theme" {...options}>
            {this.state.videos.slice(0, 10).map((v, id) => (
              // <div className="item"><img src={`http://localhost:3001/image/videos/1563367919764_purple.png`}/></div>
              <div key={id} className="item">
                {/* <img
                  alt="not found"
                  src={`http://localhost:3001/image/videos/${
                    video.video_thumbnail
                  }`}
                /> */}
                {/* <div
               
                  className="player-wrapper">
                  <ReactPlayer
                    className="react-player"
                    light
                    
                          url={`http://localhost:3001/image/news/${v.video}`}                       
                    width="100%"
                    height="250px"
                  />
                </div> */}
                <div
                  style={{
                    minHeight: "200px",
                    borderRadius: "20px",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(http://localhost:3001/image/news/${
                      v.image
                    })`
                  }}
                >
                  <i className="far fa-play-circle fa-2x playButton" />
                </div>

                <div className="h6">{v.heading}</div>

                <small className="text-muted author">
                  {v.author} |{" "}
                  <Moment format="MMMM-YY" locale="en">
                    {v.date}
                  </Moment>
                </small>
              </div>
            ))}
          </OwlCarousel>
        ) : (
          ""
        )}

        {/* <div className="container-fluid ">
          {/* image slider starts 
          <div className="main">
            <div className="wrapper">
              <a className="prev" onClick={this.scroll.bind(null, -1)}>
                &#10094;
              </a>
              <div className="image-container">
                {/* mydata 
               {this.state.videos.map(video => (
                  <div className="videoContainer">
                    <div
                      style={{
                        backgroundImage:
                          `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(http://localhost:3001/image/videos/${video.video_thumbnail})`
                      }}
                      className="row videoThumbnail"
                    >
                      <i className="far fa-play-circle fa-3x playButton" />
                    </div>
                    <div className="row h6">{video.heading}</div>
                    <div className="row ">
                      <small className="text-muted author">
                        {video.author} | this.props.datePublished
                      </small>
                    </div>
                  </div>
                ))} 
               
                {/* mydata end 

              </div>
              <a className="next" onClick={this.scroll.bind(null, 1)}>
                &#10095;
              </a>
            </div>
          </div>
          {/* Image slider ends 
        </div> */}
      </div>
    );
  }
}

export default Videos;

// <div className="image1">
// <div
//   style={{
//     backgroundImage:
//       "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url('https://www.gstatic.com/webp/gallery3/1.sm.png')"
//   }}
//   className="row videoThumbnail"
// >
//   <i className="far fa-play-circle fa-3x playButton" />
// </div>
// <div className="row h6">this.props.vidoes.cation</div>
// <div className="row ">
//   <small className="text-muted author">
//     this.props.auther | this.props.datePublished
//   </small>
// </div>
// </div>
// <div className="image">
// <div
//   style={{
//     backgroundImage:
//       "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url('https://www.gstatic.com/webp/gallery3/1.sm.png')"
//   }}
//   className="row videoThumbnail"
// >
//   <i className="far fa-play-circle fa-3x playButton" />
// </div>
// <div className="row h6">this.props.vidoes.cation</div>
// <div className="row ">
//   <small className="text-muted author">
//     this.props.auther | this.props.datePublished
//   </small>
// </div>
// </div>
// <div className="image">
// <div
//   style={{
//     backgroundImage:
//       "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url('https://www.gstatic.com/webp/gallery3/1.sm.png')"
//   }}
//   className="row videoThumbnail"
// >
//   <i className="far fa-play-circle fa-3x playButton" />
// </div>
// <div className="row h6">this.props.vidoes.cation</div>
// <div className="row ">
//   <small className="text-muted author">
//     this.props.auther | this.props.datePublished
//   </small>
// </div>
// </div>
// <div className="image">
// <div
//   style={{
//     backgroundImage:
//       "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url('https://www.gstatic.com/webp/gallery3/1.sm.png')"
//   }}
//   className="row videoThumbnail"
// >
//   <i className="far fa-play-circle fa-3x playButton" />
// </div>
// <div className="row h6">this.props.vidoes.cation</div>
// <div className="row ">
//   <small className="text-muted author">
//     this.props.auther | this.props.datePublished
//   </small>
// </div>
// </div>
// <div className="image">
// <div
//   style={{
//     backgroundImage:
//       "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url('https://www.gstatic.com/webp/gallery3/1.sm.png')"
//   }}
//   className="row videoThumbnail"
// >
//   <i className="far fa-play-circle fa-3x playButton" />
// </div>
// <div className="row h6">this.props.vidoes.cation</div>
// <div className="row ">
//   <small className="text-muted author">
//     this.props.auther | this.props.datePublished
//   </small>
// </div>
// </div>
// <div className="image">
// <div
//   style={{
//     backgroundImage:
//       "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url('https://www.gstatic.com/webp/gallery3/1.sm.png')"
//   }}
//   className="row videoThumbnail"
// >
//   <i className="far fa-play-circle fa-3x playButton" />
// </div>
// <div className="row h6">this.props.vidoes.cation</div>
// <div className="row ">
//   <small className="text-muted author">
//     this.props.auther | this.props.datePublished
//   </small>
// </div>
// </div>
// <div className="image">
// <div
//   style={{
//     backgroundImage:
//       "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url('https://www.gstatic.com/webp/gallery3/1.sm.png')"
//   }}
//   className="row videoThumbnail"
// >
//   <i className="far fa-play-circle fa-3x playButton" />
// </div>
// <div className="row h6">this.props.vidoes.cation</div>
// <div className="row ">
//   <small className="text-muted author">
//     this.props.auther | this.props.datePublished
//   </small>
// </div>
// </div>
