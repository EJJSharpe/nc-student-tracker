import React, { Component } from "react";
import Header from "./Header";
import Nav from "./Nav";

class AddStudent extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <h3>Add Students</h3>
        <Nav></Nav>
      </div>
    );
  }
}

export default AddStudent;
