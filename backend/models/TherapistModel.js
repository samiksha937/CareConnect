// backend/models/TherapistModel.js
const mongoose = require("mongoose");

const therapistSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    specialization: { type: String, required: true },
    fee: { type: Number, required: true },
    description: { type: String }, // optional description or details
    email: { type: String }, // optional
    phone: { type: String } , // optional
    location: {
  latitude: { type: Number, },
  longitude: { type: Number, },
  address: { type: String }
}

  },
  { timestamps: true }
);

const Therapist = mongoose.model("Therapist", therapistSchema);

module.exports = Therapist;
