import React from "react";
import axios from "axios";

class LatestStoriesInput extends React.Component {
  state = {
    videosFile: "",
    videosHeading: "",
    videosAuthor: "",
    videosPublishDate: new Date(),
    videoThumbnail:''
  };

  handleChangeVideos = e => {
    if (e.target.name === "videosFile") {
      this.setState({
        [e.target.name]: e.target.files[0]
      });
    } 
    else if (e.target.name === "videosThumbnail") {
      this.setState({
        [e.target.name]: e.target.files[0]
      });
    } else {
      this.setState({
        [e.target.name]: e.target.value
      });
    }
  };

  handleSubmitVideos = e => {
    // e.preventDefault();
    let formData = new FormData();
    formData.append("videosFile", this.state.videosFile);
    formData.append("videosHeading", this.state.videosHeading);
    formData.append("videosAuthor", this.state.videosAuthor);
    formData.append("videosPublishDate", this.state.videosPublishDate);
    formData.append("videoThumbnail", this.state.videosThumbnail);

    console.log("data: ", formData);
    axios
      .post("http://localhost:3001/videos/new", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      .then(() => {
        console.log("SUCCESS!!");
      })
      .catch(() => {
        console.log("FAILURE!!");
      });
    this.setState({
      videosFile: "",
      videosHeading: "",
      videosAuthor: "",
      videosPublishDate: new Date(),
      videoThumbnail:''
    });
  };
  render() {
    return (
      <div className="section-content-block section-process container">
        <div className="row">
          <div className="col-md-12 col-sm-12 text-center">
            <h2 className="section-heading">Videos Input</h2>
          </div>
        </div>

        <form>
          {/* Input File  */}
          <div className="form-group">
            <div className="form-group">
              <label htmlFor="exampleFormControlFile1">Video</label>
              <input
                type="file"
                name="videosFile"
                className="form-control-file"
                onChange={this.handleChangeVideos}
                id="exampleFormControlFile1"
              />
            </div>
          </div>

          {/* Input heading */}
          <div className="form-group">
            <label>Heading</label>
            <input
              onChange={this.handleChangeVideos}
              name="videosHeading"
              type="text"
              className="form-control"
              placeholder="heading"
            />
          </div>

          {/* Input Author */}
          <div className="form-group">
            <label>Author</label>
            <input
              onChange={this.handleChangeVideos}
              name="videosAuthor"
              type="text"
              className="form-control"
              placeholder="Author"
            />
          </div>
          
           {/* Input File thumbnail  */}
           <div className="form-group">
            <div className="form-group">
              <label htmlFor="exampleFormControlFile1">videoThumbnail Input</label>
              <input
                type="file"
                name="videosThumbnail"
                className="form-control-file"
                onChange={this.handleChangeVideos}
                id="exampleFormControlFile1"
              />
            </div>
          </div>

          <div className="form-group">
            <button
              onClick={this.handleSubmitVideos}
              className="btn-submit btn btn-primary"
            >
              upload
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default LatestStoriesInput;
