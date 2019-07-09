import React from "react";
import BannerInput from './AdminInput/BannerInput'
import LatestStoriesInput from "./AdminInput/LatestStoriesInput";

const Dashboard=()=>(
  <div>
    <h1 className="align-center">Dashboard</h1>
    <BannerInput/>
    <LatestStoriesInput/>
  </div>
  
)

export default Dashboard;
