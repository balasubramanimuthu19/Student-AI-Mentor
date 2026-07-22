// src/components/Sidebar.jsx

import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Upload,
  BarChart3,
  CalendarDays,
  CheckSquare,
  Briefcase,
  Bot,
  User,
  GraduationCap,
} from "lucide-react";

const menuItems = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Upload Marks",
    path: "/dashboard/upload",
    icon: Upload,
  },
  {
    name: "Analysis",
    path: "/dashboard/analysis",
    icon: BarChart3,
  },
  {
    name: "Study Planner",
    path: "/dashboard/planner",
    icon: CalendarDays,
  },
  {
    name: "Daily Tasks",
    path: "/dashboard/tasks",
    icon: CheckSquare,
  },
  {
    name: "Internships",
    path: "/dashboard/internship",
    icon: Briefcase,
  },
  {
    name: "AI Mentor",
    path: "/dashboard/chatbot",
    icon: Bot,
  },
  {
    name: "Profile",
    path: "/dashboard/profile",
    icon: User,
  },
];

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 z-50 h-screen w-[280px] border-r border-white/10 bg-[#0A0A0A]/90 backdrop-blur-3xl">
      {/* Glow Effect */}
      <div className="absolute left-0 top-0 h-40 w-40 rounded-full bg-orange-500/20 blur-[120px]" />

      {/* Logo */}
      <div className="relative flex h-24 items-center gap-4 border-b border-white/10 px-8">
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.8 }}
          className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 shadow-lg shadow-orange-500/30"
        >
          <GraduationCap className="h-7 w-7 text-white" />
        </motion.div>

        <div>
          <h1 className="text-lg font-bold tracking-wide text-white">
            Student AI
          </h1>
          <p className="text-sm text-gray-400">Mentor Dashboard</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-2 px-5 py-6">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink key={item.name} to={item.path}>
              {({ isActive }) => (
                <motion.div
                  whileHover={{ x: 5, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`group relative flex items-center gap-4 overflow-hidden rounded-2xl px-5 py-4 transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-xl shadow-orange-500/20"
                      : "text-gray-400 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="sidebarIndicator"
                      className="absolute left-0 top-0 h-full w-1 rounded-r-full bg-white"
                    />
                  )}

                  <Icon
                    className={`h-5 w-5 transition-all duration-300 ${
                      isActive
                        ? "text-white"
                        : "text-gray-400 group-hover:text-orange-400"
                    }`}
                  />

                  <span className="text-[15px] font-medium tracking-wide">
                    {item.name}
                  </span>
                </motion.div>
              )}
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}