




const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  therapistId: { type: mongoose.Schema.Types.ObjectId, ref: "Therapist", required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  status: { type: String, default: "Pending" }, // Pending, Accepted, Rejected
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Appointment", appointmentSchema);


