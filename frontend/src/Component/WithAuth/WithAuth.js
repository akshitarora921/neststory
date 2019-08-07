import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Axios from "axios";

export default function WithAuth(ComponentToProtect) {
  return class extends Component {
    constructor() {
      super();
      this.state = {
        loading: true,
        redirect: false
      };
    }
    componentDidMount() {
      let data = localStorage.getItem("user");
      data = JSON.parse(data);
      // let token = data.token
      console.log("Hehehahaha", data);
      if (data !== null) {
        Axios.get("/checktoken", {
          headers: { Authorization: `Bearer ${data.token}` }
        })
          .then(res => {
            if (res.status === 200) {
              this.setState({ loading: false });
            } else {
              const error = new Error(res.error);
              throw error;
            }
          })
          .catch(err => {
            console.error(err);
            this.setState({ loading: false, redirect: true });
          });
      } else {
        this.setState({ loading: false, redirect: true });
      }
    }
    render() {
      const { loading, redirect } = this.state;
      console.log("loading: ", loading, "redirect: ", redirect);
      if (loading) {
        return null;
      }
      if (redirect) {
        alert("please login first");
        return <Redirect to="/#login" />;
        
      }
      return (
        <React.Fragment>
          <ComponentToProtect />
        </React.Fragment>
      );
    }
  };
}
