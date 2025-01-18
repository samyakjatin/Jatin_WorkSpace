const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors"); // Import cors

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors()); 

// Database connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "mysql@#$2022",
  database: "testdb",
});

db.connect((err) => {
  if (err) console.error("Database connection error:", err);
  else console.log("Connected to the database.");
});

// API route to handle login data
app.post("/api/login", (req, res) => {
  const { userId, username, password, confirmPassword } = req.body;

  if (!userId || !username || !password || !confirmPassword) {
    return res.status(400).json({ message: "All fields are required" });
  }
  if (password !== confirmPassword) {
    return res.status(400).json({ message: "Passwords do not match" });
  }

  const sql = "INSERT INTO users (userId, username, password) VALUES (?, ?, ?)";
  db.query(sql, [userId, username, password], (err, result) => {
    if (err) {
      console.error("Error inserting data:", err);
      return res.status(500).json({ message: "Error saving data" });
    }
    res.status(200).json({ message: "Data saved successfully" });
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
