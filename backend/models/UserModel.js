



const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: 6,
    },
  },
  { timestamps: true }
);


userSchema.methods.comparePassword = async function(password) {
  return bcrypt.compare(password, this.password);
};
const User = mongoose.model("User", userSchema);
module.exports = User;
