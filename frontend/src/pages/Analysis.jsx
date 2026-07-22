// src/pages/Analysis.jsx

import { motion } from "framer-motion";
import {
  Trophy,
  TrendingUp,
  TrendingDown,
  CalendarCheck,
  BrainCircuit,
  Target,
  Lightbulb,
  History,
} from "lucide-react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  RadialBarChart,
  RadialBar,
} from "recharts";

const summary = [
  {
    title: "Average Marks",
    value: "87%",
    icon: TrendingUp,
    color: "text-orange-500",
  },
  {
    title: "Highest Score",
    value: "98",
    icon: Trophy,
    color: "text-green-400",
  },
  {
    title: "Lowest Score",
    value: "68",
    icon: TrendingDown,
    color: "text-red-400",
  },
  {
    title: "Attendance",
    value: "96%",
    icon: CalendarCheck,
    color: "text-cyan-400",
  },
];

const subjectData = [
  { subject: "Math", marks: 94 },
  { subject: "DSA", marks: 90 },
  { subject: "DBMS", marks: 88 },
  { subject: "OS", marks: 82 },
  { subject: "CN", marks: 79 },
];

const trendData = [
  { month: "Jan", marks: 72 },
  { month: "Feb", marks: 75 },
  { month: "Mar", marks: 80 },
  { month: "Apr", marks: 83 },
  { month: "May", marks: 86 },
  { month: "Jun", marks: 88 },
  { month: "Jul", marks: 91 },
];

const scoreData = [
  {
    name: "Performance",
    value: 89,
    fill: "#FF7A00",
  },
];

const history = [
  {
    file: "Semester_5_Marks.xlsx",
    date: "Today",
    score: "89%",
  },
  {
    file: "Internal_Test.csv",
    date: "Yesterday",
    score: "86%",
  },
  {
    file: "Attendance_Report.xlsx",
    date: "3 Days Ago",
    score: "91%",
  },
];

export default function Analysis() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl"
      >
        <h1 className="text-4xl font-bold text-white">
          Student Performance Analysis
        </h1>

        <p className="mt-3 max-w-3xl text-gray-400">
          Analyze academic performance, identify strengths and weaknesses,
          visualize subject-wise trends, and receive AI-powered study insights.
        </p>
      </motion.div>

      {/* Summary */}
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {summary.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">{item.title}</p>

                  <h2 className="mt-3 text-3xl font-bold text-white">
                    {item.value}
                  </h2>
                </div>

                <div className="rounded-2xl bg-[#FF7A00]/10 p-4">
                  <Icon className={item.color} size={28} />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Charts */}
      <div className="grid gap-6 xl:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl"
        >
          <h2 className="mb-6 text-xl font-semibold text-white">
            Subject-wise Performance
          </h2>

          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={subjectData}>
                <CartesianGrid
                  stroke="rgba(255,255,255,0.08)"
                  strokeDasharray="3 3"
                />

                <XAxis
                  dataKey="subject"
                  tick={{ fill: "#9CA3AF" }}
                  axisLine={false}
                  tickLine={false}
                />

                <YAxis
                  tick={{ fill: "#9CA3AF" }}
                  axisLine={false}
                  tickLine={false}
                />

                <Tooltip />

                <Bar
                  dataKey="marks"
                  radius={[8, 8, 0, 0]}
                  fill="#FF7A00"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl"
        >
          <h2 className="mb-6 text-xl font-semibold text-white">
            Marks Trend
          </h2>

          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={trendData}>
                <CartesianGrid
                  stroke="rgba(255,255,255,0.08)"
                  strokeDasharray="3 3"
                />

                <XAxis
                  dataKey="month"
                  tick={{ fill: "#9CA3AF" }}
                  axisLine={false}
                  tickLine={false}
                />

                <YAxis
                  tick={{ fill: "#9CA3AF" }}
                  axisLine={false}
                  tickLine={false}
                />

                <Tooltip />

                <Line
                  type="monotone"
                  dataKey="marks"
                  stroke="#FF7A00"
                  strokeWidth={3}
                  dot={{ fill: "#FF7A00" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>

      {/* Cards */}
      <div className="grid gap-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="rounded-3xl border border-green-500/20 bg-green-500/5 p-6 backdrop-blur-xl"
        >
          <h2 className="mb-5 flex items-center gap-2 text-xl font-semibold text-white">
            <Target className="text-green-400" />
            Strengths
          </h2>

          <ul className="space-y-3 text-gray-300">
            <li>• Excellent Mathematics performance.</li>
            <li>• Strong logical reasoning.</li>
            <li>• High attendance consistency.</li>
            <li>• Excellent assignment completion rate.</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="rounded-3xl border border-red-500/20 bg-red-500/5 p-6 backdrop-blur-xl"
        >
          <h2 className="mb-5 flex items-center gap-2 text-xl font-semibold text-white">
            <TrendingDown className="text-red-400" />
            Weaknesses
          </h2>

          <ul className="space-y-3 text-gray-300">
            <li>• Computer Networks needs improvement.</li>
            <li>• Operating Systems revision required.</li>
            <li>• More mock tests recommended.</li>
            <li>• Improve practical coding speed.</li>
          </ul>
        </motion.div>
      </div>

      {/* AI + Study */}
      <div className="grid gap-6 xl:grid-cols-3">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="rounded-3xl border border-orange-500/20 bg-orange-500/10 p-6 backdrop-blur-xl xl:col-span-1"
        >
          <h2 className="mb-5 flex items-center gap-2 text-xl font-semibold text-white">
            <BrainCircuit className="text-orange-500" />
            AI Performance Insights
          </h2>

          <p className="leading-8 text-gray-300">
            AI predicts your semester score will remain above 90% if current
            study consistency continues. Focus on networking and operating
            systems to maximize placement readiness.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl xl:col-span-1"
        >
          <h2 className="mb-5 flex items-center gap-2 text-xl font-semibold text-white">
            <Lightbulb className="text-yellow-400" />
            Study Recommendations
          </h2>

          <ul className="space-y-3 text-gray-300">
            <li>• Practice DSA daily for 45 minutes.</li>
            <li>• Solve previous year DBMS questions.</li>
            <li>• Revise CN twice this week.</li>
            <li>• Take one aptitude mock test daily.</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
        >
          <h2 className="mb-5 text-xl font-semibold text-white">
            Overall Performance
          </h2>

          <div className="flex h-72 items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <RadialBarChart
                innerRadius="70%"
                outerRadius="100%"
                data={scoreData}
                startAngle={90}
                endAngle={-270}
              >
                <RadialBar
                  dataKey="value"
                  cornerRadius={15}
                  background
                />
                <text
                  x="50%"
                  y="50%"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="#ffffff"
                  fontSize="32"
                  fontWeight="bold"
                >
                  89%
                </text>
              </RadialBarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>

      {/* History */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl"
      >
        <div className="mb-6 flex items-center gap-3">
          <History className="text-orange-500" />

          <h2 className="text-2xl font-semibold text-white">
            Recent Analysis History
          </h2>
        </div>

        <div className="space-y-4">
          {history.map((item) => (
            <div
              key={item.file}
              className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-black/20 p-5 md:flex-row md:items-center md:justify-between"
            >
              <div>
                <h3 className="font-semibold text-white">{item.file}</h3>
                <p className="mt-1 text-sm text-gray-400">{item.date}</p>
              </div>

              <span className="rounded-full bg-orange-500/10 px-5 py-2 font-semibold text-orange-400">
                Score: {item.score}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}