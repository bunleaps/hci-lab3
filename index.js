import express from "express";
import path from "path";
import { fileURLToPath } from "url";
// import livereload from "livereload";
// import connectLivereload from "connect-livereload";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// const liveReloadServer = livereload.createServer();
// liveReloadServer.watch(path.join(__dirname, "public"));
// app.use(connectLivereload());

// liveReloadServer.server.once("connection", () => {
//   setTimeout(() => {
//     liveReloadServer.refresh("/");
//   }, 100);
// });

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.use(express.static(__dirname + "public"));
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
