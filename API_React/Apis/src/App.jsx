import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AddCourse from "./assets/AddCourse";
import ViewCourses from "./assets/ViewCourses";

const App = () => {
  return (
    <Router>
      <div style={{ padding: "10px" }}>
        <nav style={{ marginBottom: "20px" }}>
          <Link to="/" style={{ marginRight: "10px" }}>
            Home
          </Link>
          <Link to="/add-course" style={{ marginRight: "10px" }}>
            Add Course
          </Link>
 <Link to="/view-courses">View Courses</Link>
        </nav>
        <Routes>
          <Route path="/" element={<h1>Welcome to the Course App</h1>} />
          <Route path="/add-course" element={<AddCourse />} />
           <Route path="/view-courses" element={<ViewCourses />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
