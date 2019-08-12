import React from "react";
import axios from "axios";
class launchpadDash extends React.Component {
  state = {
    lpHeading: "",
    lpContent: "",
    lpDate: "",
    lpVideo: "",
    lpVideoThumbnail: ""
  };
  handleChangeLP = e => {
    if (e.target.type === "file") {
      this.setState({
        [e.target.name]: e.target.files[0]
      });
    } else {
      this.setState({
        [e.target.name]: e.target.value
      });
    }
  };
  handleSubmitLP = e => {
    e.preventDefault();
    let data = localStorage.getItem("user");
    data = JSON.parse(data);
    let userId = data.user_id;

    const formData = new FormData();
    formData.append("lpHeading", this.state.lpHeading);
    formData.append("lpContent", this.state.lpContent);
    formData.append("lpDate", this.state.lpDate);
    formData.append("lpVideo", this.state.lpVideo);
    formData.append("lpVideoThumbnail", this.state.lpVideoThumbnail);
    formData.append("userId", userId);

    axios
      .post("/launchpad", formData, {
        header: {
          "Content-Type": "multipart/form-data"
          // Authorization: `Bearer ${data.token}`
        }
      })
      .then(() => {
        // alert("SUCCESS!!");
        // console.log("SUCCESS!!");
        //FOR reloading the page to clear the form
        window.location.reload();
      })
      .catch(() => {
        // alert("FAILURE!!");
        // console.log("FAILURE!!");
      });
  };

  render() {
    return (
      <div
        className="container"
        //  style={{ paddingTop: "8.6%" }}
      >
        <div className="col-md-12 col-sm-12 ">
          <h2 className="section-heading">Launchpad Input</h2>
        </div>
        <form>
          {/* Input heading */}
          <div className="form-group">
            <label>Heading</label>
            <input
              onChange={this.handleChangeLP}
              name="lpHeading"
              type="text"
              className="form-control"
              placeholder="Heading"
            />
          </div>

          {/* Input content */}
          <div className="form-group">
            <label>Content</label>
            <textarea
              row="4"
              onChange={this.handleChangeLP}
              name="lpContent"
              className="form-control"
              placeholder="Content"
            />
          </div>

          {/* Input Date */}
          <div className="form-group">
            <label>Date</label>
            <input
              onChange={this.handleChangeLP}
              name="lpDate"
              type="date"
              className="form-control"
              placeholder="Date"
            />
          </div>

          {/* Input video  */}
          <div className="form-group">
            <div className="form-group">
              <label htmlFor="exampleFormControlFile1">Video Input</label>
              <input
                onChange={this.handleChangeLP}
                type="file"
                name="lpVideo"
                className="form-control-file"
              />
            </div>
          </div>
          {/* Input video thumbnail  */}
          <div className="form-group">
            <div className="form-group">
              <label htmlFor="exampleFormControlFile1">
                Video Thumbnail Input
              </label>
              <input
                onChange={this.handleChangeLP}
                type="file"
                name="lpVideoThumbnail"
                className="form-control-file"
              />
            </div>
          </div>
          {/* Input No of mentors
          <div className="form-group">
            <label>No of Mentors</label>
            <input
              onChange={this.handleChangeLP}
              name="noOfMentors"
              type="number"
              min="1"
              max="10"
              className="form-control"
              placeholder="Heading"
            />
          </div> */}
          <div className="form-group">
            <button
              onClick={this.handleSubmitLP}
              className="btn-submit btn btn-primary"
            >
              Upload
            </button>
          </div>
        </form>
        {/* {list.slice(0, this.state.noOfMentors).map(id => (
          <form>
            <h3>Mentor {id} input</h3>
            {/* Input mentor name 
            <div className="form-group">
              <label>Heading</label>
              <input
                onChange={this.handleChangeMentor({id})}
                name="mentorName"
                type="text"
                className="form-control"
                placeholder="Name"
              />
            </div>
            {/* Input mentor name 
            <div className="form-group">
              <label>Designation</label>
              <input
                onChange={this.handleChangeMentor}
                name="mentorDesg"
                type="text"
                className="form-control"
                placeholder="Designation"
              />
            </div>
            {/* Input Mentor Image 
            <div className="form-group">
              <div className="form-group">
                <label htmlFor="exampleFormControlFile1">
                  Mentor Image Input
                </label>
                <input
                  type="file"
                  name="mentorImage"
                  className="form-control-file"
                  onChange={this.handleChangeMentor}
                />
              </div>
            </div>
          </form>
        ))} */}
      </div>
    );
  }
}

export default launchpadDash;
