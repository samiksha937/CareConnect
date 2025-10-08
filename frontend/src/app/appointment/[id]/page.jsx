
"use client"
"use client";
import React from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const AppointmentBooking = () => {
  const { id } = useParams(); // therapist _id from URL

  const initialValues = {
    fullName: "",
    age: "",
    // dob: "",
    contactNumber: "",
    appointmentDate: "",
    appointmentTime: "",
  };

  const validationSchema = Yup.object({
    fullName: Yup.string().required("Full Name is required"),
    age: Yup.number()
      .typeError("Age must be a number")
      .min(1, "Age must be at least 1")
      .required("Age is required"),
    // dob: Yup.date().required("Date of Birth is required"),
    contactNumber: Yup.string()
      .matches(/^\d{10}$/, "Contact Number must be 10 digits")
      .required("Contact Number is required"),
    appointmentDate: Yup.date().required("Appointment Date is required"),
    appointmentTime: Yup.string().required("Appointment Time is required"),
  });






const onSubmit = async (values, { setSubmitting, resetForm }) => {
  try {
    // Get JWT from localStorage (make sure you store it at login)
    const token = localStorage.getItem("token");

    await axios.post(
      "http://localhost:5000/appointments",
      {
        fullName: values.fullName,
        age: values.age,
        contactNumber: values.contactNumber,
        date: new Date(values.appointmentDate), // convert string → Date
        time: values.appointmentTime,
        therapistId: id,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`, // send JWT in header
        },
      }
    );

    toast.success("Appointment booked successfully!");
   
    resetForm();
  } catch (err) {
    console.error(err);
    if (err.response?.status === 401) {
      toast.error("You must be logged in to book an appointment!");
    } else {
      toast.error("Failed to book appointment");
    }
  } finally {
    setSubmitting(false);
  }
};



  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center p-4"
      style={{ backgroundImage: "url('/adddmin.png')" }}
    >
      <Toaster position="top-right" reverseOrder={false} />

      <div className="bg-white bg-opacity-90 shadow-lg rounded-2xl p-6 sm:p-8 md:p-10 w-full max-w-lg">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-teal-700">
          Book Appointment
        </h2>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-4">
              <Field
                name="fullName"
                placeholder="Full Name"
                className="border px-4 py-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <ErrorMessage name="fullName" component="div" className="text-red-500 text-sm mt-1" />

              <Field
                name="age"
                type="number"
                placeholder="Age"
                className="border px-4 py-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <ErrorMessage name="age" component="div" className="text-red-500 text-sm mt-1" />

              {/* <Field
                name="dob"
                type="date"
                className="border px-4 py-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <ErrorMessage name="dob" component="div" className="text-red-500 text-sm mt-1" /> */}

              <Field
                name="contactNumber"
                placeholder="Contact Number"
                className="border px-4 py-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <ErrorMessage name="contactNumber" component="div" className="text-red-500 text-sm mt-1" />

              <Field
                name="appointmentDate"
                type="date"
                className="border px-4 py-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <ErrorMessage name="appointmentDate" component="div" className="text-red-500 text-sm mt-1" />

              <Field
                as="select"
                name="appointmentTime"
                className="border px-4 py-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="">Select Time Slot</option>
                <option value="9am-12pm">9am-12pm</option>
                <option value="5pm-8pm">5pm-8pm</option>
              </Field>
              <ErrorMessage name="appointmentTime" component="div" className="text-red-500 text-sm mt-1" />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-teal-700 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition disabled:opacity-60"
              >
                {isSubmitting ? "Booking..." : "Book Appointment"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AppointmentBooking;
