
"use client";
import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const router = useRouter();

  // handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // handle form submit
//   const handleSubmit = async (e) => {
//     e.preventDefault();



// const loginData = {
//     email: formData.email.trim().toLowerCase(),
//     password: formData.password.trim(),
//   };




//     try {
//       const res = await axios.post(
//         "http://localhost:5000/user/login",
//         formData,
//         {
//           withCredentials: true, // ✅ Important: allows browser to store JWT cookie
//         }
//       );

//       if (res.data.user) {
//         // ✅ Save userId in localStorage if needed
//         localStorage.setItem("userId", res.data.user.id);
//         localStorage.setItem("userEmail", res.data.user.email);

//         toast.success("Login successful!");

//         // ✅ Redirect to dashboard
//         router.push("/dashboard");
//       } else {
//         toast.error("Login failed! No user data returned.");
//       }

//       console.log(res.data);
//     } catch (error) {
//       toast.error(error.response?.data?.message || "Login failed!");
//       console.error(error);
//     }
//   };





const handleSubmit = async (e) => {
  e.preventDefault();

  const loginData = {
    email: formData.email.trim().toLowerCase(),
    password: formData.password,
  };

  try {
    const res = await axios.post(
      "http://localhost:5000/user/login",
      loginData,  // ✅ use loginData instead of formData
      {
        withCredentials: true, // allows browser to store JWT cookie
      }
    );

    if (res.data.user && res.data.token) {
      localStorage.setItem("token", res.data.token); // <-- store JWT
      localStorage.setItem("userId", res.data.user.id);
      localStorage.setItem("userEmail", res.data.user.email);
      toast.success("Login successful!");
      router.push("/dashboard");
    } else {
      toast.error("Login failed! No user data returned.");
    }

    console.log(res.data);
  } catch (error) {
    toast.error(error.response?.data?.message || "Login failed!");
    console.error(error);
  }
};













  return (
    <div>
    
     

      <Toaster position="top-right" />

      <div className="w-full min-h-screen bg-teal-700 flex items-center justify-center p-4">
        <div className="bg-teal-100 flex flex-col md:flex-row w-full max-w-4xl shadow-lg rounded-lg overflow-hidden">
          {/* Left Image */}
          <div className="w-full  md:w-1/2 flex items-center justify-center bg-white p-4">
            <img
              className="max-h-60 md:max-h-80 w-auto "
              src="\loginnew.png"
              alt="medical.png"
            />
          </div>

          {/* Right Login Form */}
          <div className="w-full md:w-1/2 flex items-center justify-center bg-white p-6">
            <div className="login-box w-full max-w-md">
              <h2 className="text-3xl md:text-3xl font-bold text-center mb-6 text-teal-700">
                Login
              </h2>
              <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="p-2 border rounded w-full"
                />

                <label htmlFor="password" className="text-sm font-medium">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="p-2 border rounded w-full"
                />

                <input
                  type="submit"
                  value="Login"
                  className="bg-teal-700 text-white p-2 rounded cursor-pointer hover:bg-blue-600"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
