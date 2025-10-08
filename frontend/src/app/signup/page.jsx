








"use client";
import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const Signup = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  // handle change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const signupData = {
      email: formData.email.trim().toLowerCase(),
      password: formData.password.trim(),
    };

    try {
      // ✅ Send trimmed & lowercased signupData
      const res = await axios.post("http://localhost:5000/user/signup", signupData);
      toast.success("Signup successful!");
      console.log(res.data);
    } catch (error) {
      toast.error(error.response?.data?.message || "Signup failed!");
      console.error(error);
    }
  };

  return (
    <div>
      {/* Toast Container */}
      <Toaster position="top-right" reverseOrder={false} />

      <div className="relative h-screen w-full">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="/signupbest.png"
          alt="signup.png"
        />
        <div className="relative z-10 flex items-center justify-center h-full ">
          <div className="w-full max-w-md bg-white/80 backdrop-blur-md border border-gray-200 rounded-xl shadow-2xl p-6 dark:bg-neutral-900/70 dark:border-neutral-700">
            <div className="text-center">
              <h1 className="block text-2xl font-bold text-teal-800 dark:text-white">
                Sign in
              </h1>
              <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
                Don't have an account yet?
                <a
                  className="text-teal-900 decoration-2 hover:underline font-medium dark:text-teal-500"
                  href="../examples/html/signup.html"
                >
                  Sign up here
                </a>
              </p>
            </div>

            {/* Form */}
            <form className="mt-5 space-y-4" onSubmit={handleSubmit}>
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm mb-2 dark:text-white"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  onChange={handleChange}
                  className="py-2.5 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400"
                  required
                />
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm mb-2 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  onChange={handleChange}
                  className="py-2.5 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400"
                  required
                />
              </div>

              {/* Remember Me */}
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="mr-2 border-gray-200 rounded-sm text-teal-600 focus:ring-teal-500 dark:bg-neutral-800 dark:border-neutral-700"
                />
                <label
                  htmlFor="remember-me"
                  className="text-sm dark:text-white"
                >
                  Remember me
                </label>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-3 px-4 rounded-lg bg-teal-900 text-white font-medium hover:bg-teal-700 focus:outline-none"
              >
                Sign in
              </button>
            </form>
            {/* End Form */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
