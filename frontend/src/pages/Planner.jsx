// src/pages/Planner.jsx

import { motion } from "framer-motion";
import {
  CalendarDays,
  Clock3,
  BrainCircuit,
  BookOpen,
  Target,
  CheckCircle2,
  Lightbulb,
  GraduationCap,
  TrendingUp,
} from "lucide-react";

const todaySchedule = [
  { time: "08:00 - 09:00", subject: "Data Structures", status: "Completed" },
  { time: "10:00 - 11:30", subject: "DBMS Revision", status: "In Progress" },
  { time: "02:00 - 03:30", subject: "Operating Systems", status: "Pending" },
  { time: "07:00 - 08:00", subject: "Aptitude Practice", status: "Pending" },
];

const weeklyPlanner = [
  { day: "Monday", task: "DSA + Aptitude" },
  { day: "Tuesday", task: "DBMS + SQL" },
  { day: "Wednesday", task: "Operating Systems" },
  { day: "Thursday", task: "Computer Networks" },
  { day: "Friday", task: "React Project" },
  { day: "Saturday", task: "Mock Test" },
  { day: "Sunday", task: "Revision + Rest" },
];

const exams = [
  { subject: "DBMS Internal", date: "28 Jul 2026" },
  { subject: "Operating Systems", date: "03 Aug 2026" },
  { subject: "Placement Aptitude", date: "08 Aug 2026" },
];

const priorities = [
  { subject: "Data Structures", priority: "High", progress: 90 },
  { subject: "DBMS", priority: "High", progress: 82 },
  { subject: "Operating Systems", priority: "Medium", progress: 68 },
  { subject: "Computer Networks", priority: "Medium", progress: 60 },
];

const goals = [
  "Complete DBMS Module 5",
  "Solve 5 DSA Problems",
  "Practice 25 Aptitude Questions",
  "Read OS Notes for 45 Minutes",
];

const calendar = [
  ["1", "Study"],
  ["2", "Study"],
  ["3", "Mock"],
  ["4", "Rest"],
  ["5", "Study"],
  ["6", "Study"],
  ["7", "Exam"],
  ["8", "Study"],
  ["9", "Study"],
  ["10", "Mock"],
  ["11", "Study"],
  ["12", "Revision"],
  ["13", "Study"],
  ["14", "Study"],
];

