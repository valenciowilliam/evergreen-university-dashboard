require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Neon Database Connection
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

// ------------------ ROUTES ------------------ //

// Test server
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// Test database connection
app.get("/api/test-db", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json({
      success: true,
      time: result.rows[0],
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Database connection failed",
    });
  }
});

// Register student (SAVE DATA)
app.post("/api/register", async (req, res) => {
  const { name, email, mobile, course } = req.body;

  // Validation
  if (!name || !email || !mobile || !course) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  try {
    const result = await pool.query(
      "INSERT INTO students (name, email, mobile, course) VALUES ($1, $2, $3, $4) RETURNING *",
      [name, email, mobile, course]
    );

    res.status(201).json({
      success: true,
      data: result.rows[0],
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Error inserting data",
    });
  }
});

// Get all students (OPTIONAL - for testing)
app.get("/api/students", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM students ORDER BY id DESC");

    res.json({
      success: true,
      data: result.rows,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Error fetching data",
    });
  }
});

// ------------------ SERVER ------------------ //

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});