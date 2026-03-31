const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // To parse JSON bodies

// Database Connection
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT || 5432,
});

// Registration Route
app.post('/api/register', async (req, res) => {
  const { name, email, mobile, course } = req.body;
  
  try {
    const newUser = await pool.query(
      "INSERT INTO students (name, email, mobile, course) VALUES ($1, $2, $3, $4) RETURNING *",
      [name, email, mobile, course]
    );
    res.status(201).json({ message: "Student registered!", student: newUser.rows[0] });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Server error" });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));