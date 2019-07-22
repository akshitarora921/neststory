import React from "react";
import "../../fontawesome/css/all.css";
// import "../App.css";
import "../css/videos.css";
import $ from "jquery";
import axios from "axios";
import SingleVideo from "./SingleVideo";
class Videos extends React.Component {
  state = {
    videos: []
  };
  scroll(direction) {
    let far = ($(".image-container").width() / 2) * direction;
    let pos = $(".image-container").scrollLeft() + far;
    $(".image-container").animate({ scrollLeft: pos }, 1000);
  }
  
  componentDidMount() {
    axios.get("http://localhost:3001/videos/data").then(res => {
      let data = res.data;
      this.setState({
        videos: data
      });
    });
  }

  render() {
    return (
      <div className="Videos">
        <div className="container-fluid">
          <div className="row">
            {/* heading */}
            <div className="col-2.5 ">
              <h2 style={{ color: "#F54A00" }}>Videos</h2>
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
        </div>
        <hr style={{ border: "1px solid black", marginTop: "-5px" }} />
        <div className="container-fluid ">
          {/* image slider starts */}
          <div className="main">
            <div className="wrapper">
              <a className="prev" onClick={this.scroll.bind(null, -1)}>
                &#10094;
              </a>
              <div className="image-container">
                {/* mydata */}
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
               
                {/* mydata end */}

              </div>
              <a className="next" onClick={this.scroll.bind(null, 1)}>
                &#10095;
              </a>
            </div>
          </div>
          {/* Image slider ends */}
        </div>
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
