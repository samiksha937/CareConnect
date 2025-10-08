



"use client";
import React from "react";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Contact = () => {
  const initialValues = {
    name: "",
    email: "",
    message: "",
    termsAccepted: false,
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    message: Yup.string().required("Message is required"),
    termsAccepted: Yup.boolean()
      .oneOf([true], "You must accept the terms")
      .required("Required"),
  });

  const onSubmit = async (values, { resetForm }) => {
    try {
      await axios.post("http://localhost:5000/contact", values);
      toast.success("Message sent successfully!");
      resetForm();
    } catch (err) {
      console.error(err);
      toast.error("Failed to send message");
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white">
      <Toaster position="top-right" reverseOrder={false} />

      {/* Left Side Image */}
      <div className="md:flex-1 flex items-center justify-center">
        <img
          src="/ct.png"
          alt="contact"
          className="w-full h-64 md:h-screen object-cover md:rounded-r-[50%]"
        />
      </div>

      {/* Right Side Form */}
      <div className="md:flex-1 flex flex-col justify-center p-6 sm:p-10">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-teal-700">
          Contact Us
        </h2>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="flex flex-col max-w-md w-full space-y-4">
              <div>
                <Field
                  name="name"
                  placeholder="Enter your Name"
                  className="w-full px-4 py-2 border-b-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div>
                <Field
                  name="email"
                  type="email"
                  placeholder="Enter a valid email address"
                  className="w-full px-4 py-2 border-b-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div>
                <Field
                  as="textarea"
                  name="message"
                  placeholder="Write your message here..."
                  className="w-full px-4 py-2 border-b-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-y min-h-[120px]"
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div className="flex items-center space-x-2">
                <Field type="checkbox" name="termsAccepted" />
                <label className="text-sm">
                  I accept the{" "}
                  <a href="#" className="text-teal-700 underline">
                    Terms of Service
                  </a>
                </label>
              </div>
              <ErrorMessage
                name="termsAccepted"
                component="div"
                className="text-teal-700 text-sm mt-1"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-teal-700 text-white font-bold py-3 rounded-md hover:bg-orange-600 transition disabled:opacity-60"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Contact;
