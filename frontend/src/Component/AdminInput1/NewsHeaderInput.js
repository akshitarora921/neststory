import React from "react";
import axios from "axios";

class NewsHeaderInput extends React.Component {
  state = {
    newsHeaderHeading: "",
  };
  handleChangeNewsHeader = e => {
      this.setState({
        newsHeaderHeading: e.target.value
      });
  };
  handleSubmitNewsHeader = e => {
    // e.preventDefault();
   let data = {
     "newsHeaderHeading":this.state.newsHeaderHeading
   }
    axios
      .post("http://localhost:3001/newsheader/new", data, {
        header: { "Content-Type": "application/json" }
      })
      .then(() => {
        console.log("SUCCESS!!");
      })
      .catch(() => {
        console.log("FAILURE!!");
      });

    this.setState({
      newsHeaderHeading: ""
    });
  };

  render() {
    return (
      <div className="section-content-block section-process container">
        <div className="row">
          <div className="col-md-12 col-sm-12 text-center">
            <h2 className="section-heading">NewsHeader Input</h2>
          </div>
        </div>

        <form>
          <div className="form-group">
            <label>Headlines</label>
            <input
              onChange={this.handleChangeNewsHeader}
              name="newsHeaderHeading"
              type="text"
              className="form-control"
              placeholder="headlines"
            />
          </div>

          <div className="form-group">
            <button onClick={this.handleSubmitNewsHeader} className="btn-submit btn btn-primary">
              upload
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default NewsHeaderInput;
