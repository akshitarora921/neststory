import React from "react";
import axios from "axios";

class EntrepreneurshipInput extends React.Component {
  state = {
    entrepreneurshipHeading: "",
    entrepreneurshipFile: "",
    entrepreneurshipContent:""
  };
  handleChangeEntrepreneurship = e => {
    if (e.target.name === "entrepreneurshipFile")
      this.setState({
        entrepreneurshipFile: e.target.files[0] // || e.dataTransfer.files[0]
      });
    else
      this.setState({
        [e.target.name]: e.target.value
      });
  };
  handleSubmitEntrepreneurship = e => {
    // e.preventDefault();
    let formData = new FormData();
    formData.append("entrepreneurshipFile", this.state.entrepreneurshipFile);
    formData.append("entrepreneurshipHeading",this.state.entrepreneurshipHeading);
    formData.append("entrepreneurshipContent",this.state.entrepreneurshipContent);

    axios
      .post("http://localhost:3001/entrepreneurship/new", formData, {
        header: { "Content-Type": "multipart/form-data" }
      })
      .then(() => {
        console.log("SUCCESS!!");
      })
      .catch(() => {
        console.log("FAILURE!!");
      });

    this.setState({
      entrepreneurshipHeading: "",
      entrepreneurshipFile: "",
      entrepreneurshipContent:""
    });
  };

  render() {
    return (
      <div className="section-content-block section-process container">
        <div className="row">
          <div className="col-md-12 col-sm-12 text-center">
            <h2 className="section-heading">Entrepreneurship Input</h2>
          </div>
        </div>

        <form>
          <div className="form-group">
            <div className="form-group">
              <label>File Input</label>
              <input
                type="file"
                name="entrepreneurshipFile"
                className="form-control-file"
                onChange={this.handleChangeEntrepreneurship}
                id="exampleFormControlFile1"
              />
            </div>
          </div>
          <div className="form-group">
            <label>Image Heading</label>
            <input
              onChange={this.handleChangeEntrepreneurship}
              name="entrepreneurshipHeading"
              type="text"
              className="form-control"
              placeholder="Heading"
            />
          </div>

          <div className="form-group">
            <label>Image content</label>
            <input
              onChange={this.handleChangeEntrepreneurship}
              name="entrepreneurshipContent"
              type="text"
              className="form-control"
              placeholder="Content"
            />
          </div>

          <div className="form-group">
            <button
              onClick={this.handleSubmitEntrepreneurship}
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

export default EntrepreneurshipInput;
