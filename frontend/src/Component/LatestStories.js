import React from "react";
import "../fontawesome/css/all.css";
// import '../Home.css'
import "./b.css";
import Axios from "axios";

class LatestStories extends React.Component {
  state={
    ls:[]
  }
  componentDidMount(){
    Axios.get('http://localhost:3001/lateststories/data')
    .then(res=>{
      data= res.data;
      this.setState({
        ls:data
      })
    })
  }
  render() {
    return (
      <div className="latest-stories ">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-10">
              <h2 style={{ color: "#F54A00" }}>Latest Stories</h2>
              <hr
                style={{ border: "1px solid black", marginTop: "-5px" }}
              />
            </div>
          </div>
          <div className="row ">
            <div
              style={{
                backgroundImage:
                  'url("data:image/png;base64,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")',
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
                height: "200px",
                width: "100px"
              }}
              className="col-4 col-sm"
            />
            <div className="col-lg-6 col-sm-5 ">
              <div className="container ">
                <div className="row ">
                  <h6>Heading </h6>
                  <hr
                    style={{
                      color: "#F54A00",
                      border: "1px solid #F54A00",
                      width: "1000%",
                      marginTop: "-5px"
                    }}
                  />
                  <div>
                    aalskdahalkjsdfhlkjasdhflkjasdhglfkjgacsn
                    fkgaslkfgashlndskjfhlljdgflkashdflkjsdhglk
                    asdvhjsdbfkhsbdvlhasdflkjasdhglkjasdbfk asjdb
                    flaksjfkasjhfdlkasjhdfluasdbfaskfjhgfk jvjhvaa
                  </div>
                </div>
                <div className="row ">
                  <div style={{ marginLeft: "-15px" }} className="col">
                    <small>
                      By{" "}
                      <font style={{ color: "#F54A00" }}>
                        props.authors
                      </font>{" "}
                      | props.date | props.comment.length Comments
                    </small>
                    <div
                      style={{
                        backgroundColor: "black",
                        borderRadius: "5px",
                        float: "right",
                        fontSize: "small",
                        color: "#F54A00",
                        padding: "5px"
                      }}
                    >
                      {" "}
                      TRENDING:
                      <font style={{ color: "#ffffff", fontSize: "small" }}>
                        {" "}
                        props.ctry{" "}
                      </font>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-2" />
          </div>
        </div>
      </div>
    );
  }
}

export default LatestStories;
