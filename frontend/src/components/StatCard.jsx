// src/components/StatCard.jsx

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TrendingUp, TrendingDown } from "lucide-react";

export default function StatCard({
  title,
  value,
  icon: Icon,
  change,
  positive = true,
}) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const target = Number(value);

    if (isNaN(target)) {
      setDisplayValue(value);
      return;
    }

    let start = 0;
    const duration = 1200;
    const frameRate = 1000 / 60;
    const totalFrames = Math.round(duration / frameRate);
    const increment = target / totalFrames;

    const counter = setInterval(() => {
      start += increment;

      if (start >= target) {
        setDisplayValue(target);
        clearInterval(counter);
      } else {
        setDisplayValue(Math.floor(start));
      }
    }, frameRate);

    return () => clearInterval(counter);
  }, [value]);

  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: 0.25,
      }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl"
    >
      {/* Orange Glow */}
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#FF7A00]/10 blur-3xl transition-all duration-500 group-hover:bg-[#FF7A00]/20" />

      {/* Header */}
      <div className="relative flex items-start justify-between">
        <div>
          <p className="text-sm font-medium tracking-wide text-gray-400">
            {title}
          </p>

          <h2 className="mt-3 text-3xl font-bold text-white">
            {typeof value === "number" ? displayValue : value}
          </h2>
        </div>

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#FF7A00]/20 bg-[#FF7A00]/10">
          {Icon && <Icon size={28} className="text-[#FF7A00]" />}
        </div>
      </div>

      {/* Footer */}
      <div className="relative mt-6 flex items-center gap-2">
        {positive ? (
          <TrendingUp size={18} className="text-green-400" />
        ) : (
          <TrendingDown size={18} className="text-red-400" />
        )}

        <span
          className={`text-sm font-semibold ${
            positive ? "text-green-400" : "text-red-400"
          }`}
        >
          {change}
        </span>

        <span className="text-sm text-gray-500">vs last month</span>
      </div>
    </motion.div>
  );
}