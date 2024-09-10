const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 3000;

const userSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: String,
  age: Number,
});

// const userSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   age: { type: Number, required: true },
// });

// Create an index for the custom id field
userSchema.index({ id: 1 });

const User = mongoose.model("User", userSchema);

const url =
  "mongodb+srv://shrivastavashubham948:MQYsocDFLfVd3whT@usersdbmay.o2bzu.mongodb.net/?retryWrites=true&w=majority&appName=usersDBMay";

mongoose
  .connect(url)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => console.error("Connection Error", err));

app.use(express.json());

// API

// POST - Method - Create
app.post("/users", async (req, res) => {
  const newUser = new User(req.body);

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET - Method - Read
app.get("/users", async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update - Method - PUT
app.put("/users/:id", async (req, res) => {
  const userId = req.params.id;

  try {
    if (!req.body || Object.keys(req.body).length === 0) {
      return res
        .status(400)
        .json({ error: "Request body is empty or invalid." });
    }

    const updatedUser = await User.findOneAndUpdate({ id: userId }, req.body, {
      new: true, // Return the updated document
      runValidators: true, // Ensure the update follows schema validation
    });

    if (!updatedUser) {
      return res.status(404).json({ error: "User not found." });
    }

    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// app.put("/users/:id", async (req, res) => {
//   const userId = req.params.id;
//   try {
//     if (!req.body || Object.keys(req.body).length === 0) {
//       return res
//         .status(400)
//         .json({ error: "Request body is empty or invalid." });
//     }
//     const updatedUser = await User.findByIdAndUpdate(userId, req.body, {
//       new: true, // Return the updated document
//       runValidators: true, // Ensure the update follows schema validation
//     });

//     if (!updatedUser) {
//       return res.status(404).json({ error: "User not found." });
//     }

//     res.status(200).json(updatedUser);

//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// });

// Delete - Method - DELETE
app.delete("/users/:id", async (req, res) => {
  const userId = req.params.id;

  try {
    const deletedUser = await User.findOneAndDelete({ id: userId });

    if (!deletedUser) {
      return res.status(404).json({ error: "User not found." });
    }

    res
      .status(200)
      .json({ message: "User deleted successfully", user: deletedUser });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
