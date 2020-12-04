import "./App.css";

import Landing from "./Components.js/Landing";
import AllStudents from "./Components.js/AllStudents";
import AddStudent from "./Components.js/AddStudent";
import { Router } from "@reach/router";
import SingleStudent from "./Components.js/SingleStudent";

function App() {
  return (
    <div className="app-ui">
      <div className="main">
        <Router>
          <Landing path="/"></Landing>
          <AllStudents path="/students/:block"></AllStudents>
          <AllStudents path="/students"></AllStudents>
          <SingleStudent path="/students/id/:id"></SingleStudent>
          <AddStudent path="/add"></AddStudent>
        </Router>
      </div>
    </div>
  );
}

export default App;
