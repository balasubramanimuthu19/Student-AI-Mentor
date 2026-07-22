// src/components/ChartCard.jsx

import { motion } from "framer-motion";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

export default function ChartCard({
  title,
  subtitle,
  type = "line",
  data = [],
  dataKey = "value",
  xKey = "name",
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        y: -6,
        transition: { duration: 0.2 },
      }}
      className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl"
    >
      {/* Glow */}
      <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-[#FF7A00]/10 blur-3xl" />

      {/* Header */}
      <div className="relative mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-white">{title}</h2>

          <p className="mt-1 text-sm text-gray-400">{subtitle}</p>
        </div>

        <div className="h-3 w-3 rounded-full bg-[#FF7A00] shadow-[0_0_20px_#FF7A00]" />
      </div>

      {/* Chart */}
      <div className="relative h-[320px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          {type === "bar" ? (
            <BarChart data={data}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="rgba(255,255,255,0.06)"
              />

              <XAxis
                dataKey={xKey}
                tick={{ fill: "#9CA3AF", fontSize: 12 }}
                axisLine={false}
                tickLine={false}
              />

              <YAxis
                tick={{ fill: "#9CA3AF", fontSize: 12 }}
                axisLine={false}
                tickLine={false}
              />

              <Tooltip
                contentStyle={{
                  background: "#111827",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "14px",
                  color: "#fff",
                }}
                cursor={{
                  fill: "rgba(255,122,0,0.08)",
                }}
              />

              <Bar
                dataKey={dataKey}
                radius={[10, 10, 0, 0]}
                fill="#FF7A00"
                animationDuration={900}
              />
            </BarChart>
          ) : (
            <LineChart data={data}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="rgba(255,255,255,0.06)"
              />

              <XAxis
                dataKey={xKey}
                tick={{ fill: "#9CA3AF", fontSize: 12 }}
                axisLine={false}
                tickLine={false}
              />

              <YAxis
                tick={{ fill: "#9CA3AF", fontSize: 12 }}
                axisLine={false}
                tickLine={false}
              />

              <Tooltip
                contentStyle={{
                  background: "#111827",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "14px",
                  color: "#fff",
                }}
              />

              <Line
                type="monotone"
                dataKey={dataKey}
                stroke="#FF7A00"
                strokeWidth={3}
                dot={{
                  fill: "#FF7A00",
                  r: 4,
                  strokeWidth: 2,
                  stroke: "#0D1117",
                }}
                activeDot={{
                  r: 7,
                  fill: "#FF7A00",
                }}
                animationDuration={900}
              />
            </LineChart>
          )}
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}