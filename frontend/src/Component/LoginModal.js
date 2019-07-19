import React from "react";
import "./b.css";
import "./css/modalstyle.css";

// import GoogleLogin from "react-google-login";
// import FacebookLogin from "react-facebook-login";

class Modal extends React.Component{
    responseFacebook = (response) => {
        console.log(response);
      }
    render(){
        return (
            <div className="container ">
              <div className="row modalContent">
                <div className="col-3 ">
                  <h1>NestStory</h1>
                </div>
                <div className="col-9 ">
                  <div className="container">
                    <div className="row">
                      <div className="col-3" />
                      <div className="col-8">
                        <form>
                          <div class="form-group">
                            <input
                              type="email"
                              class="form-control modalInput"
                              id="exampleInputEmail1"
                              aria-describedby="emailHelp"
                              placeholder="Email"
                            />
                            <br />
                            <input
                              type="password"
                              class="form-control modalInput"
                              placeholder="Password"
                            />
                            <small class="form-text text-muted float-right">
                              <a href="#">Forgot Password?</a>
                            </small>
                          </div>
                          <div class="form-group ">
                            <button type="button" class="btn btnLogin ">
                              Login
                            </button>
                          </div>
                          <div className="form-group">
                            <small class="form-text text-muted center">
                              Don't have an account?<a href="#">Create an account</a>
                            </small>
                          </div>
                        </form>
                        <div className="otherLogin h5">
                          Login using
                          <i class="fab fa-facebook fa-2x fbIcon mt-2" />
                          <i class="fab fa-google fa-2x googleIcon mt-2" />
                        </div>
                        
                        <br />
                        <br />
                        {/* <FacebookLogin
                          appId="560360311166372" //APP I560360311166372D NOT CREATED YET
                          fields="name,email,picture"
                          callback={responseFacebook}
                        /> */}
                      </div>
                      <div className="col-3" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
    }
}
export default Modal;
