import React from "react";
// import Header from "../../component/Header/Header";
import Sidebar from "../../component/Sidebar/Sidebar";
import LatestStories from "../../component/LatestStories/LatestStories";
// import Footer from "../../component/Footer/Footer";
import axios from "axios";
import "./stories.css";

class Stories extends React.Component {
  state = {
    visible: 2,
    ls: []
  };

  loadMore = () => {
    this.setState(prev => {
      return { visible: prev.visible + 4 };
    });
  };

  componentDidMount() {
    axios.get("http://localhost:3001/lateststories/data").then(res => {
      let data = res.data;
      this.setState({
        ls: data
      });
    });
  }
  render() {
    return (
      <div>
        {/* <Header /> */}
        <div style={{ paddingTop: "8%", paddingBottom: "5px" }}>
          <div className="slidebar">
            <Sidebar />
          </div>

          <LatestStories last={this.state.visible} />
          {this.state.visible < this.state.ls.length && (
            <button
              onClick={this.loadMore}
              type="button"
              className="btn load-more"
            >
              More
            </button>
          )}
        </div>
        {/* <Footer /> */}
      </div>
    );
  }
}
export default Stories;
