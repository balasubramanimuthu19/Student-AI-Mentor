// src/pages/Login.jsx

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  BrainCircuit,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
} from "lucide-react";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleLogin = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!email.trim()) newErrors.email = "Email is required";
    if (!password.trim()) newErrors.password = "Password is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    setLoading(true);

   setTimeout(() => {
  setLoading(false);

  // Redirect to Dashboard
  navigate("/dashboard");

  // If you changed your routes to /dashboard, use:
  // navigate("/dashboard");

    }, 1800); 
  };

  return (
    <div className="min-h-screen bg-[#0D1117] text-white">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          className="relative hidden overflow-hidden lg:flex"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-transparent to-transparent" />

          <div className="relative z-10 flex w-full flex-col justify-center px-20">
            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#FF7A00] shadow-lg shadow-orange-500/30">
                <BrainCircuit size={34} />
              </div>

              <div>
                <h1 className="text-3xl font-bold">
                  Student AI Mentor
                </h1>

                <p className="text-gray-400">
                  Smart Academic Assistant
                </p>
              </div>
            </div>

            <h2 className="max-w-xl text-5xl font-bold leading-tight">
              Learn Smarter with
              <span className="text-[#FF7A00]">
                {" "}
                Artificial Intelligence
              </span>
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-gray-400">
              Analyze marks, generate AI study plans, organize
              schedules, discover internships, and accelerate your
              career—all from one intelligent dashboard.
            </p>

            <div className="mt-12 grid grid-cols-2 gap-5">
              {[
                "AI Performance Analysis",
                "Study Planner",
                "Internship Finder",
                "Career Guidance",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Section */}
        <div className="flex items-center justify-center px-6 py-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-2xl"
          >
            {/* Mobile Logo */}
            <div className="mb-8 flex items-center justify-center gap-3 lg:hidden">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FF7A00]">
                <BrainCircuit size={28} />
              </div>

              <div>
                <h2 className="text-xl font-bold">
                  Student AI Mentor
                </h2>
              </div>
            </div>

            <h2 className="text-3xl font-bold">
              Welcome Back 👋
            </h2>

            <p className="mt-2 text-gray-400">
              Login to continue your learning journey.
            </p>

            <form
              onSubmit={handleLogin}
              className="mt-8 space-y-6"
            >
              {/* Email */}
              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  Email
                </label>

                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-4">
                  <Mail
                    className="text-gray-500"
                    size={18}
                  />

                  <input
                    type="email"
                    value={email}
                    onChange={(e) =>
                      setEmail(e.target.value)
                    }
                    placeholder="Enter your email"
                    className="w-full bg-transparent py-4 outline-none placeholder:text-gray-500"
                  />
                </div>

                {errors.email && (
                  <p className="mt-2 text-sm text-red-400">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Password */}
              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  Password
                </label>

                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-4">
                  <Lock
                    className="text-gray-500"
                    size={18}
                  />

                  <input
                    type={
                      showPassword ? "text" : "password"
                    }
                    value={password}
                    onChange={(e) =>
                      setPassword(e.target.value)
                    }
                    placeholder="Enter your password"
                    className="w-full bg-transparent py-4 outline-none placeholder:text-gray-500"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                    className="text-gray-400 hover:text-white"
                  >
                    {showPassword ? (
                      <EyeOff size={20} />
                    ) : (
                      <Eye size={20} />
                    )}
                  </button>
                </div>

                {errors.password && (
                  <p className="mt-2 text-sm text-red-400">
                    {errors.password}
                  </p>
                )}
              </div>

              {/* Remember */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-3 text-sm text-gray-300">
                  <input
                    type="checkbox"
                    checked={remember}
                    onChange={() =>
                      setRemember(!remember)
                    }
                    className="accent-orange-500"
                  />

                  Remember Me
                </label>

                <button
                  type="button"
                  className="text-sm text-[#FF7A00] hover:underline"
                >
                  Forgot Password?
                </button>
              </div>

              {/* Login */}
              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-3 rounded-2xl bg-[#FF7A00] py-4 font-semibold transition hover:bg-orange-600 disabled:opacity-70"
              >
                {loading ? (
                  <>
                    <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    Logging in...
                  </>
                ) : (
                  <>
                    Login
                    <ArrowRight size={18} />
                  </>
                )}
              </button>
            </form>

            {/* Divider */}
            <div className="my-8 flex items-center">
              <div className="h-px flex-1 bg-white/10" />

              <span className="px-4 text-sm text-gray-500">
                or continue with
              </span>

              <div className="h-px flex-1 bg-white/10" />
            </div>

            
            {/* Google */}
             <button
               type="button"
               onClick={() => navigate("/dashboard")}
               className="flex w-full items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 py-4 transition hover:bg-white/10"
             >
              <svg
                width="20"
                height="20"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#FFC107"
                  d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12S17.4 12 24 12c3 0 5.8 1.1 7.9 3l5.7-5.7C34.1 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z"
                />
                <path
                  fill="#FF3D00"
                  d="M6.3 14.7l6.6 4.8C14.7 15 18.9 12 24 12c3 0 5.8 1.1 7.9 3l5.7-5.7C34.1 6.1 29.3 4 24 4c-7.7 0-14.3 4.3-17.7 10.7z"
                />
                <path
                  fill="#4CAF50"
                  d="M24 44c5.2 0 10-2 13.6-5.3l-6.3-5.2c-2.1 1.6-4.7 2.5-7.3 2.5-5.3 0-9.7-3.3-11.3-8l-6.5 5C9.6 39.5 16.2 44 24 44z"
                />
                <path
                  fill="#1976D2"
                  d="M43.6 20.5H42V20H24v8h11.3c-1.1 3.1-3.4 5.4-6.5 6.8l6.3 5.2C38.8 36.7 44 31 44 24c0-1.3-.1-2.4-.4-3.5z"
                />
              </svg>

              Continue with Google
            </button>

            {/* Register */}
            <p className="mt-8 text-center text-gray-400">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="font-semibold text-[#FF7A00] hover:underline"
              >
                Register
              </Link>
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}