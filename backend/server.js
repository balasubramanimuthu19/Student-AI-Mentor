const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const studentRoutes = require("./routes/studentRoutes");
const app = express();
const PORT = 5000;
app.use(cors());
app.use(express.json());

connectDB();
app.use("/api", studentRoutes);
app.get("/", (req, res) => {
    res.send("Student AI Mentor Backend is Running!");
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});