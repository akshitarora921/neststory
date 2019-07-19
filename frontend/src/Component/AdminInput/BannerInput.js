import React from "react";
import axios from "axios";

class BannerInput extends React.Component {
  state = {
    bannerCaption: "",
    bannerFile: "",
    bannerIsVideo: false
  };
  handleChangeBanner = e => {
    if (e.target.name === "bannerFile")
      this.setState({
        bannerFile: e.target.files[0] // || e.dataTransfer.files[0]
      });
    else if (e.target.name === "bannerIsVideo")
      {this.setState({
        bannerIsVideo: !this.state.bannerIsVideo
      });
      console.log("is video", this.state.bannerIsVideo)}
    else
      this.setState({
        bannerCaption: e.target.value
      });
  };
  handleSubmitBanner = e => {
    // e.preventDefault();
    let formData = new FormData();
    formData.append("bannerFile", this.state.bannerFile);
    formData.append("bannerCaption", this.state.bannerCaption);
    formData.append("bannerIsVideo", this.state.bannerIsVideo);
    // console.log("banner form data value", formData.values());
    axios
      .post("http://localhost:3001/banner/new", formData, {
        header: { "Content-Type": "multipart/form-data" }
      })
      .then(() => {
        console.log("SUCCESS!!");
      })
      .catch(() => {
        console.log("FAILURE!!");
      });

    this.setState({
      bannerCaption: "",
      bannerFile: "",
      bannerIsVideo: false
    });
  };

  render() {
    return (
      <div className="section-content-block section-process container">
        <div className="row">
          <div className="col-md-12 col-sm-12 text-center">
            <h2 className="section-heading">Banner Input</h2>
          </div>
        </div>

        <form>
          <div className="form-group">
            <label>Cation</label>
            <input
              onChange={this.handleChangeBanner}
              name="bannerCation"
              type="text"
              className="form-control"
              placeholder="Caption"
            />
          </div>

          <div className="form-group">
            <div className="form-group">
              <label>File Input</label>
              <input
                type="file"
                name="bannerFile"
                className="form-control-file"
                onChange={this.handleChangeBanner}
                id="exampleFormControlFile1"
              />
            </div>
          </div>

          <div className="form-group">
            <div className="form-check">
              <input
                type="checkbox"
                name="bannerIsVideo"
                onChange={this.handleChangeBanner}
                checked={this.state.BannerIsVideo}
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                is Video
              </label>
            </div>
          </div>

          <div className="form-group">
            <button onClick={this.handleSubmitBanner} className="btn-submit btn btn-primary">
              upload
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default BannerInput;
