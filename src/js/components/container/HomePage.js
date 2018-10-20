import React, { Component } from "react";
import ReactDOM from "react-dom";
import {NavLink} from "react-router-dom";

class HomePage extends Component {
  constructor() {
    super();

    this.state = {
    };
  }

  render() {
    return (
      <div className="container-fluid">
        <h1>It works!!!!!!!!!</h1>
        <NavLink to="/skills">SKILLS</NavLink>
        <NavLink to="/contact">CONTACT ME</NavLink>
      </div>
    );
  }
}

export default HomePage;