export default function Planner() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl"
      >
        <h1 className="text-4xl font-bold text-white">Study Planner</h1>

        <p className="mt-3 max-w-3xl text-gray-400">
          Organize your daily learning, track weekly goals, manage exams, and
          follow AI-generated study recommendations for consistent academic
          improvement.
        </p>
      </motion.div>

      {/* Today */}
      <div className="grid gap-6 xl:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
        >
          <div className="mb-6 flex items-center gap-3">
            <Clock3 className="text-[#FF7A00]" />
            <h2 className="text-2xl font-semibold text-white">
              Today's Study Schedule
            </h2>
          </div>

          <div className="space-y-4">
            {todaySchedule.map((item) => (
              <div
                key={item.time}
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 p-4"
              >
                <div>
                  <p className="font-semibold text-white">{item.subject}</p>
                  <p className="text-sm text-gray-400">{item.time}</p>
                </div>

                <span
                  className={`rounded-full px-4 py-2 text-sm font-medium ${
                    item.status === "Completed"
                      ? "bg-green-500/10 text-green-400"
                      : item.status === "In Progress"
                      ? "bg-orange-500/10 text-orange-400"
                      : "bg-gray-700 text-gray-300"
                  }`}
                >
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 15 }}
          animate={{ opacity: 1, x: 0 }}
          className="rounded-3xl border border-orange-500/20 bg-gradient-to-br from-orange-500/10 to-transparent p-6 backdrop-blur-xl"
        >
          <div className="mb-6 flex items-center gap-3">
            <BrainCircuit className="text-[#FF7A00]" />
            <h2 className="text-2xl font-semibold text-white">
              AI Generated Study Plan
            </h2>
          </div>

          <p className="leading-8 text-gray-300">
            Focus on DBMS and Operating Systems this week. Your DSA performance
            is excellent, so allocate more time to networking concepts and
            aptitude preparation. Complete one mock test before the weekend and
            revise previously incorrect questions.
          </p>

          <button className="mt-6 rounded-xl bg-[#FF7A00] px-6 py-3 font-semibold text-white transition hover:bg-orange-600">
            Generate New Plan
          </button>
        </motion.div>
      </div>

      {/* Weekly Planner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
      >
        <div className="mb-6 flex items-center gap-3">
          <CalendarDays className="text-[#FF7A00]" />
          <h2 className="text-2xl font-semibold text-white">
            Weekly Study Planner
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-7">
          {weeklyPlanner.map((day) => (
            <div
              key={day.day}
              className="rounded-2xl border border-white/10 bg-black/20 p-4"
            >
              <h3 className="font-semibold text-white">{day.day}</h3>
              <p className="mt-2 text-sm text-gray-400">{day.task}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Exams + Priorities */}
      <div className="grid gap-6 xl:grid-cols-2">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
        >
          <div className="mb-6 flex items-center gap-3">
            <GraduationCap className="text-[#FF7A00]" />
            <h2 className="text-2xl font-semibold text-white">
              Upcoming Exams
            </h2>
          </div>

          <div className="space-y-4">
            {exams.map((exam) => (
              <div
                key={exam.subject}
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 p-4"
              >
                <div>
                  <h3 className="font-semibold text-white">{exam.subject}</h3>
                  <p className="text-sm text-gray-400">{exam.date}</p>
                </div>

                <Target className="text-[#FF7A00]" />
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
        >
          <div className="mb-6 flex items-center gap-3">
            <TrendingUp className="text-[#FF7A00]" />
            <h2 className="text-2xl font-semibold text-white">
              Subject Priorities
            </h2>
          </div>

          <div className="space-y-5">
            {priorities.map((item) => (
              <div key={item.subject}>
                <div className="mb-2 flex justify-between">
                  <span className="text-white">{item.subject}</span>
                  <span className="text-sm text-orange-400">
                    {item.priority}
                  </span>
                </div>

                <div className="h-3 rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-[#FF7A00]"
                    style={{ width: `${item.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Progress + Goals + Tips */}
      <div className="grid gap-6 xl:grid-cols-3">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
        >
          <h2 className="mb-6 flex items-center gap-3 text-2xl font-semibold text-white">
            <BookOpen className="text-[#FF7A00]" />
            Study Progress
          </h2>

          <div className="flex justify-center">
            <div className="relative flex h-44 w-44 items-center justify-center rounded-full border-8 border-orange-500/20">
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "conic-gradient(#FF7A00 0deg 288deg, rgba(255,255,255,0.08) 288deg 360deg)",
                }}
              />

              <div className="absolute flex h-32 w-32 items-center justify-center rounded-full bg-[#0D1117]">
                <span className="text-3xl font-bold text-white">80%</span>
              </div>
            </div>
          </div>

          <p className="mt-6 text-center text-gray-400">
            Weekly study target completed.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
        >
          <h2 className="mb-6 flex items-center gap-3 text-2xl font-semibold text-white">
            <CheckCircle2 className="text-[#FF7A00]" />
            Daily Goals
          </h2>

          <div className="space-y-4">
            {goals.map((goal) => (
              <label
                key={goal}
                className="flex cursor-pointer items-center gap-3 rounded-xl border border-white/10 bg-black/20 p-4"
              >
                <input
                  type="checkbox"
                  className="h-5 w-5 accent-orange-500"
                />
                <span className="text-gray-300">{goal}</span>
              </label>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="rounded-3xl border border-orange-500/20 bg-gradient-to-br from-orange-500/10 to-transparent p-6 backdrop-blur-xl"
        >
          <h2 className="mb-6 flex items-center gap-3 text-2xl font-semibold text-white">
            <Lightbulb className="text-[#FF7A00]" />
            Productivity Tips
          </h2>

          <ul className="space-y-4 text-gray-300">
            <li>• Use the Pomodoro technique.</li>
            <li>• Revise before sleeping.</li>
            <li>• Practice coding daily.</li>
            <li>• Take short breaks every hour.</li>
            <li>• Avoid multitasking while studying.</li>
          </ul>
        </motion.div>
      </div>

      {/* Calendar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
      >
        <div className="mb-6 flex items-center gap-3">
          <CalendarDays className="text-[#FF7A00]" />
          <h2 className="text-2xl font-semibold text-white">
            Study Calendar Overview
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-7">
          {calendar.map(([day, type]) => (
            <div
              key={day}
              className="rounded-2xl border border-white/10 bg-black/20 p-4 text-center"
            >
              <h3 className="text-xl font-bold text-white">{day}</h3>

              <span
                className={`mt-3 inline-block rounded-full px-3 py-1 text-xs font-semibold ${
                  type === "Exam"
                    ? "bg-red-500/10 text-red-400"
                    : type === "Mock"
                    ? "bg-blue-500/10 text-blue-400"
                    : type === "Revision"
                    ? "bg-yellow-500/10 text-yellow-400"
                    : type === "Rest"
                    ? "bg-green-500/10 text-green-400"
                    : "bg-orange-500/10 text-orange-400"
                }`}
              >
                {type}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}