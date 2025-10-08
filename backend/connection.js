const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI); // your MongoDB URI in .env
    console.log("MongoDB connection successful");
  } catch (err) {
    console.error(err);
    throw err;
  }
};

module.exports = connectDB;
// https://github.com/samiksha937/CareConnect.git
