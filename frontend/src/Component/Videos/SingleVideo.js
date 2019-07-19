import React from 'react'
import "../css/videos.css"

const SingleVideo=(props)=>(
    <div className="videoContainer">
    <div
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url('https://www.gstatic.com/webp/gallery3/1.sm.png')"
      }}
      className="row videoThumbnail"
    >
      <i className="far fa-play-circle fa-3x playButton" />
    </div>
    <div className="row h6">this.props.vidoes.cation</div>
    <div className="row ">
      <small className="text-muted author">
        this.props.auther | this.props.datePublished
      </small>
    </div>
  </div>
)

export default SingleVideo;