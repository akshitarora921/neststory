import React from "react";
import Banner from "../../Component/Banner/Banner";
import Ad from "../../Component/Ad/Ad";
import LatestStories from "../../Component/LatestStories/LatestStories";
import Innovations from "../../Component/Innovations/Innovations";
import Entrepreneurship from "../../Component/Entrepreneurship/Entrepreneurship";
import Videos from "../../Component/Videos/Videos";
const LandingPage = () => {
  return (
    <div>
      <Banner />
      <Ad />
      <LatestStories last={3} />
      <Innovations />
      <Entrepreneurship />
      <Videos />
    </div>
  );
};

export default LandingPage;
