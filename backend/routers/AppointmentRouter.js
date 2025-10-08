

const express = require("express");
const router = express.Router();
const Appointment = require("../models/AppointmentModel");
const Therapist = require('../models/TherapistModel');
const authMiddleware = require("../middleware/authMiddleware");
// PATCH: update status
router.patch("/:id", async (req, res) => {
  try {
    const { status } = req.body;

    if (!["Accepted", "Rejected"].includes(status)) {
      return res.status(400).json({ message: "Invalid status" });
    }

    const updatedAppt = await Appointment.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!updatedAppt) {
      return res.status(404).json({ message: "Appointment not found" });
    }

    res.json(updatedAppt);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// ----------------------
// CREATE appointment (protected)
// ----------------------
router.post("/", authMiddleware, async (req, res) => {
  try {
    const { therapistId, date, time, fullName, age, dob, contactNumber } = req.body;

    if (!therapistId || !date || !time) {
      return res.status(400).json({ message: "Therapist, date, and time are required" });
    }

    const newAppointment = new Appointment({
      userId: req.user.id, // from JWT
      therapistId,
      date,
      time,
      fullName,
      age,
      // dob,
      contactNumber,
      status: "pending",
    });

    await newAppointment.save();
    res.status(201).json(newAppointment);
  } catch (err) {
    console.error("Error creating appointment:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// ----------------------
// GET appointments for logged-in user
// ----------------------
router.get("/my", authMiddleware, async (req, res) => {
  try {
    // Ensure JWT user ID exists
    if (!req.user || !req.user.id) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const appointments = await Appointment.find({ userId: req.user.id })
      .populate("therapistId", "name specialization fee location")
      .populate("userId", "name email");

    res.json(appointments);
  } catch (err) {
    console.error("Error fetching user appointments:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// ----------------------
// GET all appointments (admin)
// ----------------------
router.get("/", authMiddleware, async (req, res) => {
  try {
    // TODO: Add admin check if needed (e.g., req.user.role === 'admin')
    const appointments = await Appointment.find()
      .populate("therapistId", "name specialization fee location")
      .populate("userId", "name email");

    res.json(appointments);
  } catch (err) {
    console.error("Error fetching all appointments:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// ----------------------
// UPDATE appointment status (admin)
// ----------------------
router.put("/:id/status", authMiddleware, async (req, res) => {
  try {
    const { status } = req.body;
    if (!status) return res.status(400).json({ message: "Status is required" });

    const appointment = await Appointment.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!appointment) return res.status(404).json({ message: "Appointment not found" });

    res.json(appointment);
  } catch (err) {
    console.error("Error updating appointment:", err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
