// const http = require("http");

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "content-Type": "text/plain" });
//   res.end("Hello World!\n");
// });

// const port = 3001;

// server.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });

const http = require("http");
const greet = require("./greet");
const getCurrentDate = require("./date");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  const message = `${greet("Shubham")} Today is ${getCurrentDate()}`;
  res.end(message);
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

// CRUD => POST, GET, PUT, DELETE
