import React from "react";
// import Home from "./Home";
import Dashboard from './Component/Dashboard'
//import { BrowserRouter as Router, Route, } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        {/* <Home /> */}
        <Dashboard/>
        {/* <Router>
          <Route exact path='/' Component={Home} />
        </Router> */}
      </div>
    );
  }
}

export default App;
