const express = require("express");     // Require express
const app = express();                  // Initialize

require("dotenv").config();             // Link .env variables to app
const mongoose = require("mongoose");   // Require mongoose

const Log = require("./models/logs");   // Set up model for log

const methodOverride = require("method-override"); // Require method override needed for certain routes
