// src/pages/Tasks.jsx

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  Clock3,
  ListTodo,
  TrendingUp,
  Plus,
  Search,
  Calendar,
  Sparkles,
  X,
} from "lucide-react";

const tasksData = [
  {
    id: 1,
    title: "Complete DBMS Assignment",
    category: "DBMS",
    priority: "High",
    due: "Today",
    completed: false,
  },
  {
    id: 2,
    title: "Solve 5 DSA Problems",
    category: "DSA",
    priority: "High",
    due: "Today",
    completed: true,
  },
  {
    id: 3,
    title: "Revise Operating Systems",
    category: "OS",
    priority: "Medium",
    due: "Tomorrow",
    completed: false,
  },
  {
    id: 4,
    title: "Practice Aptitude",
    category: "Placement",
    priority: "Medium",
    due: "Friday",
    completed: true,
  },
  {
    id: 5,
    title: "React Dashboard Improvements",
    category: "Project",
    priority: "Low",
    due: "Saturday",
    completed: false,
  },
];

const weeklyTasks = [
  { day: "Mon", task: "DSA Practice" },
  { day: "Tue", task: "DBMS Revision" },
  { day: "Wed", task: "OS Concepts" },
  { day: "Thu", task: "CN Notes" },
  { day: "Fri", task: "Mock Test" },
  { day: "Sat", task: "React Project" },
  { day: "Sun", task: "Weekly Revision" },
];

const completedHistory = [
  "Arrays & Strings Assignment",
  "Computer Networks Quiz",
  "Mini Project Documentation",
];

const deadlines = [
  { title: "DBMS Internal", date: "28 Jul" },
  { title: "OS Assignment", date: "30 Jul" },
  { title: "Placement Mock Test", date: "02 Aug" },
];

