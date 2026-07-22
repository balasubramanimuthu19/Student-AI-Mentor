// src/pages/Profile.jsx

import { motion } from "framer-motion";
import {
  User,
  GraduationCap,
  School,
  Mail,
  Phone,
  Hash,
  Calendar,
  Pencil,
  Camera,
  Globe,
  Award,
  BrainCircuit,
  Briefcase,
  TrendingUp,
  BookOpen,
  Settings,
} from "lucide-react";

const academicStats = [
  { title: "CGPA", value: "8.92" },
  { title: "Attendance", value: "96%" },
  { title: "Completed Courses", value: "42" },
  { title: "Certificates", value: "18" },
];

const skills = [
  "React",
  "JavaScript",
  "Tailwind CSS",
  "Python",
  "Java",
  "SQL",
  "MongoDB",
  "Node.js",
  "Git",
  "Problem Solving",
];

const achievements = [
  "🏆 Hackathon Finalist",
  "🥇 Top 5% in DBMS",
  "🎖️ NPTEL Elite Certificate",
  "💡 Open Source Contributor",
  "🚀 200+ DSA Problems Solved",
];

const activities = [
  {
    title: "Uploaded Semester Marks",
    time: "Today • 10:20 AM",
  },
  {
    title: "Completed AI Study Plan",
    time: "Yesterday • 07:45 PM",
  },
  {
    title: "Applied for Google Internship",
    time: "2 Days Ago",
  },
  {
    title: "Completed DBMS Assignment",
    time: "3 Days Ago",
  },
];

const performance = [
  { subject: "DSA", progress: 92 },
  { subject: "DBMS", progress: 89 },
  { subject: "Operating Systems", progress: 81 },
  { subject: "Computer Networks", progress: 77 },
];

