import React from "react";
import axios from "axios";
import Sidebar from "../Sidebar/Sidebar";
import { Link } from "react-router-dom";
import "./banner.css";
class Banner extends React.Component {
  state = {
    banners: []
  };

  componentDidMount() {
    axios
      .get("http://localhost:3001/banner/data")
      .then(res => {
        let data = res.data;
        this.setState({
          banners: data
        });
      })
      .catch(err => {
        // console.log("Error=>", err);
      });
  }

  render() {
    return (
      <div className="banner">
        <div className="slidebar">
          <Sidebar />
        </div>
        <div className="container-fluid">
          <div className="row">
            {this.state.banners.map((banner, id) => {
              //  console.log(id)
              let styleCol;
              if (id === 0 || id === 3) styleCol = "col-lg-4 col-12";
              else styleCol = "col-lg-6 col-12";
              return (
                <div key={id} className={`${styleCol} image`}>
                  <Link to={`/news/${banner.id}`}>
                    <div
                      style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(http://localhost:3001/image/news/${
                          banner.image
                        })`
                      }}
                      className="bannerImage"
                    >
                      {banner.video.length> 1 && (
                        <i className="far fa-play-circle fa-2x playButton1" />
                      )}
                      <div className="h6 bannerHeading">{banner.heading}</div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;

// unuse stuff
// <div className="row ">
//           <div
//             style={{
//               backgroundImage:
//               "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url('https://www.gstatic.com/webp/gallery3/1.sm.png')",
//               width:"100%"
//             }}
//             className="col-6 bannerImage"
//           >
//             <div
//               className="h6 bannerHeading"
//             >
//               {/* {this.state.banners[0].} */}
//             </div>
//           </div>
//           <div
//             style={{
//               height: "200px",
//               backgroundImage:
//                 "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url('https://www.gstatic.com/webp/gallery3/1.sm.png')",
//               backgroundRepeat: "no-repeat",
//               backgroundSize: "100% 100%",
//               border: "1px solid white",
//               width:"100%",
//               position:"relative",
//               marginLeft:"75%",
//               marginBottom:"10%"

//             }}
//             className="col-4 "
//           >
//             <div
//               style={{
//                 position: "absolute",
//                 bottom: "8px",
//                 left: "16px",
//                 color: "white"
//               }}
//               className="h6"
//             >
//               this.props.caption
//             </div>
//           </div>
//           <div className="col-2">Advertisement</div>
//         {/* </div> */}
//         <div className="row ">
//           <div
//             style={{
//               height: "200px",
//               backgroundImage:
//                 "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url('https://www.gstatic.com/webp/gallery3/1.sm.png')",
//               backgroundRepeat: "no-repeat",
//               backgroundSize: "100% 100%",
//               border: "1px solid white"
//             }}
//             className="col-4 "
//           >
//             <div
//               style={{
//                 position: "absolute",
//                 bottom: "8px",
//                 left: "16px",
//                 color: "white"
//               }}
//               className="h6"
//             >
//               this.props.caption
//             </div>
//           </div>
//           <div
//             style={{
//               height: "200px",
//               backgroundImage:
//                 "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url('https://www.gstatic.com/webp/gallery3/1.sm.png')",
//               backgroundRepeat: "no-repeat",
//               backgroundSize: "100% 100%",
//               border: "1px solid white"
//             }}
//             className="col-6 "
//           >
//             <div
//               style={{
//                 position: "absolute",
//                 bottom: "8px",
//                 left: "16px",
//                 color: "white"
//               }}
//               className="h6"
//             >
//               this.props.caption
//             </div>
//           </div>
//           <div className="col-2" />
//         </div>
