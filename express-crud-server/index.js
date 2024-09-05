const express = require("express");

const app = express();

app.use(express.json());

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// In-memory array to simulate a database
const items = [
  {
    id: 1,
    name: "Item 1",
  },
  {
    id: 2,
    name: "Item 2",
  },
  {
    id: 3,
    name: "Item 3",
  },
];

// Route 1: CREATE - Add a new item (POST request)

app.post("/items", (req, res) => {
  const item = req.body;
  item.id = items.length + 1;
  items.push(item);
  res.status(201).json(item);
});

app.get("/items", (req, res) => {
  res.json(items);
});

app.get("/items/:id/sample/:hello", (req, res) => {
  const id = parseInt(req.params.id);
  const hello = parseInt(req.params.hello);
  console.log(hello, id);
  const item = items.find((i) => i.id === id);
  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ message: "Item not found" });
  }
});

app.put("/items/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const updatedItem = req.body; //
  const index = items.findIndex((i) => i.id === id);
  if (index !== -1) {
    updatedItem.id = id;
    items[index] = updatedItem;
    res.json(updatedItem);
  } else {
    res.status(404).json({ message: "Item not found" });
  }
});

app.delete("/items/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = items.findIndex((i) => i.id === id);
  if (index !== -1) {
    items.slice(index, 1);
    res.json({ message: "Item deleted" });
  } else {
    res.status(404).json({ message: "Item not found" });
  }
});

// ! Routing parameters (route params) in Express.js allow you to capture values from the URL, making your routes dynamic and flexible. These parameters are defined in the route path using a colon (:) followed by the parameter name. Route params are then accessible within the route handler via req.params.

// * express.json(): This middleware is used to parse incoming JSON request bodies.

// ! Building a CRUD Server in Express.js
// ? CRUD (Create, Read, Update, Delete) operations are the foundation of most web applications.
