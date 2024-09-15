const express = require("express");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");
require("dotenv").config();

const app = express();
app.use(bodyParser.json());

app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
