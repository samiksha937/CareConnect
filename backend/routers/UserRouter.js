

// latest
const express = require("express");
const router = express.Router();
const User = require("../models/UserModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// LOGIN
router.post("/login", async (req, res) => {
  // const { email, password } = req.body;
    // Trim & sanitize input
 
 
let { email, password } = req.body;
if (!email || !password) return res.status(400).json({ message: "Missing fields" });
email = email.trim().toLowerCase();
password = password.trim(); // bcrypt.compare(password, user.password)



 
  //   let { email, password } = req.body;
  // email = email.trim().toLowerCase();
  // password = password.trim();




  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });



    // return both user info AND token
    res.status(200).json({ user, token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});




//     res
//       .cookie("token", token, { httpOnly: true, sameSite: "lax" })
//       .json({ message: "Login successful", user });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// SIGNUP
router.post("/signup", async (req, res) => {
  // const { name, email, password, age } = req.body;




    // Trim & sanitize input
  let { name, email, password, age } = req.body;
  name = name?.trim();
  email = email.trim().toLowerCase();
  password = password.trim();




  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // hash password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ name, email, password: hashedPassword, age });
    await newUser.save();

    res.status(201).json({ message: "Signup successful", user: newUser });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


module.exports = router;








