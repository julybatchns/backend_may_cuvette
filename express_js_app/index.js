const express = require("express");

const app = express();

const PORT = 3000;

//Use Express's built-in middleware to parse JSON request bodies.
app.use(express.json());

// 5. Simulate a database with an array of objects.
// Each object in the array represents an item with an `id` and a `name`.
let items = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
  { id: 3, name: "Item 3" },
];

// .json(): This is a method of the res object. It takes a JavaScript object or array (in this case, items) as an argument and converts it to a JSON string. It then sets the appropriate Content-Type header (application/json) and sends the JSON string as the HTTP response.

app.get("/items", (req, res) => {
  res.json(items);
});

app.get("/items/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const item = items.find((item) => item.id === id);
  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ message: "Item not found" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
