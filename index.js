const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// Import routes
const authRoutes = require("./routes/auth");
const gameRoutes = require("./routes/game");
const userRoutes = require("./routes/user");

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json()); // Parse JSON request bodies

// Routes
app.use("/api/auth", authRoutes); // Authentication routes
app.use("/api/game", gameRoutes); // Game routes
app.use("/api/user", userRoutes); // User-related routes

// Default route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Tic-Tac-Toe API!" });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

