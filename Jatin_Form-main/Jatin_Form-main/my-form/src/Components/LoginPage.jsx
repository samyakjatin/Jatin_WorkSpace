import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";
import SubmitButton from "./SubmitButton";

function LoginPage() {
  const [formData, setFormData] = useState({
    userId: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

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
    if (data.confirmPassword !== data.password)
      errors.confirmPassword = "Passwords do not match";
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm(formData);
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await axios.post(
          "http://localhost:8080/api/v1/Registration",
          formData
        );
        alert(response.data.message);
        navigate("/Confirmation", { state: formData }); // Pass formData to Confirmation page
        
      } catch (error) {
        console.error("Error:", error.response?.data || error.message);
        alert("Error saving data!");
      }
    }
  };

  return (
    <div id="form">
      <div className="form-container">
        <h2 className="form-header">User Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            className="input-field"
            type="text"
            name="userId"
            placeholder="User ID"
            value={formData.userId}
            onChange={handleChange}
          />
          {errors.userId && <p className="error-message">{errors.userId}</p>}
          <input
            className="input-field"
            type="text"
            name="username"
            placeholder="Username"
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
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && (
            <p className="error-message">{errors.password}</p>
          )}
          <input
            className="input-field"
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && (
            <p className="error-message">{errors.confirmPassword}</p>
          )}
          <SubmitButton />
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
