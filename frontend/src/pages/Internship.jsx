// src/pages/Internship.jsx

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Briefcase,
  Bookmark,
  MapPin,
  Clock3,
  DollarSign,
  Building2,
  Sparkles,
  FileText,
  BrainCircuit,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const stats = [
  {
    title: "Total Opportunities",
    value: "248",
    icon: Briefcase,
  },
  {
    title: "Applied",
    value: "12",
    icon: CheckCircle2,
  },
  {
    title: "Saved",
    value: "26",
    icon: Bookmark,
  },
  {
    title: "AI Match Score",
    value: "92%",
    icon: BrainCircuit,
  },
];

const internships = [
  {
    company: "Google",
    title: "Frontend Developer Intern",
    location: "Bangalore",
    type: "Remote",
    stipend: "₹35,000/month",
    duration: "6 Months",
    skills: ["React", "JavaScript", "Tailwind"],
    deadline: "30 Jul 2026",
    match: 96,
  },
  {
    company: "Microsoft",
    title: "Software Engineer Intern",
    location: "Hyderabad",
    type: "Hybrid",
    stipend: "₹45,000/month",
    duration: "6 Months",
    skills: ["Java", "DSA", "SQL"],
    deadline: "02 Aug 2026",
    match: 91,
  },
  {
    company: "Amazon",
    title: "Full Stack Intern",
    location: "Chennai",
    type: "Onsite",
    stipend: "₹40,000/month",
    duration: "5 Months",
    skills: ["React", "Node.js", "MongoDB"],
    deadline: "05 Aug 2026",
    match: 88,
  },
  {
    company: "Zoho",
    title: "Web Developer Intern",
    location: "Chennai",
    type: "Hybrid",
    stipend: "₹20,000/month",
    duration: "4 Months",
    skills: ["HTML", "CSS", "React"],
    deadline: "10 Aug 2026",
    match: 90,
  },
];

const viewed = [
  "Google Frontend Intern",
  "Amazon Full Stack Intern",
  "Zoho Web Developer",
];

