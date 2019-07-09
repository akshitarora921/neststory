
import React from "react";

import axios from "axios";

class LatestStoriesInput extends React.Component {
  state = {
    lsFile: "",
    lsHeading: "",
    lsContent: "",
    lsAuthor: "",
    lsPublishDate: new Date(),
   lsTrending: ""
  };

  handleChangeLS = e => {
    // if (e.target.name === "publishDate")
    //   this.setState({
    //     [e.target.name]: e
    //   });
    // else
    if (e.target.name === "lsFile") {
      this.setState({
        lsFile: e.target.files[0]
      });
      
    } else {
      this.setState({
        [e.target.name]: e.target.value
      });
    }
  };
//   handleDateChange=(date=>{
//       this.setState({
//           publishDate:date
//       })
//   })

handleSubmitLS = e => {
      // e.preventDefault();
    let formData = new FormData();
    formData.append("lsFile", this.state.lsFile);
    formData.append("lsHeading", this.state.lsHeading);
    formData.append("lsContent", this.state.lsContent);
    formData.append("lsAuthor", this.state.lsAuthor);
    formData.append("lsPublishDate", this.state.lsPublishDate);
    formData.append("lsTrending", this.state.lsTrending);

    console.log("data: ", formData)
    axios.post("http://localhost:3001/lateststories/new", formData, {
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
      lsFile: "",
      lsHeading: "",
      lsContent: "",
      lsAuthor: "",
      lsPublishDate: new Date(),
      lsTrending: ""
    });
  };
  render() {
    return (
      <div className="section-content-block section-process container">
        <div className="row">
          <div className="col-md-12 col-sm-12 text-center">
            <h2 className="section-heading">Latest Stories Input</h2>
          </div>
        </div>

        <form >
          {/* Input File  */}
          <div className="form-group">
            <div className="form-group">
              <label htmlFor="exampleFormControlFile1">Image Input</label>
              <input
                type="file"
                name="lsFile"
                className="form-control-file"
                onChange={this.handleChangeLS}
                id="exampleFormControlFile1"
              />
            </div>
          </div>

          {/* Input heading */}
          <div className="form-group">
            <label>heading</label>
            <input
              onChange={this.handleChangeLS}
              name="lsHeading"
              type="text"
              className="form-control"
              placeholder="heading"
            />
          </div>

          {/* Input content */}
          <div className="form-group">
            <label>Content</label>
            <input
              onChange={this.handleChangeLS}
              name="lsContent"
              type="text"
              className="form-control"
              placeholder="Content"
            />
          </div>

          {/* Input Author */}
          <div className="form-group">
            <label>Author</label>
            <input
              onChange={this.handleChangeLS}
              name="lsAuthor"
              type="text"
              className="form-control"
              placeholder="Author"
            />
          </div>

          {/* {/* Input Date
          <div className="form-group">
            <label>Publish Date</label>
            <DatePicker
              selected={this.state.startDate}
              onChange={this.handleDateChange}
            />
          </div> 

          <div className="form-group">
            <label>Publiish Date</label>
            <input
              onChange={this.handleChange}
              name="publishDate"
              type="date"
              className="form-control"
              placeholder="Content"
            />
          </div> */}

          {/* Input trending */}
          <div className="form-group">
            <label>Trending</label>
            <input
              onChange={this.handleChangeLS}
              name="lsTrending"
              type="text"
              className="form-control"
              placeholder="trending"
            />
          </div>

          <div className="form-group">
            <button
            onClick={this.handleSubmitLS}
            className="btn-submit">upload</button>
          </div>
        </form>
      </div>
    );
  }
}

export default LatestStoriesInput;
