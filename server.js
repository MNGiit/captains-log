const express = require("express");     // Require express
const app = express();                  // Initialize

require("dotenv").config();             // Link .env variables to app
const mongoose = require("mongoose");   // Require mongoose

const Log = require("./models/logs");   // Set up model for log

const methodOverride = require("method-override"); // Require method override needed for certain routes

// Middleware
app.set('view engine', 'jsx');                                      // Set up view engine
app.engine('jsx', require('express-react-views').createEngine());   // Links JSX/ReactViews to App

app.use(express.urlencoded({extended: false}));     // Parse req.body
app.use(methodOverride('_method'));                 // Instantiates MethodOverride for CRUD actions
app.use((req, res, next) => {                       // Establishes Middleware Process
    console.log("This is here for the routes");
    next();
})

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.connection.once("open", () => {
    console.log("Connected to Mongo");
})
// Middleware \

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

// Create/Post
app.post("/logs", (req, res) => {
    if(req.body.shipIsBroken === "on") {
        req.body.shipIsBroken = true;
    } else {
        req.body.shipIsBroken = false;
    }

    Log.create(req.body, (err, createdLog) => {
        console.log(err);
        console.log("Just created:", createdLog);
    });
    res.redirect("/logs");
})

// Edit
app.get("/logs/:id/edit", (req, res) => {
    Log.findById(req.params.id, (err, foundLog) => {
        console.log(err);
        if(!err) {
            res.render("Edit", {log: foundLog});
        } else {
            res.send({msg: err.message});
        }
    });
});

// Update/Put/Patch
app.put("/logs/:id", (req, res) => {
    if(req.body.shipIsBroken === "on") {
        req.body.shipIsBroken = true;
    } else {
        req.body.shipIsBroken = false;
    }

    Log.findByIdAndUpdate(req.params.id, req.body, (err, updatedLog) => {
        console.log(err);
        console.log(updatedLog);
        res.redirect(`/logs/${req.params.id}`);
    });
});


// Delete
app.delete("/logs/:id", (req, res) => {
    Log.findByIdAndRemove(req.params.id, (err, data) => {
        res.redirect("logs");
    });
});

// Show
app.get("/logs/:id", (req, res) => {
    Log.findById(req.params.id, (err, foundLog) => {
        console.log(err);
        console.log("Found:", foundLog);
        res.render("Show", {log: foundLog});
    });
});

// Routes \

// Listen
app.listen("3000", () => {console.log("Server is running on port 3000");}); // Listen
