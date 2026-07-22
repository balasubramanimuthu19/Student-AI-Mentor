// src/pages/Dashboard.jsx

import { motion } from "framer-motion";
import {
  GraduationCap,
  CalendarCheck,
  CheckCircle2,
  BrainCircuit,
  Upload,
  Briefcase,
  Sparkles,
  BookOpen,
} from "lucide-react";

import StatCard from "../components/StatCard";
import ChartCard from "../components/ChartCard";

const performanceData = [
  { name: "Jan", value: 68 },
  { name: "Feb", value: 72 },
  { name: "Mar", value: 75 },
  { name: "Apr", value: 78 },
  { name: "May", value: 81 },
  { name: "Jun", value: 84 },
  { name: "Jul", value: 89 },
];

const subjectData = [
  { name: "Math", value: 92 },
  { name: "DSA", value: 88 },
  { name: "DBMS", value: 84 },
  { name: "OS", value: 81 },
  { name: "CN", value: 79 },
];

const uploads = [
  {
    title: "Semester 5 Internal Marks",
    date: "Today • 10:45 AM",
  },
  {
    title: "Attendance Report",
    date: "Yesterday • 05:10 PM",
  },
  {
    title: "DSA Assignment",
    date: "2 Days Ago",
  },
];

const internships = [
  "Frontend Developer Intern",
  "React.js Intern",
  "AI/ML Internship",
  "Software Engineer Intern",
];

export default function Dashboard() {
  const hour = new Date().getHours();

  const greeting =
    hour < 12
      ? "Good Morning 👋"
      : hour < 18
      ? "Good Afternoon ☀️"
      : "Good Evening 🌙";

  return (
    <div className="space-y-8">
      {/* Welcome */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl"
      >
        <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#FF7A00]/10 blur-3xl" />

        <div className="relative flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-widest text-orange-400">
              Student AI Mentor
            </p>

            <h1 className="mt-2 text-4xl font-bold text-white">
              {greeting}
            </h1>

            <p className="mt-3 max-w-2xl text-gray-400">
              Monitor your academic progress, analyze your marks, receive AI
              recommendations, and stay ahead with your personalized study
              dashboard.
            </p>
          </div>

          <div className="rounded-3xl border border-orange-500/20 bg-orange-500/10 p-6">
            <BrainCircuit className="h-14 w-14 text-orange-500" />
          </div>
        </div>
      </motion.div>

      {/* Stats */}
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Average Marks"
          value={89}
          change="+5.2%"
          positive={true}
          icon={GraduationCap}
        />

        <StatCard
          title="Attendance"
          value={96}
          change="+1.8%"
          positive={true}
          icon={CalendarCheck}
        />

        <StatCard
          title="Completed Tasks"
          value={34}
          change="+8.4%"
          positive={true}
          icon={CheckCircle2}
        />

        <StatCard
          title="AI Score Prediction"
          value={94}
          change="+3.1%"
          positive={true}
          icon={BrainCircuit}
        />
      </div>

      {/* Charts */}
      <div className="grid gap-6 xl:grid-cols-2">
        <ChartCard
          title="Performance Trend"
          subtitle="Overall academic progress"
          type="line"
          data={performanceData}
          dataKey="value"
          xKey="name"
        />

        <ChartCard
          title="Subject-wise Performance"
          subtitle="Current semester overview"
          type="bar"
          data={subjectData}
          dataKey="value"
          xKey="name"
        />
      </div>

      {/* Bottom Grid */}
      <div className="grid gap-6 xl:grid-cols-2">
        {/* Today's Study Plan */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl"
        >
          <div className="mb-6 flex items-center gap-3">
            <BookOpen className="text-orange-500" />
            <h2 className="text-xl font-semibold text-white">
              Today's Study Plan
            </h2>
          </div>

          <div className="space-y-4">
            {[
              "Revise Data Structures",
              "Complete DBMS Assignment",
              "Practice Aptitude Questions",
              "Attend AI Mentor Session",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 p-4"
              >
                <CheckCircle2 className="text-green-400" size={20} />
                <span className="text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* AI Recommendation */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="rounded-3xl border border-orange-500/20 bg-gradient-to-br from-orange-500/10 to-transparent p-6 backdrop-blur-2xl"
        >
          <div className="mb-6 flex items-center gap-3">
            <Sparkles className="text-orange-500" />
            <h2 className="text-xl font-semibold text-white">
              AI Recommendation
            </h2>
          </div>

          <p className="leading-8 text-gray-300">
            Your Mathematics and DSA scores are consistently improving.
            Strengthen Computer Networks and Operating Systems this week.
            Maintain your attendance above 95% to maximize your semester
            performance prediction.
          </p>

          <button className="mt-6 rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600">
            Generate New Study Plan
          </button>
        </motion.div>
      </div>

      {/* Recent Uploads + Internship */}
      <div className="grid gap-6 xl:grid-cols-2">
        {/* Uploads */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl"
        >
          <div className="mb-6 flex items-center gap-3">
            <Upload className="text-orange-500" />
            <h2 className="text-xl font-semibold text-white">
              Recent Uploads
            </h2>
          </div>

          <div className="space-y-4">
            {uploads.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-black/20 p-4"
              >
                <h3 className="font-medium text-white">{item.title}</h3>
                <p className="mt-1 text-sm text-gray-400">{item.date}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Internship */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl"
        >
          <div className="mb-6 flex items-center gap-3">
            <Briefcase className="text-orange-500" />
            <h2 className="text-xl font-semibold text-white">
              Internship Recommendations
            </h2>
          </div>

          <div className="space-y-4">
            {internships.map((job) => (
              <div
                key={job}
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 p-4"
              >
                <span className="text-gray-300">{job}</span>

                <button className="rounded-lg bg-orange-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-600">
                  View
                </button>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}