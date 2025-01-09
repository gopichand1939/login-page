const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet'); // Adds security headers
require('dotenv').config(); // Load environment variables

// Initialize Express
const app = express();

// Middleware
app.use(cors()); // Enable CORS
app.use(helmet()); // Add security headers
app.use(express.json()); // Parse JSON payloads

// Validate Environment Variables
if (!process.env.MONGO_URI) {
  console.error('Error: MONGO_URI is not defined in .env');
  process.exit(1); // Exit process if the MongoDB URI is not provided
}

if (!process.env.JWT_SECRET) {
  console.error('Error: JWT_SECRET is not defined in .env');
  process.exit(1); // Exit process if the JWT secret is not provided
}

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
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

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal server error' });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
