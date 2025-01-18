import React, { useState, useEffect } from "react";
import axios from "axios";

const ViewCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get("http://localhost:8080/courses");
        setCourses(response.data);
      } catch (error) {
        console.error("Error fetching courses:", error);
        alert("Failed to fetch courses.");
      }
    };

    fetchCourses();
  }, []);

  return (
    <div>
      <h2>Courses</h2>
      <ul>
        {courses.length > 0 ? (
          courses.map((course) => (
            <li key={course.id}>
              <h3>{course.title}</h3>
              <p>{course.descriptionl}</p>
            </li>
          ))
        ) : (
          <p>No courses available.</p>
        )}
      </ul>
    </div>
  );
};

export default ViewCourses;
