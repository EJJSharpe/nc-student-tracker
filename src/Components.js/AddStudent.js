import React, { Component } from "react";
import Header from "./Header";
import Nav from "./Nav";
import axios from 'axios';
import { navigate } from "@reach/router"


class AddStudent extends Component {
  state = { name: '', startingCohort: '' }

  handleChange = (event) => {
    console.log(this.state.name)
    this.setState({ [event.target.id]: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { name, startingCohort } = this.state;
    this.postStudent({ name, startingCohort })
  }

  postStudent = async (object) => {
    const response = await axios.post('https://nc-student-tracker.herokuapp.com/api/students', object)
    navigate(`/students/id/${response.data.student._id}`)
  }


  render() {
    return (
      <div className="form">
        <Header></Header>
        <h3>Add Students</h3>
        <Nav></Nav>
        <div className="form-container">
          <form onSubmit={this.handleSubmit} className="form-input">
            <label>
              Name: <input id="name" onChange={this.handleChange} value={this.state.name} type="text"></input>
            </label>
            <label>
              Starting Cohort: <input id="startingCohort" onChange={this.handleChange} value={this.state.startingCohort} type="text"></input>
            </label>
            <button>Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddStudent;
