import React from 'react'
import "../css/innovation.css"

const SingleInnovation=(props)=>(
    <div className="innovationContainer">
    <div
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url('https://www.gstatic.com/webp/gallery3/1.sm.png')"
      }}
      className="row imageThumbnail"
    >
      <div className="h6 innovationHeading">this.props.caption</div>
    </div>
  </div>
)

export default SingleInnovation;