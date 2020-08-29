const express = require("express");
const path = require("path");
const tableData = require("./data/tabledata");
const waitlistData = require("./data/waitlistdata");
const reservationArray = require("./data/tabledata");

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

app.get("/api/tables", function(req, res) {
    return res.json(tableData);
  });

app.get("/api/reserve", function(req, res) {
    return res.json(waitlistData);
  });

  // post reservations
  app.post("api/tables/tableData", function(req,res) {
    const newReservation = req.body;

    newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();

    reservationArray.push(newReservation);

    res.json(newReservation);
  });



app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
})