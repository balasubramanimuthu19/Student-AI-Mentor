// src/components/Navbar.jsx

import { useState } from "react";
import { Search, Bell, Menu, Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar({ onMenuClick }) {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0A0A0A]/80 backdrop-blur-3xl">
      <div className="flex h-20 items-center justify-between px-5 md:px-8">
        {/* Left Section */}
        <div className="flex items-center gap-4">
          <button
            onClick={onMenuClick}
            className="rounded-xl border border-white/10 bg-white/5 p-2 text-gray-300 transition hover:bg-white/10 lg:hidden"
          >
            <Menu size={22} />
          </button>

          <div>
            <h1 className="text-2xl font-bold text-white">
              Student AI Mentor
            </h1>
            <p className="text-sm text-gray-400">
              Welcome back! Keep learning 🚀
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3">
          {/* Search */}
          <div className="hidden items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 md:flex">
            <Search size={18} className="text-gray-400" />

            <input
              type="text"
              placeholder="Search..."
              className="w-64 bg-transparent text-sm text-white placeholder:text-gray-500 focus:outline-none"
            />
          </div>

          {/* Theme Button */}
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setDarkMode(!darkMode)}
            className="rounded-2xl border border-white/10 bg-white/5 p-3 text-gray-300 transition hover:bg-white/10"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </motion.button>

          {/* Notifications */}
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="relative rounded-2xl border border-white/10 bg-white/5 p-3 text-gray-300 transition hover:bg-white/10"
          >
            <Bell size={20} />

            <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-orange-500" />
          </motion.button>

          {/* Profile */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="flex cursor-pointer items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-3 py-2 transition hover:bg-white/10"
          >
            <img
              src="https://i.pravatar.cc/150?img=12"
              alt="Profile"
              className="h-11 w-11 rounded-full border-2 border-orange-500 object-cover"
            />

            <div className="hidden md:block">
              <h3 className="text-sm font-semibold text-white">
                Dinesh
              </h3>
              <p className="text-xs text-gray-400">
                Computer Science Student
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );
}