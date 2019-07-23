import React from "react";
import Header from "../../component/Header/Header";
// import NavigationBar from "../../component/;
import Banner from "../../component/Banner/Banner";
import Ad from "../../component/Ad";
import LatestStories from "../../component/LatestStories/LatestStories";
import Innovations from "../../component/Innovations/Innovations";
import Entrepreneurship from "../../component/Entrepreneurship/Entrepreneurship";
import Footer from "../../component/Footer/Footer";
import Videos from "../../component/Videos/Videos";
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
        <Footer />
      </div>
    );
  }
}
export default LandingPage;
