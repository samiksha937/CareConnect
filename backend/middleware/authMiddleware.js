

const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  try {
    let token = null;

    // Check Authorization header
    if (req.headers.authorization?.startsWith("Bearer ")) {
      token = req.headers.authorization.split(" ")[1];
    } 
    // Or check cookie
    else if (req.cookies.token) {
      token = req.cookies.token;
    }

    console.log("Token in authMiddleware:", token); // ✅ must be AFTER token is assigned

    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;

    next();
  } catch (err) {
    console.error("Auth middleware error:", err);
    return res.status(401).json({ message: "Invalid token" });
  }
};

module.exports = authMiddleware;
