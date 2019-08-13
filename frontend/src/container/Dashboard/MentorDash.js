import React from "react";
import axios from "axios";

class launchpadDash extends React.Component {
  state = {
    launchpads: [],
    launchpadId: "",
    mentorName: "",
    mentorDesg: "",
    mentorImage: ""
  };

  componentDidMount() {
    axios
      .get("http://localhost:3001/launchpad/all")
      .then(res => {
        let data = res.data;
        this.setState({
          launchpads: data
        });
      })
      .catch(err => {
        // console.log("Error in axios: ", err);
      });
  }

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
    e.preventDefault();
    let data = localStorage.getItem("user");
    data = JSON.parse(data);
    let userId = data.user_id;
    const formData = new FormData();
    formData.append("launchpadId", this.state.launchpadId);
    formData.append("mentorName", this.state.mentorName);
    formData.append("mentorDesg", this.state.mentorDesg);
    formData.append("mentorImage", this.state.mentorImage);
    formData.append("userId", userId);

    axios
      .post("/mentor", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      .then(() => {
        // alert("SUCCESS!!");
        // console.log("SUCCESS!!");

        //for reloading the page
        window.location.reload();
      })
      .catch(() => {
        // alert("FAILURE!!");
        // console.log("FAILURE!!");
      });
  };
  render() {
    return (
      <div className="container">
        <div className="col-md-12 col-sm-12 ">
          <h2 className="section-heading">Mentor Input</h2>
        </div>
        <form>

          {/* Input Launchpad Id */}
          <div className="form-group">
            <label>Launchpad Name</label>
            <select
              name="launchpadId"
              onChange={this.handleChangeMentor}
              className="form-control"
            >
              <option value="" selected disabled hidden>Choose here</option>
              {this.state.launchpads.map((launchpad, id) => (
                <option key={id} value={`${launchpad.launchpad_id}`}>
                  {launchpad.heading}
                </option>
              ))}
            </select>
          </div>

          {/* Input mentor name */}
          <div className="form-group">
            <label>Name</label>
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
              Upload
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default launchpadDash;
