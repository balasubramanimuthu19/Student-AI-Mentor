// src/App.jsx

import { Routes, Route, Navigate } from "react-router-dom";

// Layout
import MainLayout from "./layouts/MainLayout";

// Pages
import Dashboard from "./pages/Dashboard";
import Upload from "./pages/Upload";
import Analysis from "./pages/Analysis";
import Planner from "./pages/Planner";
import Tasks from "./pages/Tasks";
import Internship from "./pages/Internship";
import Chatbot from "./pages/Chatbot";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
 <Routes>
  {/* Default Route */}
  <Route path="/" element={<Navigate to="/login" replace />} />

  {/* Authentication */}
  <Route path="/login" element={<Login />} />
  <Route path="/register" element={<Register />} />

  {/* Dashboard */}
  <Route path="/dashboard" element={<MainLayout />}>
    <Route index element={<Dashboard />} />
    <Route path="upload" element={<Upload />} />
    <Route path="analysis" element={<Analysis />} />
    <Route path="planner" element={<Planner />} />
    <Route path="tasks" element={<Tasks />} />
    <Route path="internship" element={<Internship />} />
    <Route path="chatbot" element={<Chatbot />} />
    <Route path="profile" element={<Profile />} />
  </Route>
</Routes>
  );
}

export default App;