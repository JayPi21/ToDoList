const express = require("express");
const path = require("path");
const morgan = require("morgan");
const fs = require("fs");
const app = express();
const baseDir = path.dirname(__dirname);
const buildDir = path.resolve(baseDir, "build");
const staticDir = path.resolve(buildDir, "static");
console.log(staticDir);

const port = 4000;
app.listen(port);
console.log(`Rendering the page at http://localhost:${port}`);
console.log(buildDir);
app.use(express.static(buildDir));
app.get("/", (req, res) => {
  res.sendFile("index.html", buildDir);
});
app.get("/submit", (req, res) => {
  res.send("<h1>you have submitted</h1>");
});
app.use(morgan("dev"));
