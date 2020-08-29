const express = require("express");
const path = require("path");
const tableData = require("./data/tabledata");
const waitlistData = require("./data/waitlistdata");

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());






app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });
  
app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
  });

app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
  });






app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
})