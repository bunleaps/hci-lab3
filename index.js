const express = require("express");
const path = require("path");
const livereload = require("livereload");
const connectLivereload = require("connect-livereload");
const app = express();

const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, "public"));
app.use(connectLivereload());

liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) {
  res.render("pages/index");
});

app.get("/education", function (req, res) {
  res.render("pages/education");
});

app.get("/skills", function (req, res) {
  res.render("pages/skills");
});

app.listen(8080, () => {
  console.log("Server is listening on port 8080");
});