export default function Tasks() {
  const [showModal, setShowModal] = useState(false);
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filteredTasks = useMemo(() => {
    return tasksData.filter((task) => {
      const matchesSearch = task.title
        .toLowerCase()
        .includes(search.toLowerCase());

      if (filter === "Pending")
        return !task.completed && matchesSearch;

      if (filter === "Completed")
        return task.completed && matchesSearch;

      return matchesSearch;
    });
  }, [filter, search]);

  const total = tasksData.length;
  const completed = tasksData.filter((t) => t.completed).length;
  const pending = total - completed;
  const completion = Math.round((completed / total) * 100);

  const priorityColor = (priority) => {
    if (priority === "High")
      return "bg-red-500/10 text-red-400";
    if (priority === "Medium")
      return "bg-yellow-500/10 text-yellow-400";
    return "bg-green-500/10 text-green-400";
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
      >
        <h1 className="text-4xl font-bold text-white">
          Daily Tasks
        </h1>

        <p className="mt-3 max-w-3xl text-gray-400">
          Organize your daily academic activities, monitor progress,
          manage priorities and stay productive with AI-powered task
          recommendations.
        </p>
      </motion.div>

      {/* Summary */}
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {[
          {
            title: "Total Tasks",
            value: total,
            icon: ListTodo,
          },
          {
            title: "Completed",
            value: completed,
            icon: CheckCircle2,
          },
          {
            title: "Pending",
            value: pending,
            icon: Clock3,
          },
          {
            title: "Completion",
            value: `${completion}%`,
            icon: TrendingUp,
          },
        ].map((card) => {
          const Icon = card.icon;

          return (
            <motion.div
              whileHover={{ y: -6 }}
              key={card.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400">
                    {card.title}
                  </p>

                  <h2 className="mt-3 text-3xl font-bold text-white">
                    {card.value}
                  </h2>
                </div>

                <div className="rounded-xl bg-orange-500/10 p-4">
                  <Icon className="text-[#FF7A00]" />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Search + Filters */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-xl">
          <Search className="text-gray-400" size={18} />

          <input
            placeholder="Search tasks..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-transparent text-white outline-none placeholder:text-gray-500"
          />
        </div>

        <div className="flex flex-wrap gap-3">
          {["All", "Pending", "Completed"].map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className={`rounded-xl px-5 py-2 transition ${
                filter === item
                  ? "bg-[#FF7A00] text-white"
                  : "bg-white/5 text-gray-300 hover:bg-white/10"
              }`}
            >
              {item}
            </button>
          ))}

          <button
            onClick={() => setShowModal(true)}
            className="flex items-center gap-2 rounded-xl bg-[#FF7A00] px-5 py-2 text-white"
          >
            <Plus size={18} />
            Add Task
          </button>
        </div>
      </div>

      {/* Tasks */}
      <div className="grid gap-6 xl:grid-cols-2">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
        >
          <h2 className="mb-6 text-2xl font-semibold text-white">
            Today's Tasks
          </h2>

          <div className="space-y-4">
            {filteredTasks.map((task) => (
              <motion.div
                whileHover={{ scale: 1.01 }}
                key={task.id}
                className="rounded-2xl border border-white/10 bg-black/20 p-4"
              >
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      defaultChecked={task.completed}
                      className="mt-1 h-5 w-5 accent-orange-500"
                    />

                    <div>
                      <h3 className="font-semibold text-white">
                        {task.title}
                      </h3>

                      <div className="mt-3 flex flex-wrap gap-2">
                        <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs text-blue-400">
                          {task.category}
                        </span>

                        <span
                          className={`rounded-full px-3 py-1 text-xs ${priorityColor(
                            task.priority
                          )}`}
                        >
                          {task.priority}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-gray-400">
                    <Calendar size={16} />
                    {task.due}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
          >
            <h2 className="mb-5 text-xl font-semibold text-white">
              Weekly Tasks Board
            </h2>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 xl:grid-cols-7">
              {weeklyTasks.map((item) => (
                <div
                  key={item.day}
                  className="rounded-xl border border-white/10 bg-black/20 p-3 text-center"
                >
                  <h3 className="font-semibold text-white">
                    {item.day}
                  </h3>

                  <p className="mt-2 text-xs text-gray-400">
                    {item.task}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <h2 className="mb-5 text-xl font-semibold text-white">
              Priority Tasks
            </h2>

            <div className="space-y-3">
              {tasksData
                .filter((t) => t.priority === "High")
                .map((task) => (
                  <div
                    key={task.id}
                    className="rounded-xl bg-red-500/10 p-4 text-red-300"
                  >
                    {task.title}
                  </div>
                ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom */}
      <div className="grid gap-6 xl:grid-cols-2">
        <motion.div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <h2 className="mb-5 text-xl font-semibold text-white">
            Upcoming Deadlines
          </h2>

          <div className="space-y-4">
            {deadlines.map((item) => (
              <div
                key={item.title}
                className="flex items-center justify-between rounded-xl border border-white/10 bg-black/20 p-4"
              >
                <span className="text-white">
                  {item.title}
                </span>

                <span className="text-orange-400">
                  {item.date}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <h2 className="mb-5 text-xl font-semibold text-white">
            Completed Tasks History
          </h2>

          <div className="space-y-3">
            {completedHistory.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl bg-green-500/10 p-4"
              >
                <CheckCircle2 className="text-green-400" />

                <span className="text-gray-300">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Progress */}
      <motion.div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <div className="mb-4 flex justify-between">
          <span className="text-white font-semibold">
            Overall Progress
          </span>

          <span className="text-orange-400">
            {completion}%
          </span>
        </div>

        <div className="h-3 rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-[#FF7A00]"
            style={{ width: `${completion}%` }}
          />
        </div>
      </motion.div>

      {/* Productivity */}
      <div className="grid gap-6 xl:grid-cols-2">
        <motion.div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <h2 className="mb-5 text-xl font-semibold text-white">
            Productivity Statistics
          </h2>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl bg-black/20 p-4">
              <p className="text-gray-400">
                Focus Hours
              </p>
              <h3 className="mt-2 text-2xl font-bold text-white">
                6.5h
              </h3>
            </div>

            <div className="rounded-xl bg-black/20 p-4">
              <p className="text-gray-400">
                Efficiency
              </p>
              <h3 className="mt-2 text-2xl font-bold text-white">
                91%
              </h3>
            </div>

            <div className="rounded-xl bg-black/20 p-4">
              <p className="text-gray-400">
                Streak
              </p>
              <h3 className="mt-2 text-2xl font-bold text-white">
                12 Days
              </h3>
            </div>

            <div className="rounded-xl bg-black/20 p-4">
              <p className="text-gray-400">
                Tasks Today
              </p>
              <h3 className="mt-2 text-2xl font-bold text-white">
                {completed}/{total}
              </h3>
            </div>
          </div>
        </motion.div>

        <motion.div className="rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/10 to-transparent p-6 backdrop-blur-xl">
          <div className="mb-5 flex items-center gap-3">
            <Sparkles className="text-[#FF7A00]" />

            <h2 className="text-xl font-semibold text-white">
              AI Task Recommendation
            </h2>
          </div>

          <p className="leading-8 text-gray-300">
            Complete your DBMS assignment first, then spend one
            hour revising Operating Systems. Finish today's DSA
            practice before attempting aptitude questions to
            maximize learning efficiency.
          </p>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="fixed left-1/2 top-1/2 z-50 w-[92%] max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-white/10 bg-[#0D1117] p-6"
            >
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-2xl font-semibold text-white">
                  Add New Task
                </h2>

                <button
                  onClick={() => setShowModal(false)}
                  className="rounded-lg p-2 hover:bg-white/10"
                >
                  <X className="text-white" />
                </button>
              </div>

              <div className="space-y-4">
                <input
                  placeholder="Task Title"
                  className="w-full rounded-xl border border-white/10 bg-white/5 p-3 text-white outline-none"
                />

                <input
                  placeholder="Category"
                  className="w-full rounded-xl border border-white/10 bg-white/5 p-3 text-white outline-none"
                />

                <input
                  type="date"
                  className="w-full rounded-xl border border-white/10 bg-white/5 p-3 text-white outline-none"
                />

                <select className="w-full rounded-xl border border-white/10 bg-white/5 p-3 text-white outline-none">
                  <option>High</option>
                  <option>Medium</option>
                  <option>Low</option>
                </select>

                <button className="w-full rounded-xl bg-[#FF7A00] py-3 font-semibold text-white">
                  Create Task
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}