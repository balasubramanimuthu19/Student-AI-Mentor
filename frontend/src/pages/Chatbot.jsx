// src/pages/Chatbot.jsx

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Bot,
  User,
  Send,
  Paperclip,
  Trash2,
  BrainCircuit,
  Sparkles,
  GraduationCap,
  BarChart3,
  Briefcase,
  MessageCircle,
  Clock3,
} from "lucide-react";

const initialMessages = [
  {
    id: 1,
    sender: "ai",
    text: "Hello! I'm your AI Mentor. I can help you analyze marks, generate study plans, recommend internships, and answer career questions.",
    time: "10:10 AM",
  },
  {
    id: 2,
    sender: "user",
    text: "Can you help me improve my DBMS score?",
    time: "10:11 AM",
  },
  {
    id: 3,
    sender: "ai",
    text: "Absolutely! Based on your recent performance, spend 45 minutes daily revising SQL queries, normalization, and transactions. Solve previous university questions every weekend.",
    time: "10:11 AM",
  },
];

const history = [
  "Study Plan Discussion",
  "Semester Analysis",
  "Internship Guidance",
  "Placement Preparation",
  "Resume Review",
];

const prompts = [
  "Generate a study plan",
  "Analyze my marks",
  "Recommend internships",
  "Give career advice",
];

export default function Chatbot() {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");
  const chatRef = useRef(null);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        sender: "user",
        text: input,
        time: "Now",
      },
    ]);

    setInput("");
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
      >
        <h1 className="text-4xl font-bold text-white">
          AI Mentor Chatbot
        </h1>

        <p className="mt-3 max-w-3xl text-gray-400">
          Chat with your AI Mentor to receive personalized study plans,
          performance insights, internship recommendations, and career
          guidance.
        </p>
      </motion.div>

      {/* AI Profile */}
      <motion.div
        whileHover={{ y: -4 }}
        className="rounded-2xl border border-orange-500/20 bg-gradient-to-r from-orange-500/10 to-transparent p-6"
      >
        <div className="flex flex-col gap-5 md:flex-row md:items-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-orange-500/20">
            <Bot className="text-[#FF7A00]" size={38} />
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white">
              AI Student Mentor
            </h2>

            <p className="mt-2 text-gray-300">
              Available 24/7 for academic guidance, career advice,
              performance analysis, and internship recommendations.
            </p>
          </div>
        </div>
      </motion.div>

      <div className="grid gap-6 xl:grid-cols-4">
        {/* Sidebar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
        >
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-white">
              Chat History
            </h2>

            <button className="rounded-lg bg-red-500/10 p-2 hover:bg-red-500/20">
              <Trash2 className="text-red-400" size={18} />
            </button>
          </div>

          <div className="space-y-3">
            {history.map((item) => (
              <button
                key={item}
                className="w-full rounded-xl border border-white/10 bg-black/20 p-4 text-left text-gray-300 transition hover:border-orange-500 hover:bg-orange-500/10"
              >
                <div className="flex items-center gap-3">
                  <MessageCircle
                    className="text-[#FF7A00]"
                    size={18}
                  />

                  <span>{item}</span>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-8">
            <h3 className="mb-4 text-lg font-semibold text-white">
              Quick Actions
            </h3>

            <div className="space-y-3">
              <button className="flex w-full items-center gap-3 rounded-xl bg-white/5 p-3 text-gray-300 transition hover:bg-orange-500/10">
                <GraduationCap size={18} className="text-[#FF7A00]" />
                Generate Study Plan
              </button>

              <button className="flex w-full items-center gap-3 rounded-xl bg-white/5 p-3 text-gray-300 transition hover:bg-orange-500/10">
                <BarChart3 size={18} className="text-[#FF7A00]" />
                Analyze Marks
              </button>

              <button className="flex w-full items-center gap-3 rounded-xl bg-white/5 p-3 text-gray-300 transition hover:bg-orange-500/10">
                <Briefcase size={18} className="text-[#FF7A00]" />
                Recommend Internship
              </button>

              <button className="flex w-full items-center gap-3 rounded-xl bg-white/5 p-3 text-gray-300 transition hover:bg-orange-500/10">
                <Sparkles size={18} className="text-[#FF7A00]" />
                Ask Career Advice
              </button>
            </div>
          </div>
        </motion.div>

        {/* Chat Window */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex h-[750px] flex-col rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl xl:col-span-3"
        >
          {/* Messages */}
          <div
            ref={chatRef}
            className="flex-1 space-y-6 overflow-y-auto p-6"
          >
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex ${
                  message.sender === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                <div
                  className={`flex max-w-xl gap-3 ${
                    message.sender === "user"
                      ? "flex-row-reverse"
                      : ""
                  }`}
                >
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-full ${
                      message.sender === "user"
                        ? "bg-orange-500"
                        : "bg-white/10"
                    }`}
                  >
                    {message.sender === "user" ? (
                      <User size={20} />
                    ) : (
                      <Bot
                        size={20}
                        className="text-[#FF7A00]"
                      />
                    )}
                  </div>

                  <div
                    className={`rounded-2xl px-5 py-4 ${
                      message.sender === "user"
                        ? "bg-[#FF7A00] text-white"
                        : "border border-white/10 bg-black/20 text-gray-200"
                    }`}
                  >
                    <p>{message.text}</p>

                    <div className="mt-3 flex items-center gap-2 text-xs opacity-70">
                      <Clock3 size={12} />
                      {message.time}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Typing */}
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{
                repeat: Infinity,
                duration: 1.4,
              }}
              className="flex items-center gap-3"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                <Bot className="text-[#FF7A00]" size={18} />
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 px-5 py-4">
                <div className="flex gap-2">
                  <span className="h-2 w-2 rounded-full bg-orange-500" />
                  <span className="h-2 w-2 rounded-full bg-orange-500" />
                  <span className="h-2 w-2 rounded-full bg-orange-500" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Suggested Prompts */}
          <div className="border-t border-white/10 px-6 py-5">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-400">
              Suggested Prompts
            </h3>

            <div className="mb-5 flex flex-wrap gap-3">
              {prompts.map((prompt) => (
                <button
                  key={prompt}
                  onClick={() => setInput(prompt)}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 transition hover:bg-orange-500 hover:text-white"
                >
                  {prompt}
                </button>
              ))}
            </div>

            {/* Input */}
            <div className="flex items-center gap-3">
              <button className="rounded-xl border border-white/10 bg-white/5 p-3 text-gray-300 hover:bg-orange-500/10">
                <Paperclip size={20} />
              </button>

              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) =>
                  e.key === "Enter" && handleSend()
                }
                placeholder="Ask your AI Mentor anything..."
                className="flex-1 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-white outline-none placeholder:text-gray-500"
              />

              <button
                onClick={handleSend}
                className="rounded-xl bg-[#FF7A00] p-3 text-white transition hover:bg-orange-600"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}