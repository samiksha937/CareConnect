const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
require("dotenv").config();

// Import your User model
const User = require("./models/UserModel");

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

async function test() {
  try {
    const email = "stark99@gmail.com"; // use the email you signed up with
    const plainPassword = "stark123"; // the exact password you typed

    // 1️⃣ Find user in DB
    const user = await User.findOne({ email });
    if (!user) {
      console.log("User not found. Maybe signup failed?");
      process.exit();
    }

    console.log("Stored hash in DB:", user.password);

    // 2️⃣ Compare password
    const isMatch = await bcrypt.compare(plainPassword, user.password);
    console.log("Does password match?", isMatch); // true = match, false = mismatch

    // Optional: Rehash the password (to be sure)
    if (!isMatch) {
      const newHash = await bcrypt.hash(plainPassword, 10);
      console.log("New hash for testing:", newHash);
    }

    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

test();
