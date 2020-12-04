import React from "react";
import { Link } from "@reach/router";
import Button from "react-bootstrap/Button";
const StudentCard = (props) => {
  const { name, currentBlock, startingCohort, _id } = props.studentInfo;

  return (
    <div className="student-card">
      <li>
        <h3>{name}</h3>
        <p>Starting Cohort: {startingCohort}</p>
        <p>Current Block: {currentBlock}</p>
        <Link to={`/students/id/${_id}`}>
          <Button variant="dark">More Info</Button>
        </Link>
      </li>
    </div>
  );
};

export default StudentCard;
