// # This controller will handle user registration, login, and token generation.

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const users = require("../models/userModel");
require("dotenv").config();

// Function to register a new user
exports.register = async (req, res) => {
  const { username, password } = req.body;

  // Check if the user already exists
  const userExists = users.find((user) => user.username === username);
  if (userExists) {
    return res.status(400).json({ message: "User already exists." });
  }

  const hashPassword = await bcrypt.hash(password, 10);

  const newUser = { username, password: hashPassword };
  users.push(newUser);
  res.status(201).json({ message: "User registered successfully" });
};

exports.login = async (req, res) => {
  const { username, password } = req.body;

  // Check if the user already exists
  const user = users.find((user) => user.username === username);
  if (!user) {
    return res.status(400).json({ message: "Invalid Credentials" });
  }

  // Compare the Password
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: "Invalid Credentials" });
  }

  // Generate a JSON Web Token
  const token = jwt.sign({ username: user.username }, process.env.JWT_SECRET, {
    expiresIn: "1y",
  });

  res.json({ token });
};

exports.protected = (req, res) => {
  res.json({ message: `Welcome ${req.user.username}, you are authorized!` });
};

//  Represents the cost factor or salt rounds. In this case, it is 10, which means the password is hashed 2^10 (1024) times.
