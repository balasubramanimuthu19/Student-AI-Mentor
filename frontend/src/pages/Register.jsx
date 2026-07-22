// src/pages/Register.jsx

import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  BrainCircuit,
  User,
  Mail,
  School,
  GraduationCap,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
} from "lucide-react";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    college: "",
    department: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (field, value) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!form.name.trim()) newErrors.name = "Full name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    if (!form.college.trim()) newErrors.college = "College is required";
    if (!form.department.trim())
      newErrors.department = "Department is required";
    if (!form.password.trim())
      newErrors.password = "Password is required";
    if (!form.confirmPassword.trim())
      newErrors.confirmPassword = "Confirm your password";

    if (
      form.password &&
      form.confirmPassword &&
      form.password !== form.confirmPassword
    ) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!form.terms) {
      newErrors.terms = "Please accept the Terms & Conditions";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
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
                  AI Powered Learning Platform
                </p>
              </div>
            </div>

            <h2 className="max-w-xl text-5xl font-bold leading-tight">
              Build Your
              <span className="text-[#FF7A00]">
                {" "}
                Smart Learning Journey
              </span>
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-gray-400">
              Create your account to access AI-powered study plans,
              performance analysis, internship recommendations,
              productivity tracking, and career guidance.
            </p>

            <div className="mt-12 grid grid-cols-2 gap-5">
              {[
                "AI Study Planner",
                "Marks Analysis",
                "Internship Portal",
                "Career Mentor",
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
            className="w-full max-w-lg rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-2xl"
          >
            {/* Mobile Logo */}
            <div className="mb-8 flex items-center justify-center gap-3 lg:hidden">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FF7A00]">
                <BrainCircuit size={28} />
              </div>

              <h2 className="text-xl font-bold">
                Student AI Mentor
              </h2>
            </div>

            <h2 className="text-3xl font-bold">
              Create Account 🚀
            </h2>

            <p className="mt-2 text-gray-400">
              Join the AI-powered student success platform.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-5"
            >
              {/* Full Name */}
              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  Full Name
                </label>

                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-4">
                  <User size={18} className="text-gray-500" />

                  <input
                    type="text"
                    placeholder="Enter your full name"
                    value={form.name}
                    onChange={(e) =>
                      handleChange("name", e.target.value)
                    }
                    className="w-full bg-transparent py-4 outline-none placeholder:text-gray-500"
                  />
                </div>

                {errors.name && (
                  <p className="mt-2 text-sm text-red-400">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  Email
                </label>

                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-4">
                  <Mail size={18} className="text-gray-500" />

                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={form.email}
                    onChange={(e) =>
                      handleChange("email", e.target.value)
                    }
                    className="w-full bg-transparent py-4 outline-none placeholder:text-gray-500"
                  />
                </div>

                {errors.email && (
                  <p className="mt-2 text-sm text-red-400">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* College */}
              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  College
                </label>

                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-4">
                  <School size={18} className="text-gray-500" />

                  <input
                    type="text"
                    placeholder="Enter your college"
                    value={form.college}
                    onChange={(e) =>
                      handleChange("college", e.target.value)
                    }
                    className="w-full bg-transparent py-4 outline-none placeholder:text-gray-500"
                  />
                </div>

                {errors.college && (
                  <p className="mt-2 text-sm text-red-400">
                    {errors.college}
                  </p>
                )}
              </div>

              {/* Department */}
              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  Department
                </label>

                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-4">
                  <GraduationCap
                    size={18}
                    className="text-gray-500"
                  />

                  <input
                    type="text"
                    placeholder="Enter your department"
                    value={form.department}
                    onChange={(e) =>
                      handleChange(
                        "department",
                        e.target.value
                      )
                    }
                    className="w-full bg-transparent py-4 outline-none placeholder:text-gray-500"
                  />
                </div>

                {errors.department && (
                  <p className="mt-2 text-sm text-red-400">
                    {errors.department}
                  </p>
                )}
              </div>

              {/* Password */}
              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  Password
                </label>

                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-4">
                  <Lock size={18} className="text-gray-500" />

                  <input
                    type={
                      showPassword ? "text" : "password"
                    }
                    placeholder="Create password"
                    value={form.password}
                    onChange={(e) =>
                      handleChange(
                        "password",
                        e.target.value
                      )
                    }
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

              {/* Confirm Password */}
              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  Confirm Password
                </label>

                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-4">
                  <Lock size={18} className="text-gray-500" />

                  <input
                    type={
                      showConfirm ? "text" : "password"
                    }
                    placeholder="Confirm password"
                    value={form.confirmPassword}
                    onChange={(e) =>
                      handleChange(
                        "confirmPassword",
                        e.target.value
                      )
                    }
                    className="w-full bg-transparent py-4 outline-none placeholder:text-gray-500"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowConfirm(!showConfirm)
                    }
                    className="text-gray-400 hover:text-white"
                  >
                    {showConfirm ? (
                      <EyeOff size={20} />
                    ) : (
                      <Eye size={20} />
                    )}
                  </button>
                </div>

                {errors.confirmPassword && (
                  <p className="mt-2 text-sm text-red-400">
                    {errors.confirmPassword}
                  </p>
                )}
              </div>

              {/* Terms */}
              <div>
                <label className="flex items-start gap-3 text-sm text-gray-300">
                  <input
                    type="checkbox"
                    checked={form.terms}
                    onChange={(e) =>
                      handleChange(
                        "terms",
                        e.target.checked
                      )
                    }
                    className="mt-1 accent-orange-500"
                  />

                  <span>
                    I agree to the{" "}
                    <span className="text-[#FF7A00]">
                      Terms & Conditions
                    </span>{" "}
                    and Privacy Policy.
                  </span>
                </label>

                {errors.terms && (
                  <p className="mt-2 text-sm text-red-400">
                    {errors.terms}
                  </p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-3 rounded-2xl bg-[#FF7A00] py-4 font-semibold transition hover:bg-orange-600 disabled:opacity-70"
              >
                {loading ? (
                  <>
                    <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    Creating Account...
                  </>
                ) : (
                  <>
                    Create Account
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
            <button className="flex w-full items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 py-4 transition hover:bg-white/10">
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

            {/* Login */}
            <p className="mt-8 text-center text-gray-400">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-semibold text-[#FF7A00] hover:underline"
              >
                Login
              </Link>
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}