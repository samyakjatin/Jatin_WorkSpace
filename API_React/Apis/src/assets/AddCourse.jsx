import React, { useState } from "react";
import axios from "axios";

const AddCourse = () => {
  const [course, setCourse] = useState({
    id: "",
    title: "",
    descriptionl: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourse({ ...course, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/courses", course);
      alert("Course submitted successfully!");
      console.log(response.data);
    } catch (error) {
      console.error("Error submitting the course:", error);
      alert("Failed to submit course.");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Add a New Course</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label>Course ID: </label>
          <input
            type="number"
            name="id"
            value={course.id}
            onChange={handleChange}
            required
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Course Title: </label>
          <input
            type="text"
            name="title"
            value={course.title}
            onChange={handleChange}
            required
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Course Description: </label>
          <textarea
            name="descriptionl"
            value={course.descriptionl}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit Course</button>
      </form>
    </div>
  );
};

export default AddCourse;
