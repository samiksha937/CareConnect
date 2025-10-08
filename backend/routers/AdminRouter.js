

const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const Appointment = require("../models/AppointmentModel");
const authMiddleware = require("../middleware/authMiddleware");


console.log("JWT object:", jwt);


console.log("AdminRouter loaded");


// Admin Login Route

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  console.log("Login hit"); // 🔹 check if request arrives

  if (email === "admin@example.com" && password === "123456") {
    const token = jwt.sign({ role: "admin" }, process.env.JWT_SECRET, { expiresIn: "1h" });

    // const token = require("jsonwebtoken").sign({ role: "admin" }, "testsecret", { expiresIn: "1h" });
    console.log("Token generated:", token);
    return res.json({ success: true, token });
  }

  return res.status(401).json({ message: "Invalid credentials" });
});




// Get all appointments

router.get("/appointments", authMiddleware, async (req, res) => {
  try {
    const appointments = await Appointment.find()
      .populate("therapistId", "name specialization fee location")
      .populate("userId", "name email");

    console.log("Appointments fetched:", appointments); // 👈 check what’s returned
    res.status(200).json(appointments);
  } catch (err) {
    console.error("Error fetching appointments:", err);
    res.status(500).json({ message: "Failed to fetch appointments" });
  }
});

module.exports = router;
