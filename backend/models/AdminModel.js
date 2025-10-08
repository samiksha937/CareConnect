const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true } // store hashed in real apps
});

module.exports = mongoose.model("Admin", AdminSchema);
