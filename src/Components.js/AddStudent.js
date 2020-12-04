import React, { Component } from "react";
import Header from "./Header";
import Nav from "./Nav";

class AddStudent extends Component {
  render() {
    return (
      <div className="form">
        <Header></Header>
        <h3>Add Students</h3>
        <Nav></Nav>
        <div className="form-container">
          <form className="form-input">
            <label>
              Name: <input type="text"></input>
            </label>
          </form>
        </div>
      </div>
    );
  }
}

export default AddStudent;
