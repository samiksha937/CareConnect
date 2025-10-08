
"use client";
import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

// AppointmentSlip component
const AppointmentSlip = React.forwardRef(({ appt }, ref) => {
  if (!appt) return null;
  return (
    <div
      ref={ref}
      style={{
        width: "600px",
        padding: "20px",
        backgroundColor: "green",
        color: "white",
        fontFamily: "Arial, sans-serif",
        // text: "white",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "10px", marginTop: "20px" }}>
        CareConnect
      </h2>
      <hr />
      <p><strong>Appointment ID:</strong> {appt._id}</p>
       {/* <p><strong>Name:</strong> {appt.fullname?.name || "N/A"}</p> */}
      <p><strong>User Email:</strong> {appt.userId?.email || "N/A"}</p>
      <p><strong>Therapist:</strong> {appt.therapistId?.name || "N/A"}</p>
      <p><strong>Status:</strong> {appt.status}</p>
    </div>
  );
});

const Dashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const [selectedAppt, setSelectedAppt] = useState(null);
  const printRef = useRef();

  // Reusable function to fetch user appointments
  const fetchAppointments = async () => {
    try {
     


const token = localStorage.getItem("token");
const res = await axios.get("http://localhost:5000/appointments/my", {
  headers: { Authorization: `Bearer ${token}` },
});


      setAppointments(res.data);
    } catch (err) {
      console.error("Error fetching appointments:", err);
    }
  };

  // Fetch appointments on mount and every 5 seconds for real-time updates
  useEffect(() => {
    fetchAppointments();
    const interval = setInterval(fetchAppointments, 5000); // poll every 5 sec
    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  // PDF download function
  const handleDownloadPDF = async () => {
    if (!printRef.current) return;
    const element = printRef.current;

    const canvas = await html2canvas(element, { backgroundColor: "#ffffff" });
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");

    const pageWidth = pdf.internal.pageSize.getWidth();
    const imgProps = pdf.getImageProperties(imgData);
    const imgWidth = pageWidth - 20; // 10mm padding
    const imgHeight = (imgProps.height * imgWidth) / imgProps.width;

    pdf.addImage(imgData, "PNG", 10, 10, imgWidth, imgHeight);
    pdf.save("Appointment_Slip.pdf");
  };

  return (
    <div className="mt-25 bg-teal-700 text-white">
      <h1>My Appointments</h1>
      {appointments.length === 0 && <p>No appointments yet.</p>}

      {appointments.map((appt) => (
        <div key={appt._id} className="border p-4 mb-4 rounded">
          <p>Therapist: {appt.therapistId?.name || "Unknown"}</p>
          <p>Status: {appt.status}</p>

          {appt.status === "Accepted" && (
            <button
              className="bg-green-600 text-white px-3 py-1 rounded mt-2"
              onClick={() => {
                setSelectedAppt(appt);
                setTimeout(handleDownloadPDF, 100); // ensure ref updates
              }}
            >
              Download PDF
            </button>
          )}
        </div>
      ))}

      <AppointmentSlip ref={printRef} appt={selectedAppt} />
    </div>
  );
};

export default Dashboard;





