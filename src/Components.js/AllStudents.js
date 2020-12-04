import React, { Component } from "react";
import StudentCard from "./StudentCard";
import Header from "./Header";
import Nav from "./Nav";
const axios = require("axios");

class AllStudents extends Component {
  state = {
    students: {},
    isLoading: true,
    // block: "",
  };
  render() {
    if (this.state.isLoading) {
      return (
        <div className="students-container">
          <h3>Loading Student Information</h3>
        </div>
      );
    } else {
      return (
        <div className="students-container">
          <Header></Header>
          <h3 className="header-text">All Students</h3>
          <Nav></Nav>
          <div className='student-counter'>Total Students: {this.state.students.length}</div>
          <div className="students-list-container">
            <div className="student-list">
              {this.state.students.map((student) => {
                return (
                  <StudentCard
                    key={student._id}
                    studentInfo={student}
                  ></StudentCard>
                );
              })}
            </div>
          </div>
        </div>
      );
    }
  }

  componentDidMount() {
    this.getStudents().then((students) => {
      this.setState({ students, isLoading: false });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.block !== this.props.block) {
      this.getStudents().then((students) => {
        this.setState({ students: students, block: this.props.block });
        // console.log(students);
      });
    }
  }

  getStudents = () => {
    return axios
      .get("https://nc-student-tracker.herokuapp.com/api/students", {
        params: { block: this.props.block },
      })
      .then((response) => {
        console.log(response);
        return response.data.students;
      });
  };
}

export default AllStudents;
