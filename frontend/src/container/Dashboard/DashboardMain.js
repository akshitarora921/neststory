import React from "react";
import Axios from "axios";
import "./dashboardheader.css";
import Select from "react-select";
class Dashboard extends React.Component {
  state = {
    heading: "",
    content: "",
    author: "",
    image: "",
    video: "",
    videoThumbnail: "",
    zone: "",
    tags: "",
    category: "innovation",
    subCategory: "startup",
    trending: ""
    // isglobal: false,
    // islocal: false,
    // isindia: false
  };

  handleChange1 = selectedOption => {
    console.log("selected option: ", selectedOption);
    let tag = "";
    for (let i = 0; i < selectedOption.length; i++) {
      tag = tag + selectedOption[i].value + ", ";
    }
    this.setState({
      tags: tag
    });
  };
  handleChange = e => {
    if (
      e.target.name === "image" ||
      e.target.name === "video" ||
      e.target.name === "videoThumbnail"
    ) {
      this.setState({
        [e.target.name]: e.target.files[0]
      });
    }
    // else if(e.target.name === "image" ){
    //     this.setState({
    //         [e.target.name]: e.target.files
    //       });
    // }
    else if (e.target.type === "checkbox") {
      // have to think more
      if (e.target.value) {
        this.state.tags.push(e.target.name);
      }
      this.setState({
        [e.target.name]: e.target.checked
      });
    } else
      this.setState({
        [e.target.name]: `${e.target.value}`
      });
  };

  handleSubmit = e => {
    // e.preventDefault();
    let formData = new FormData();
    formData.append("heading", this.state.heading);
    formData.append("content", this.state.content);
    formData.append("author", this.state.author);
    formData.append("image", this.state.image);
    formData.append("video", this.state.video);
    formData.append("videoThumbnail", this.state.videoThumbnail);
    formData.append("zone", this.state.zone);
    formData.append("tags", this.state.tags.toString());
    formData.append("category", this.state.category);
    formData.append("subCategory", this.state.subCategory);
    formData.append("trending", this.state.trending);

    Axios.post("http://localhost:3001/news/new", formData, {
      header: { "Content-Type": "multipart/form-data" }
    })
      .then(res => {
        console.log("news axios success", res);
      })
      .catch(res => {
        console.log("news axios error", res);
      });
    // this.setState({
    //   heading: "",
    //   content: "",
    //   author: "",
    //   image: "",
    //   video: "",
    //   videoThumbnail: "",
    //   zone: "",
    //   tags: [],
    //   position: "",
    //   trending: "",
    //   isglobal: false,
    //   islocal: false,
    //   isindia: false
    // });
  };

  render() {
    const options = [
      { value: "global", label: "Global" },
      { value: "local", label: "Local" },
      { value: "india", label: "India" }
    ];

    return (
      <div>
        <div
          // style={{ paddingTop: "12%" }}
          className="section-content-block section-process container "
        >
          <div className="row">
            <div className="col-md-12 col-sm-12 ">
              <h2 className="section-heading">News Input</h2>
            </div>
          </div>
          <form>
         
            {/* Input heading */}
            <div className="form-group">
              <label>Heading</label>
              <input
                onChange={this.handleChange}
                name="heading"
                type="text"
                // pattern='^[a-zA-Z0-9.@#$()+! \"_-]+$'
                className="form-control"
                placeholder="Heading"
              />
              <small style={{ color: "#aaa" }}>
               Double Quotes are  not allowed
              </small>
            </div>

            {/* Input content */}
            <div className="form-group">
              <label>Content</label>
              <textarea
                row="4"
                onChange={this.handleChange}
                name="content"
                className="form-control"
                placeholder="Content"
              />
              <small style={{ color: "#aaa" }}>
                Double Quotes are not allowed
              </small>
            </div>

            {/* Input Author */}
            <div className="form-group">
              <label>Author</label>
              <input
                onChange={this.handleChange}
                name="author"
                type="text"
                className="form-control"
                placeholder="Author"
              />
            </div>

            {/* Input Image  */}

            <div className="form-group">
              <label htmlFor="exampleFormControlFile1">
                Image/videoThumbnail Input
              </label>
              <input
                type="file"
                name="image"
                className="form-control-file"
                onChange={this.handleChange}
                //multiple
              />
            </div>

            {/* Input Video  */}
            <div className="form-group">
              <div className="form-group">
                <label htmlFor="exampleFormControlFile1">Video Input</label>
                <input
                  type="file"
                  name="video"
                  className="form-control-file"
                  onChange={this.handleChange}
                />
              </div>
            </div>

            {/* Input Video Thumbnail */}
            {/* <div className="form-group">
              <div className="form-group">
                <label htmlFor="exampleFormControlFile1">
                  Video Thumbnail Input
                </label>
                <input
                  type="file"
                  name="videoThumbnail"
                  className="form-control-file"
                  onChange={this.handleChange}
                />
              </div>
            </div> */}

            {/* Input zone */}
            <div className="form-group">
              <label>Zone(local, global, India ...)</label>
              <input
                onChange={this.handleChange}
                name="zone"
                type="text"
                className="form-control"
                placeholder="Zone"
              />
            </div>

            {/* tag input */}
            <label>Tag Input</label>
            <Select isMulti onChange={this.handleChange1} options={options} />
            {/* <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                checked={this.state.isglobal}
                onChange={this.handleChange}
                name="isglobal"
              />
              <label className="form-check-label" htmlFor="isglobal">
                Global
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                checked={this.state.islocal}
                onChange={this.handleChange}
                name="islocal"
              />
              <label className="form-check-label" htmlFor="islocal">
                Local
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                checked={this.state.isindia}
                onChange={this.handleChange}
                name="isindia"
              />
              <label className="form-check-label" htmlFor="isindia">
                India
              </label>
            </div>*/}
            <br /> 

            {/* Input category */}
            <label>Category</label>
            <select
              name="category"
              onChange={this.handleChange}
              className="form-control"
            >
              <option value="innovation">Innovation</option>
              <option value="entrepreneurship">Entrepreneurship</option>
              <option value="video">Videos</option>
              {/* <option value="medical">Medical</option>
              <option value="science">Science</option>
              <option value="enviroment">Enviroment</option> */}
            </select>
            <br />
            {/* Input sub-category */}
            <label>Sub-Category</label>
            <select
              name="subCategory"
              onChange={this.handleChange}
              className="form-control"
            >
              <option value="startup">Startups</option>
              <option value="agritech">AgriTech</option>
              <option value="robotics">Robotics</option>
              <option value="medical">Medical</option>
              <option value="science">Science</option>
              <option value="enviroment">Enviroment</option>
            </select>
            <br />

            {/* Input Trending */}
            <div className="form-group">
              <label>Trending</label>
              <input
                onChange={this.handleChange}
                name="trending"
                type="text"
                className="form-control"
                placeholder="Trending"
              />
            </div>
            <div className="form-group">
              <button
                onClick={this.handleSubmit}
                className="btn-submit btn btn-primary"
              >
                Upload
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default Dashboard;
