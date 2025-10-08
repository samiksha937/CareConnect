



"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";

const AdminDashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter(); // ✅ define router here

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const token = localStorage.getItem("adminToken");
        if (!token) {
          console.log("No token found, redirecting to login");
          router.push("/adminlogin");
          return;
        }

        const res = await axios.get("http://localhost:5000/admin/appointments", {
          headers: { Authorization: `Bearer ${token}` },
          withCredentials: true, // only needed if using cookies
        });

        setAppointments(res.data);
      } catch (err) {
        console.error("Fetch error:", err.response?.data || err.message);
        if (err.response?.status === 401) router.push("/adminlogin"); // redirect on 401
      } finally {
        setLoading(false); // ✅ stop loading
      }
    };

    fetchAppointments();
  }, [router]);

  const handleStatusChange = async (id, newStatus) => {
    try {
      const token = localStorage.getItem("adminToken");
      await axios.patch(
        `http://localhost:5000/appointments/${id}`,
        { status: newStatus },
        {
          headers: { Authorization: `Bearer ${token}` },
          withCredentials: true,
        }
      );

      setAppointments((prev) =>
        prev.map((appt) =>
          appt._id === id ? { ...appt, status: newStatus } : appt
        )
      );

      toast.success(`Appointment ${newStatus.toLowerCase()}`);
    } catch (err) {
      console.error("Error updating status:", err.response?.data || err.message);
      toast.error("Failed to update status");
    }
  };

  if (loading) return <p className="text-center mt-10">Loading appointments...</p>;
  if (!appointments.length) return <p className="text-center mt-10">No appointments found</p>;

  return (
    <div className="max-w-8xl mx-auto p-6 bg-teal-700">
      <Toaster position="top-right" />
      <h1 className="text-2xl font-bold mb-6 mt-15 uppercase text-white">All Appointments</h1>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-white">
            <th className="border  px-4 py-2">User</th>
            <th className="border px-4 py-2">Therapist</th>
            {/* <th className="border px-4 py-2">Date</th> */}
            <th className="border px-4 py-2">Time</th>
            <th className="border px-4 py-2">Status</th>
            <th className="border px-4 py-2 w-60">Actions</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appt) => (
            <tr key={appt._id}>
              <td className="border text-white px-4 py-2">{appt.userId?.name || appt.userId?.email}</td>
              <td className="border text-white px-4 py-2">{appt.therapistId?.name}</td>
              {/* <td className="border px-4 py-2">{appt.date}</td> */}
              <td className="border text-white px-4 py-2">{appt.time}</td>
              <td className="border text-white px-4 py-2">{appt.status}</td>
              <td className="border text-white px-4 py-2 flex gap-2">
                <button
                  className="bg-green-500 text-white  px-5 py-2 w-25 rounded hover:bg-green-800 hover:scale-105"
                  onClick={() => handleStatusChange(appt._id, "Accepted")}
                  disabled={appt.status === "Accepted"}
                >
                  Accept
                </button>
                <button
                  className="bg-red-500 text-white px-3 w-25 py-2 rounded hover:bg-red-800 hover:scale-105"
                  onClick={() => handleStatusChange(appt._id, "Rejected")}
                  disabled={appt.status === "Rejected"}
                >
                  Reject
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
