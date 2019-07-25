import React from "react";
import axios from "axios";
// import Menu from "./Menu";
import Sidebar from "../Sidebar/Sidebar";
import "../../fontawesome/css/all.css";
// import "../App.css";
import "../b.css";
import "../css/banner.css";
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
        // console.log("data: ", data);
      })
      .catch(err => {
        console.log("Erroorrr==========>", err);
      });
  }

  render() {
    return (
      <div className="banner">
        <Sidebar />
        {/* some map function we come and render the photo preview multiple times */}
        {/* props are passed for source and caption */}
        <div className="container-fluid">
          <div className="row">
            {this.state.banners.map((banner, id) => {
              //  console.log(id)
              let styleCol;
              if (id === 0 || id === 3)
                styleCol = "col-lg-4 col-sm-4 col-xs-12";
              else styleCol = "col-lg-6 col-sm-6 col-xs-12";
              return (
                //  <div className={`${styleRow}`}>
                <div
                  key={id}
                  style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(http://localhost:3001/image/banner/${
                      banner.image
                    })`
                  }}
                  className={`${styleCol} bannerImage`}
                >
                  {banner.isVideo === 1 && (
                    <i className="far fa-play-circle fa-3x playButton1" />
                  )}
                  <div className="h6 bannerHeading">{banner.caption}</div>
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
