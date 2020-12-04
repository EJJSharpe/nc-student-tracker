import React from "react";
import { Link } from "@reach/router";
import { Dropdown } from "react-bootstrap";
import Button from "react-bootstrap/Button";
const Nav = () => {
  return (
    <div className="nav">
      <div className="nav-button">
        <Link to="/">
          <Button variant="light">Home</Button>
        </Link>
      </div>
      <div className="nav-button">
        <Link to="/students/">
          <Button variant="light">All Students</Button>
        </Link>
      </div>
      <div className="nav-button">
        <Dropdown>
          <Dropdown.Toggle variant="light" id="dropdown-basic">
            Block
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>
              <Link to="/students/fun">Fundamentals</Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to="/students/fe">Frontend</Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to="/students/be">Backend</Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to="/students/proj">Project</Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to="/students/grad">Graduates</Link>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className="nav-button">
        <Link to="/add">
          <Button variant="light">Add Student</Button>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
