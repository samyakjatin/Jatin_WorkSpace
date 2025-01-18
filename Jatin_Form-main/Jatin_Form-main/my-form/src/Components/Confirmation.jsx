import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Import useNavigate
import "./Confirmation.css";
import CaptchaValidation from "./CaptchaValidation";

function Confirmation() {
  const location = useLocation();
  const navigate = useNavigate(); // Initialize navigate
  const initialData = location.state || {};

  const [formData, setFormData] = useState({
    userId: "",
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = (data) => {
    const errors = {};
    if (!data.userId.trim()) errors.userId = "User ID is required";
    if (!data.username.trim()) errors.username = "Username is required";
    else if (data.username.length < 4)
      errors.username = "Username must be at least 4 characters long";
    if (!data.password) errors.password = "Password is required";
    else if (data.password.length < 8)
      errors.password = "Password must be at least 8 characters long";

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm(formData);
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      // Check if the data matches initialData
      if (
        formData.userId === initialData.userId &&
        formData.username === initialData.username &&
        formData.password === initialData.password
      ) {
        
        setSubmitted(true);
        // Navigate to GetUserData after successful submission
        navigate("/GetUserData");
      } else {
        alert("Details do not match. Please try again.");
      }
    }
  };

  return (
    <div id="form">
      <div className="form-container">
        <h2 className="form-header">User Confirmation</h2>
        {submitted ? (
          <p className="success-message">Submitted</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <input
              className="input-field"
              type="text"
              name="userId"
              placeholder="Reenter User ID"
              value={formData.userId}
              onChange={handleChange}
            />
            {errors.userId && <p className="error-message">{errors.userId}</p>}
            <input
              className="input-field"
              type="text"
              name="username"
              placeholder="Reenter Username"
              value={formData.username}
              onChange={handleChange}
            />
            {errors.username && (
              <p className="error-message">{errors.username}</p>
            )}
            <input
              className="input-field"
              type="password"
              name="password"
              placeholder="Reenter Password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && (
              <p className="error-message">{errors.password}</p>
            )}
          <CaptchaValidation />
            <button className="submit-button" type="submit">
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Confirmation;
