const express = require("express");
const router = express.Router();
const Contact = require("../models/ContactModel");

router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newContact = new Contact({ name, email,  message });
    await newContact.save();
    res.status(201).json({ message: "Message sent successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
