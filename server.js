const express = require("express");     // Require express
const app = express();                  // Initialize

require("dotenv").config();             // Link .env variables to app
const mongoose = require("mongoose");   // Require mongoose

const Log = require("./models/logs");   // Set up model for log

const methodOverride = require("method-override"); // Require method override needed for certain routes




// Routes
// Index
app.get("/logs", (req, res) => {
    Log.find({}, (err, allLogs) =>{
        console.log(allLogs);
        res.render("Index", {logs: allLogs});
    });
});

// New
app.get("logs/new", (req, res) => {
    res.render("New", {});
});

app.listen("3000", () => {console.log("Server is running on port 3000");}); // Listen




