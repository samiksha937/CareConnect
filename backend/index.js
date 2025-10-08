require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000", // your frontend
    credentials: true,
  })
);




// Routes
const userRouter = require("./routers/UserRouter");
const appointmentRouter = require("./routers/AppointmentRouter");
const adminRouter = require("./routers/AdminRouter");
const TherapistRouter = require('./routers/TherapistRouter');
const ContactRouter = require('./routers/ContactRouter');


app.use("/user", userRouter);
app.use("/", appointmentRouter);
app.use("/appointments", appointmentRouter);
app.use("/admin", adminRouter);
app.use("/therapist", TherapistRouter);
app.use("/contact", ContactRouter);


// Connect MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



