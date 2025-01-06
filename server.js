const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config(); // Load environment variables

// Initialize Express
const app = express();

// Middleware
app.use(cors()); // Enable CORS
app.use(bodyParser.json()); // Parse JSON payloads

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    serverSelectionTimeoutMS: 5000, // Timeout after 5 seconds
  })
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => {
    console.error('Database connection error:', err);
    process.exit(1); // Exit process if the database connection fails
  });

// Routes
const authRoutes = require('./routes/authRoutes'); // Import auth routes
app.use('/api/auth', authRoutes); // Use auth routes with '/api/auth' prefix

// Default Root Route
app.get('/', (req, res) => {
  res.send('Welcome to the React Auth App Backend!');
});

// 404 Route for Undefined Routes
app.use((req, res, next) => {
  res.status(404).json({ message: 'Route not found' });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
