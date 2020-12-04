import React, { Component } from "react";
import Header from "./Header";
import Nav from "./Nav";
const axios = require("axios");

class SingleStudent extends Component {
  state = { student: {}, isLoading: true };
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
          <div className="student-list">
            <div className="student-card">
              <h3>{name}</h3>
              <p>Current Block: {currentBlock.name}</p>
            </div>
          </div>
        </div>
      );
    }
  }

  componentDidMount() {
    this.getStudent().then((student) => {
      this.setState({ student, isLoading: false });
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
