const bcrypt = require("bcryptjs");

// Replace with the hashed password from your MongoDB
const hashed = "$2b$10$Wg787yvZPWS4jCA3LAeSveJkEMLwfkWYW35m.9SQLqX1X7FPhLg6y";

// Replace with the plain password you used to sign up
const password = "YourPasswordHere";

// Compare plain password with hash
bcrypt.compare(password, hashed).then((result) => {
  console.log(result); // true = match, false = doesn't match
});