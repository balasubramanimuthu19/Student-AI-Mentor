const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const studentRoutes = require("./routes/studentRoutes");
const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes");
const performanceRoutes = require("./routes/performanceRoutes");
const uploadRoutes = require("./routes/uploadRoutes");
//const examRoutes = require("./routes/examRoutes");
const app = express();
const PORT = 5000;
app.use(cors());
app.use(express.json());

connectDB();
app.use("/api", studentRoutes);
app.use("/api", authRoutes);
app.use("/api", taskRoutes);
app.use("/api", performanceRoutes);
app.use("/api", uploadRoutes);
//app.use("/api", examRoutes);
app.get("/", (req, res) => {
    res.send("Student AI Mentor Backend is Running!");
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});