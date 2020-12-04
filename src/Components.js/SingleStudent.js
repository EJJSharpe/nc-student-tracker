import React, { Component } from "react";
import Header from "./Header";
import Nav from "./Nav";
import { navigate } from "@reach/router";
import Button from "react-bootstrap/Button";
const axios = require("axios");

class SingleStudent extends Component {
  state = { student: {}, isLoading: true };

  handleRemove = (event) => {
    const id = this.state.student.student._id
    this.deleteStudent(id)
  }

  deleteStudent = async (id) => {
    await axios.delete(`https://nc-student-tracker.herokuapp.com/api/students/${id}`)
    navigate(`/students/`)
  }

  handleProgress = () => {
    const id = this.state.student.student._id
    this.progressStudent(id)
  }

  progressStudent = async (id) => {
    const student = await axios.patch(`https://nc-student-tracker.herokuapp.com/api/students/${id}?progress=true`)
    const reload = window.location.reload(true)
    reload()

  }



  render() {
    // const { name, blockHistory, startingCohort } = this.state.data.student;
    if (this.state.isLoading) {
      return <h3>Loading Student Info</h3>;
    } else {
      const currentBlock = this.state.student.student.blockHistory[
        this.state.student.student.blockHistory.length - 1
      ];
      const { name } = this.state.student.student;

      return (
        <div className="students-container">
          <Header></Header>
          <Nav></Nav>
          <div className="student-card-container">
            <div className="student-card">
              <h3>{name}</h3>
              <p>Current Block: {currentBlock.name}</p>
              <Button onClick={this.handleRemove} variant="danger">Delete</Button>
              <Button onClick={this.handleProgress} variant="primary">Progress</Button>
            </div>
          </div>
        </div>
      );
    }
  }

  componentDidMount() {
    this.getStudent().then((student) => {
      this.setState({ student, isLoading: false });
      console.log(this.state.student, 'did mount')
    });
  }

  getStudent = () => {
    const studentId = this.props.id;
    return axios
      .get(`https://nc-student-tracker.herokuapp.com/api/students/${studentId}`)
      .then((student) => {
        return student.data;
      });
  };
}

export default SingleStudent;
