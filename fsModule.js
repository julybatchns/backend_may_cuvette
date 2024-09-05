const fs = require("fs");

fs.readFile("example.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error rading the file:", err);
    return;
  }
  console.log("File Content:", data);
});

fs.writeFile("output.txt", "This is the content of the file", (err) => {
  if (err) {
    console.error("error writing to the file", err);
    return;
  }
  console.log("File Written Successfully!");
});

try {
  fs.writeFileSync("newFile.txt", "this is the content of the new file.");
  console.log("File Written Successfully!");
} catch (error) {
  console.error("Error writing to the file", error);
}

fs.appendFile(
  "example.txt",
  "\nAppended Content using Append Method in Node JS under fs module.",
  (error) => {
    if (error) {
      console.error("Error appending to the file:", error);
      return;
    }
    console.log("Content has been appended Successfully.");
  }
);

fs.unlink("example.txt", (error) => {
  if (error) {
    console.error("Error in deleting the file:", error);
    return;
  }
  console.log("File deletd successfully.");
});

// // const http = require("http");

// // const server = http.createServer((req, res) => {
// //   res.writeHead(200, { "content-Type": "text/plain" });
// //   res.end("Hello World!\n");
// // });

// // const port = 3001;

// // server.listen(port, () => {
// //   console.log(`Server running at http://localhost:${port}`);
// // });

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
