const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");


const authRoutes = require("./routes/auth");
const gameRoutes = require("./routes/game");
const userRoutes = require("./routes/user");


const app = express();


app.use(cors());
app.use(bodyParser.json()); 


app.use("/api/auth", authRoutes);
app.use("/api/game", gameRoutes); 
app.use("/api/user", userRoutes);


app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Tic-Tac-Toe API!" });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

