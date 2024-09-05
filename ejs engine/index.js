const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index", {
    title: "Home Page",
    message: "Welcome to Node.js with EJS!",
  });
});

app.get("/users", (req, res) => {
  const users = [
    { name: "Shubham", age: 27 },
    { name: "Raman", age: 28 },
    { name: "Aman", age: 29 },
  ];
  res.render("users", { users });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
