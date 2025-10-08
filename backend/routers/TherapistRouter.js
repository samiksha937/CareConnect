


// backend/routers/TherapistRouter.js
const express = require("express");
const router = express.Router();
const Therapist = require("../models/TherapistModel"); // your Mongoose model

// GET ALL THERAPISTS
router.get("/", async (req, res) => {
  try {
    const therapists = await Therapist.find(); // fetch all from MongoDB
    res.json(therapists);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching therapists" });
  }
});

// GET THERAPIST BY ID
router.get("/:id", async (req, res) => {
  try {
    const therapist = await Therapist.findById(req.params.id); // fetch by _id
    if (!therapist) return res.status(404).json({ message: "Therapist not found" });
    res.json(therapist);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching therapist" });
  }
});

// ✅ Add new therapist
router.post("/add", async (req, res) => {
  try {
    const therapist = new Therapist(req.body);
    await therapist.save();
    res.status(201).json({ message: "Therapist added successfully", therapist });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