export default function Profile() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
      >
        <h1 className="text-4xl font-bold text-white">
          Student Profile
        </h1>

        <p className="mt-3 max-w-3xl text-gray-400">
          Manage your academic profile, monitor progress, showcase skills,
          achievements, and receive AI-powered career insights.
        </p>
      </motion.div>

      {/* Profile */}
      <div className="grid gap-6 xl:grid-cols-3">
        <motion.div
          whileHover={{ y: -5 }}
          className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl xl:col-span-1"
        >
          <div className="flex flex-col items-center text-center">
            <div className="relative">
              <img
                src="https://api.dicebear.com/7.x/initials/svg?seed=Dinesh"
                alt="Profile"
                className="h-36 w-36 rounded-full border-4 border-orange-500 object-cover"
              />

              <button className="absolute bottom-0 right-0 rounded-full bg-[#FF7A00] p-2">
                <Camera size={16} className="text-white" />
              </button>
            </div>

            <h2 className="mt-5 text-2xl font-bold text-white">
              Dinesh R
            </h2>

            <p className="text-gray-400">
              Computer Science Student
            </p>

            <div className="mt-6 flex gap-3">
              <button className="flex items-center gap-2 rounded-xl bg-[#FF7A00] px-4 py-2 text-white">
                <Pencil size={16} />
                Edit Profile
              </button>

              <button className="rounded-xl border border-white/10 bg-white/5 p-2 text-white">
                <Camera size={18} />
              </button>
            </div>

            <div className="mt-8 w-full space-y-4 text-left">
              {[
                {
                  icon: School,
                  label: "College",
                  value: "ABC Engineering College",
                },
                {
                  icon: GraduationCap,
                  label: "Degree",
                  value: "B.E.",
                },
                {
                  icon: BookOpen,
                  label: "Department",
                  value: "Computer Science",
                },
                {
                  icon: Calendar,
                  label: "Semester",
                  value: "5th Semester",
                },
                {
                  icon: Hash,
                  label: "Roll Number",
                  value: "CSE22045",
                },
                {
                  icon: Mail,
                  label: "Email",
                  value: "dinesh@example.com",
                },
                {
                  icon: Phone,
                  label: "Phone",
                  value: "+91 9876543210",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="flex items-start gap-3"
                  >
                    <Icon
                      className="mt-1 text-[#FF7A00]"
                      size={18}
                    />

                    <div>
                      <p className="text-xs text-gray-500">
                        {item.label}
                      </p>

                      <p className="text-white">
                        {item.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 flex gap-4">
              <button className="rounded-xl bg-white/5 p-3 hover:bg-orange-500/10">
                <Globe className="text-white" />
              </button>

              <button className="rounded-xl bg-white/5 p-3 hover:bg-orange-500/10">
                <Globe className="text-[#0A66C2]" />
              </button>
            </div>
          </div>
        </motion.div>

        <div className="space-y-6 xl:col-span-2">
          {/* Academic */}
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {academicStats.map((item) => (
              <motion.div
                whileHover={{ y: -5 }}
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
              >
                <p className="text-gray-400">
                  {item.title}
                </p>

                <h2 className="mt-3 text-3xl font-bold text-white">
                  {item.value}
                </h2>
              </motion.div>
            ))}
          </div>

          {/* Skills */}
          <motion.div
            whileHover={{ y: -3 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
          >
            <h2 className="mb-5 text-2xl font-semibold text-white">
              Skills
            </h2>

            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-orange-500/10 px-4 py-2 text-sm text-orange-400"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            whileHover={{ y: -3 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
          >
            <div className="mb-5 flex items-center gap-3">
              <Award className="text-[#FF7A00]" />

              <h2 className="text-2xl font-semibold text-white">
                Achievements
              </h2>
            </div>

            <div className="flex flex-wrap gap-3">
              {achievements.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-green-500/10 px-4 py-2 text-green-400"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom */}
      <div className="grid gap-6 xl:grid-cols-2">
        {/* Timeline */}
        <motion.div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <h2 className="mb-6 text-2xl font-semibold text-white">
            Recent Activities
          </h2>

          <div className="space-y-5">
            {activities.map((activity) => (
              <div
                key={activity.title}
                className="flex gap-4"
              >
                <div className="mt-1 h-3 w-3 rounded-full bg-[#FF7A00]" />

                <div>
                  <p className="font-medium text-white">
                    {activity.title}
                  </p>

                  <p className="text-sm text-gray-500">
                    {activity.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Performance */}
        <motion.div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <h2 className="mb-6 flex items-center gap-3 text-2xl font-semibold text-white">
            <TrendingUp className="text-[#FF7A00]" />
            Performance Summary
          </h2>

          <div className="space-y-5">
            {performance.map((item) => (
              <div key={item.subject}>
                <div className="mb-2 flex justify-between">
                  <span className="text-white">
                    {item.subject}
                  </span>

                  <span className="text-orange-400">
                    {item.progress}%
                  </span>
                </div>

                <div className="h-3 rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-[#FF7A00]"
                    style={{
                      width: `${item.progress}%`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* AI */}
        <motion.div className="rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/10 to-transparent p-6 backdrop-blur-xl">
          <div className="mb-5 flex items-center gap-3">
            <BrainCircuit className="text-[#FF7A00]" />

            <h2 className="text-2xl font-semibold text-white">
              AI Career Insights
            </h2>
          </div>

          <p className="leading-8 text-gray-300">
            Your strongest skills are React, JavaScript, and problem solving.
            Based on your academic performance and projects, Frontend
            Development, Full Stack Engineering, and Software Development roles
            are highly recommended.
          </p>
        </motion.div>

        {/* Internship */}
        <motion.div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <div className="mb-5 flex items-center gap-3">
            <Briefcase className="text-[#FF7A00]" />

            <h2 className="text-2xl font-semibold text-white">
              Internship Progress
            </h2>
          </div>

          <div className="space-y-5">
            {[
              {
                title: "Profile Completion",
                value: 100,
              },
              {
                title: "Resume Ready",
                value: 95,
              },
              {
                title: "Applications",
                value: 60,
              },
              {
                title: "Interview Preparation",
                value: 75,
              },
            ].map((item) => (
              <div key={item.title}>
                <div className="mb-2 flex justify-between">
                  <span className="text-white">
                    {item.title}
                  </span>

                  <span className="text-orange-400">
                    {item.value}%
                  </span>
                </div>

                <div className="h-3 rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-[#FF7A00]"
                    style={{
                      width: `${item.value}%`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Settings */}
        <motion.div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl xl:col-span-2">
          <div className="mb-6 flex items-center gap-3">
            <Settings className="text-[#FF7A00]" />

            <h2 className="text-2xl font-semibold text-white">
              Settings
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Email Notifications",
              "Dark Theme",
              "AI Recommendations",
              "Internship Alerts",
              "Weekly Reports",
              "Privacy Settings",
            ].map((setting) => (
              <div
                key={setting}
                className="flex items-center justify-between rounded-xl border border-white/10 bg-black/20 p-4"
              >
                <span className="text-white">
                  {setting}
                </span>

                <input
                  type="checkbox"
                  defaultChecked
                  className="h-5 w-5 accent-orange-500"
                />
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-end">
            <button className="rounded-xl bg-[#FF7A00] px-6 py-3 font-semibold text-white transition hover:bg-orange-600">
              Save Changes
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}