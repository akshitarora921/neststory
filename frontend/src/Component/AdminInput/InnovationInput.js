import React from "react";
import axios from "axios";

class InnovationInput extends React.Component {
  state = {
    innovationHeading: "",
    innovationFile: "",
    };
  handleChangeInnovation = e => {
    if (e.target.name === "innovationFile")
      this.setState({
        innovationFile: e.target.files[0] // || e.dataTransfer.files[0]
      });
    else
      this.setState({
        innovationHeading: e.target.value
      });
  };
  handleSubmitInnovation = e => {
    // e.preventDefault();
    let formData = new FormData();
    formData.append("innovationFile", this.state.innovationFile);
    formData.append("innovationHeading", this.state.innovationHeading);
    axios
      .post("http://localhost:3001/innovation/new", formData, {
        header: { "Content-Type": "multipart/form-data" }
      })
      .then(() => {
        console.log("SUCCESS!!");
      })
      .catch(() => {
        console.log("FAILURE!!");
      });

    this.setState({
      innovationHeading: "",
      innovationFile: ""
    });
  };

  render() {
    return (
      <div className="section-content-block section-process container">
        <div className="row">
          <div className="col-md-12 col-sm-12 text-center">
            <h2 className="section-heading">Innovation Input</h2>
          </div>
        </div>

        <form>
          <div className="form-group">
            <label>Image Heading</label>
            <input
              onChange={this.handleChangeInnovation}
              name="innovationHeading"
              type="text"
              className="form-control"
              placeholder="Heading"
            />
          </div>

          <div className="form-group">
            <div className="form-group">
              <label>File Input</label>
              <input
                type="file"
                name="innovationFile"
                className="form-control-file"
                onChange={this.handleChangeInnovation}
                id="exampleFormControlFile1"
              />
            </div>
          </div>

          <div className="form-group">
            <button onClick={this.handleSubmitInnovation} className="btn-submit btn btn-primary">
              upload
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default InnovationInput;