export default function Internship() {
  const [search, setSearch] = useState("");

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
      >
        <h1 className="text-4xl font-bold text-white">
          Internship Opportunities
        </h1>

        <p className="mt-3 max-w-3xl text-gray-400">
          Discover internships tailored to your skills with AI-powered matching,
          track applications, improve your resume, and prepare for your dream
          career.
        </p>
      </motion.div>

      {/* Search */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-xl">
          <Search size={18} className="text-gray-400" />

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search internships..."
            className="bg-transparent text-white placeholder:text-gray-500 outline-none w-72"
          />
        </div>

        <div className="flex flex-wrap gap-3">
          {["Remote", "Hybrid", "Onsite", "Paid"].map((item) => (
            <button
              key={item}
              className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-gray-300 transition hover:bg-[#FF7A00] hover:text-white"
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Banner */}
      <motion.div
        whileHover={{ scale: 1.01 }}
        className="overflow-hidden rounded-2xl border border-orange-500/20 bg-gradient-to-r from-orange-500/20 via-orange-500/10 to-transparent p-8"
      >
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-orange-400 font-semibold uppercase tracking-wider">
              Featured Opportunity
            </p>

            <h2 className="mt-2 text-3xl font-bold text-white">
              Google Frontend Internship 2026
            </h2>

            <p className="mt-3 text-gray-300 max-w-2xl">
              Excellent opportunity for React developers with AI match score
              above 95%. Applications closing soon.
            </p>
          </div>

          <button className="rounded-xl bg-[#FF7A00] px-6 py-3 font-semibold text-white">
            Apply Now
          </button>
        </div>
      </motion.div>

      {/* Stats */}
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <motion.div
              whileHover={{ y: -6 }}
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400">{item.title}</p>

                  <h2 className="mt-3 text-3xl font-bold text-white">
                    {item.value}
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

      {/* Internship Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {internships
          .filter((job) =>
            job.title.toLowerCase().includes(search.toLowerCase()) ||
            job.company.toLowerCase().includes(search.toLowerCase())
          )
          .map((job) => (
            <motion.div
              whileHover={{ y: -6 }}
              key={job.company + job.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            >
              <div className="flex items-start justify-between">
                <div className="flex gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-orange-500/10">
                    <Building2 className="text-[#FF7A00]" />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {job.company}
                    </h3>

                    <p className="text-gray-400">
                      {job.title}
                    </p>
                  </div>
                </div>

                <button className="rounded-xl bg-white/5 p-3 hover:bg-orange-500/20">
                  <Bookmark className="text-orange-400" size={18} />
                </button>
              </div>

              <div className="mt-6 space-y-3 text-gray-300">
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  {job.location}
                </div>

                <div className="flex items-center gap-2">
                  <Briefcase size={16} />
                  {job.type}
                </div>

                <div className="flex items-center gap-2">
                  <DollarSign size={16} />
                  {job.stipend}
                </div>

                <div className="flex items-center gap-2">
                  <Clock3 size={16} />
                  {job.duration}
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {job.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-orange-500/10 px-3 py-1 text-xs text-orange-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-500">
                    Deadline
                  </p>

                  <p className="text-white">
                    {job.deadline}
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-xs text-gray-500">
                    AI Match
                  </p>

                  <p className="font-semibold text-green-400">
                    {job.match}%
                  </p>
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <button className="flex-1 rounded-xl bg-[#FF7A00] py-3 font-semibold text-white">
                  Apply
                </button>

                <button className="rounded-xl border border-white/10 bg-white/5 px-5 text-white">
                  Save
                </button>
              </div>
            </motion.div>
          ))}
      </div>

      {/* Bottom Grid */}
      <div className="grid gap-6 xl:grid-cols-2">
        <div className="space-y-6">
          <motion.div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <h2 className="mb-5 flex items-center gap-2 text-xl font-semibold text-white">
              <TrendingUp className="text-[#FF7A00]" />
              Recommended Skills
            </h2>

            <div className="flex flex-wrap gap-3">
              {[
                "React",
                "Node.js",
                "MongoDB",
                "Java",
                "DSA",
                "SQL",
                "Git",
                "Communication",
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-orange-500/10 px-4 py-2 text-sm text-orange-400"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <h2 className="mb-5 flex items-center gap-2 text-xl font-semibold text-white">
              <FileText className="text-[#FF7A00]" />
              Resume Tips
            </h2>

            <ul className="space-y-3 text-gray-300">
              <li>• Highlight React projects.</li>
              <li>• Add GitHub portfolio.</li>
              <li>• Quantify achievements.</li>
              <li>• Keep resume within one page.</li>
            </ul>
          </motion.div>
        </div>

        <div className="space-y-6">
          <motion.div className="rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/10 to-transparent p-6 backdrop-blur-xl">
            <h2 className="mb-5 flex items-center gap-2 text-xl font-semibold text-white">
              <Sparkles className="text-[#FF7A00]" />
              AI Career Recommendation
            </h2>

            <p className="leading-8 text-gray-300">
              Based on your academic performance and React projects, AI
              recommends focusing on Frontend Development, Full Stack
              Engineering, and Software Development internships. Strengthen DSA
              and system design for higher placement opportunities.
            </p>
          </motion.div>

          <motion.div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <h2 className="mb-5 text-xl font-semibold text-white">
              Application Progress
            </h2>

            <div className="space-y-5">
              {[
                "Profile Completed",
                "Resume Uploaded",
                "Applied to Companies",
                "Interview Scheduled",
              ].map((step, index) => (
                <div
                  key={step}
                  className="flex items-center gap-4"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500">
                    {index + 1}
                  </div>

                  <span className="text-gray-300">
                    {step}
                  </span>

                  {index !== 3 && (
                    <ArrowRight className="ml-auto text-gray-500" />
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <h2 className="mb-5 text-xl font-semibold text-white">
              Recently Viewed
            </h2>

            <div className="space-y-3">
              {viewed.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-white/10 bg-black/20 p-4 text-gray-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}