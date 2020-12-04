import React from "react";
import { Link } from "@reach/router";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
const Landing = () => {
  return (
    <div className="landing-container">
      <div className="bg"></div>
      <Jumbotron fluid>
        <Container>
          <h1>Northcoders Student Tracker</h1>
          <br></br>
          <Link to="/students">
            <Button>Enter</Button>
          </Link>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Landing;
