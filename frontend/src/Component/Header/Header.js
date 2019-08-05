import React from "react";
import NewsSlider from "./NewsSlider";
import "../../fontawesome/css/all.css";
import "./header.css";
import { BrowserRouter as Router} from "react-router-dom";
import GoogleLogin from "react-google-login";
// import FacebookLogin from "react-facebook-login";
import Axios from "axios";
// import "../../App.css";
// import "../b.css";

class Header extends React.Component {
  state = {
    first_name: "",
    last_name: "",
    password: "",
    email: ""
  };
  handleLoginChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  componentDidMount() {
    localStorage.setItem("token", "abc");
    console.log(localStorage.getItem("token"));
  }
  handleLoginSubmit = e => {
    e.preventDefault();
    // const today = new Date();
    let userLoginData = {
      email: this.state.email,
      password: this.state.password
    };

    // console.log("datatakjsafalskf=============", userLoginData);
    Axios.post("http://localhost:3001/users/login", userLoginData)
      .then(res => {
        alert("login successful");
        localStorage.setItem("user", res.data.data);
        // console.log("local storage: ", localStorage.getItem('user'))
        // console.log(res);
      })
      .catch(err => {
        console.log("catch error=", err);
      });
  };
  handleSignupChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSignupSubmit = e => {
    e.preventDefault();
    const today = new Date();
    let userSignupData = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      password: this.state.password,
      created: today
    };
    console.log("datatakjsafalskf=============", userSignupData);
    Axios.post("http://localhost:3001/users/signup", userSignupData)
      .then(res => {
        localStorage.setItem("token1", "dataatata");
        console.log("local storage: ", localStorage.getItem("token1"));
        console.log("res", res);
      })
      .catch(err => {
        console.log("catch error=", err);
      });
  };
  render() {
    // const responseFacebook = response => {
    //   console.log(response);
    // };
    const responseGoogle = response => {
      console.log(response);
    };
    // const componentClicked = response => {
    //   console.log(response);
    // };

    return (
      <Router>
        {/* Modal starts */}

        {/* login Modal */}
        <div
          className="modal fade bd-example-modal-lg"
          id="login"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="myLargeModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="container">
                <div className="row">
                  <div className="col-lg-4 col-12 back1 ">
                    <div className="row">
                      <div className="col-12">
                        <div className="topheading">Nest Story</div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <div className="h5 update-text">Updates</div>
                        <div
                          className="tv"
                          compitition-details="UpcomingCompititions *Robotics Marathon June 28, 2019"
                        />
                      </div>
                    </div>
                    {/* <div className="row">
                      <div className="col">
                        <h2 className="login-text">Login</h2>
                      </div>
                    </div> */}
                  </div>
                  <div className="col-lg-8 col-12 back2  ">
                    <div className="container-fluid martopform">
                      <div className="row">
                        <div className="col-lg-2 col-1" />
                        <div className="col-lg-8 col-10">
                          <form className="modalContent">
                            <div className="form-group">
                              <input
                                type="email"
                                className="modalInput form-control "
                                id="exampleInputEmail1"
                                onChange={this.handleLoginChange}
                                name="email"
                                aria-describedby="emailHelp"
                                placeholder="Email"
                              />
                              <br />
                              <input
                                onChange={this.handleLoginChange}
                                name="password"
                                type="password"
                                className="form-control modalInput"
                                placeholder="Password"
                              />
                              <small className="form-text text-muted pr-4 ">
                                <a className="forgot-pass" href="#">
                                  Forgot Password?
                                </a>
                              </small>
                            </div>
                            <div className="form-group login-div">
                              <button
                                type="submit"
                                onClick={this.handleLoginSubmit}
                                className="btn btnLogin "
                              >
                                Login
                              </button>
                            </div>
                            <div className="form-group">
                              <small className="form-text text-muted center">
                                Don't have an account?
                                <a
                                  className="new-account"
                                  data-toggle="modal"
                                  data-dismiss="modal"
                                  href="#new-account"
                                >
                                  Create an account
                                </a>
                              </small>
                            </div>
                          </form>
                          <div className="col-3" />
                        </div>
                        <div className="col-lg-2 col-1" />
                        <div className="row mx-auto">
                          <div className="col-auto">
                            <div className="other-login h5">OR</div>
                          </div>
                          <div className="row mt-4 mx-auto">
                          <div className="col-auto">
                           
                                <GoogleLogin
                                clientId="622742830674-776paqvqtco2gflgbgplln8m3n6jtmgm.apps.googleusercontent.com"
                                buttonText="Login"
                                onSuccess={responseGoogle}
                                onFailure={responseGoogle}
                                cookiePolicy={"single_host_origin"}
                              />{" "}
                              {/* <FacebookLogin
                                    appId="560360311166372"
                                    autoLoad={true}
                                    fields="name,email,picture"
                                    onClick={componentClicked}
                                    callback={responseFacebook}
                                  />` */}
                            
                          </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* registration/ signup Modal */}
        <div
          className="modal fade bd-example-modal-lg"
          id="new-account"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="myLargeModalLabel"
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-lg modal-dialog-centered"
            id="new-account"
          >
            <div className="modal-content">
              <div className="container ">
                <div className="row">
                  <div className="col-lg-4 col-12 back1 ">
                    <div className="row">
                      <div className="h1 topheading">NestStory</div>
                    </div>
                    <div className="row">
                      <div className="col">
                        {/* <div className="h3 update-text">Updates</div> */}
                        <div
                          className="tv"
                          compitition-details="Neststory Discription"
                        />
                      </div>
                    </div>
                    {/* <div className="row">
                      <div className="col">
                        <h2 className="login-text">Signup</h2>
                      </div>
                    </div> */}
                  </div>
                  <div className="col-lg-8 col-12 back2  ">
                    <div className="container signup-form">
                      <div className="row">
                        <div className="col-lg-2 col-1" />
                        <div className="col-lg-8 col-10">
                          <form className="modalContent signup-form">
                            <div className="form-group">
                              <input
                                type="text"
                                onChange={this.handleSignupChange}
                                className="modalInput form-control "
                                // id="exampleInputfirstname1"
                                name="first_name"
                                // aria-describedby="emailHelp"
                                placeholder="First Name"
                              />
                              <br />
                              <input
                                type="text"
                                onChange={this.handleSignupChange}
                                className="modalInput form-control "
                                // id="exampleInputLastName1"
                                // aria-describedby="emailHelp"
                                name="last_name"
                                placeholder="Last Name"
                              />
                              <br />
                              <input
                                type="email"
                                onChange={this.handleSignupChange}
                                className="modalInput form-control "
                                // id="exampleInputEmail1"
                                // aria-describedby="emailHelp"
                                name="email"
                                placeholder="Email"
                              />
                              <br />
                              <input
                                type="password"
                                onChange={this.handleSignupChange}
                                name="password"
                                pattern="[A-Za-z0-9]{6,20}"
                                className="form-control modalInput"
                                placeholder="Password"
                              />
                              {/* <small className="form-text text-muted float-right">
                                    <a href="#">Forgot Password?</a>
                                  </small> */}
                            </div>
                            <div className="form-group ">
                              <button
                                type="submit"
                                onClick={this.handleSignupSubmit}
                                className="btn btnLogin "
                              >
                                Signup
                              </button>
                            </div>
                            <div className="form-group">
                              <small className="form-text text-muted center">
                                Already have an account?
                                <a
                                  // href="#"
                                  data-toggle="modal"
                                  href="#login"
                                  className="new-account"
                                  data-dismiss="modal"
                                >
                                  login
                                </a>
                              </small>
                            </div>
                          </form>
                        </div>
                        <div className="col-lg-2 col-1" />
                        <div className="row">
                          <div className="col">
                            <div className="other-login-signup h5 float-left">
                              Login using
                              {/* <i className="fab fa-facebook fa-2x fbIcon mt-2" /> */}
                              <GoogleLogin
                                clientId="622742830674-776paqvqtco2gflgbgplln8m3n6jtmgm.apps.googleusercontent.com"
                                buttonText="Login"
                                onSuccess={responseGoogle}
                                onFailure={responseGoogle}
                                cookiePolicy={"single_host_origin"}
                              />
                              {/* <FacebookLogin
                                    appId="560360311166372"
                                    autoLoad={true}
                                    fields="name,email,picture"
                                    onClick={componentClicked}
                                    callback={responseFacebook}
                                  /> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* modal ends */}
        <div style={{ zIndex: "3", position: "fixed" }} className="header">
          <div className="container-fluid headerStyle">
            <div className="row justify-content-between">
              <div
                className="h1 logo col-12  col-lg-3 "
                style={{
                  textDecoration: "none",
                  fontSize: "3.5vw"
                }}
              >
                <a
                  style={{
                    color: "white",
                    textDecoration: "none"
                  }}
                  href="/"
                >
                  {" "}
                  Nest Story
                </a>
              </div>

              <div className="col-12 col-lg-9">
                <div className="row newsHeaderStyle">
                  <div className="col-12 col-lg-9 ">
                    <NewsSlider />
                  </div>
                  <div className="col-lg-3 col-3 user-nav">
                    <nav className="navbar navbar-expand-lg navbar-expand">
                      <div className="navbar-collapse collapse">
                        <ul className="navbar-nav ml-auto ">
                          <li className="navbar-item subscribe">
                            <div>
                              <i className="fas fa-envelope"> Subscribe</i>
                            </div>
                          </li>
                          <li className="navbar-item ml-2  mt-1">
                            <a data-toggle="modal" href="#login">
                              <i className="fas fa-user " />
                            </a>
                          </li>
                          <li className="navbar-item ml-2  mt-1">
                            <i className="fas fa-search" />
                          </li>
                        </ul>
                      </div>
                    </nav>
                  </div>
                </div>
                <div className="row ">
                  <div className="col">
                    <nav className="navbar navbar-expand-lg navbar-dark">
                      <div className="collapse navbar-collapse">
                        <ul className="navbar-nav ml-auto text-center">
                          <li className="navbar-item">
                            <a href="/" className="nav-link navtext">
                              HOME
                            </a>
                          </li>
                          <li className="navbar-item">
                            <a href="/stories" className="nav-link navtext">
                              STORIES
                            </a>
                          </li>
                          <li className="navbar-item">
                            <a href="/global" className="nav-link navtext">
                              GLOBAL
                            </a>
                          </li>
                          <li className="navbar-item navtext">
                            <a href="/innovation" className="nav-link">
                              INNOVATION
                            </a>
                          </li>
                          <li className="navbar-item navtext">
                            <a href="/launchpad" className="nav-link">
                              LAUNCHPAD
                            </a>
                          </li>
                          <li className="navbar-item navtext">
                            <a href="/entrepreneurship" className="nav-link">
                              ENTREPRENEURSHIP
                            </a>
                          </li>
                          <li className="navbar-item navtext">
                            <a href="/videos" className="nav-link">
                              VIDEOS
                            </a>
                          </li>
                        </ul>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <Route path="/stories/" component={Stories} /> */}
        </div>
      </Router>
    );
  }
}

export default Header;

// <div class="d-flex justify-content-between">
//                     <div className="p-1">
//                       <i
//                         style={{
//                           paddingTop: "5px"
//                         }}
//                         class="fas fa-angle-left fa-2x"
//                       />
//                     </div>
//                     <div
//                       style={{ marginTop: "10px", alignContent: "center" }}
//                       className="p-8"
//                     >
//                       <font
//                         style={{
//                           fontSize: "18px"
//                         }}
//                       >
//                         This.props.text ksdjglkj
//                       </font>
//                     </div>
//                     <div className="p-1">
//                       <i
//                         style={{
//                           paddingTop: "5px"
//                         }}
//                         class="fas fa-angle-right fa-2x "
//                       />
//                     </div>
//                   </div>
