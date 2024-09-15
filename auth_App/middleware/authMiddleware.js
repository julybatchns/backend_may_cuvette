// Client ===> Server (Sending token to Server)
const jwt = require("jsonwebtoken");
require("dotenv").config();

const authMiddleware = (req, res) => {
  // Get token from Header Request
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  try {
    //verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded);
    req.user = decoded;
  } catch (error) {
    return res.status(401).json({ message: "Token is not valid" });
  }
};

module.exports = authMiddleware;
