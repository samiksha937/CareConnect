

"use client";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const AdminLogin = () => {
  const router = useRouter();

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Required"),
  });

  const onSubmit = async (values, { setSubmitting, setFieldError }) => {
    try {
    const res = await axios.post("http://localhost:5000/admin/login", values);
const token = res.data.token; // this is the JWT printed in your backend log
if (!token) throw new Error("No token returned");
localStorage.setItem("adminToken", token); // store it
router.push("/admin"); // redirect to dashboard

    } catch (err) {
      const message =
        err?.response?.data?.message || err.message || "Login failed";
      setFieldError("password", message);
    } finally {
      setSubmitting(false);
      console.log("Login token:", token);
    }
  };


  return (
    <div
      className="min-h-screen  flex items-center justify-center bg-cover bg-center px-4 mt-16"
      style={{ backgroundImage: "url('/new.png')" }}
    >
      <div className="w-full max-w-md bg-teal-700  rounded-2xl shadow-lg p-6 sm:p-8 md:p-9 bg-opacity-90">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 text-center">
          Admin Login
        </h2>
        <p className="text-sm sm:text-base text-white mb-6 text-center">
          Sign in with your admin credentials
        </p>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-4">
              {/* Email */}
              <div>
                <label className="block text-sm sm:text-base font-medium text-white">
                  Email
                </label>
                <Field
                  name="email"
                  type="email"
                  placeholder="admin@example.com"
                  className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-200"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-xs sm:text-sm mt-1"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm sm:text-base font-medium text-white">
                  Password
                </label>
                <Field
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-200"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-xs sm:text-sm mt-1"
                />
              </div>

              {/* Login Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-indigo-600 text-white py-2 rounded-lg font-medium hover:bg-indigo-700 disabled:opacity-60 transition-colors duration-200"
              >
                {isSubmitting ? "Signing in..." : "Sign In"}
              </button>
            </Form>
          )}
        </Formik>

        <div className="mt-6 text-center text-xs sm:text-sm text-gray-400">
          {/* JWT token is stored in localStorage */}
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
