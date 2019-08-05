import React from "react";
import axios from "axios";

class launchpadDash extends React.Component {
  state = {
    launchpadId: "",
    mentorName: "",
    mentorDesg: "",
    mentorImage: ""
  };

  handleChangeMentor = e => {
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
  handleSubmitMentor = e => {
    const formData = new FormData();
    formData.append("launchpadId", this.state.launchpadId);
    formData.append("mentorName", this.state.mentorName);
    formData.append("mentorDesg", this.state.mentorDesg);
    formData.append("mentorImage", this.state.mentorImage);

    axios
      .post("http://localhost:3001/launchpad/mentor", formData, {
        header: {
          "Content-Type": "multipart/form-data"
        }
      })
      .then(() => {
        console.log("SUCCESS!!");
      })
      .catch(() => {
        console.log("FAILURE!!");
      });
  };
  render() {
    return (
      <div 
      className="container" 
    //   style={{ paddingTop: "8.6%" }}
      >
          <div className="col-md-12 col-sm-12 ">
              <h2 className="section-heading">Mentor Input</h2>
            </div>
        <form>
          {/* Input Launchpad Id */}
          <div className="form-group">
            <label>Launchpad Id</label>
            <input
              onChange={this.handleChangeMentor}
              name="launchpadId"
              type="text"
              className="form-control"
              placeholder="Launchpad Id"
            />
          </div>
          {/* Input mentor name */}
          <div className="form-group">
            <label>Heading</label>
            <input
              onChange={this.handleChangeMentor}
              name="mentorName"
              type="text"
              className="form-control"
              placeholder="Name"
            />
          </div>
          {/* Input mentor name */}
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
          {/* Input Mentor Image */}
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

          <div className="form-group">
            <button
              onClick={this.handleSubmitMentor}
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

export default launchpadDash;
