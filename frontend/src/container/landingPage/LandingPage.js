import React from "react";
// import Header from "../../Component/Header/Header";
// import NavigationBar from "../../Component/;
import Banner from "../../Component/Banner/Banner";
import Ad from "../../Component/Ad";
import LatestStories from "../../Component/LatestStories/LatestStories";
import Innovations from "../../Component/Innovations/Innovations";
import Entrepreneurship from "../../Component/Entrepreneurship/Entrepreneurship";
// import Footer from "../../Component/Footer/Footer";
import Videos from "../../Component/Videos/Videos";
// import Modal from "./Component/Modal.js"
// import "./Home.css";
class LandingPage extends React.Component {
  render() {
    return (
      <div className="home">
        {/* <Header /> */}
        <Banner />
        <Ad />
        <LatestStories last={3} />
        <Innovations />
        <Entrepreneurship />
        <Videos />
        {/* <Footer /> */}
      </div>
    );
  }
}
export default LandingPage;
