const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dbconnection = require('./models/dbconnection');
const userModel= require('./models/users');
const bcrypt = require('b')

const app = express();

const corsOptions = {
  origin: "http://localhost:3001",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.post("/reportProblem", async (req, res) => {
  console.log(req.body);
  try {
    if (!req.body) {
      return res.status(400).send("Empty request body");
    }

    const { sitePerformance, loggingError, feedbackDelay } = req.body;
    if (!sitePerformance || !loggingError || !feedbackDelay) {
      return res.status(422).send("Missing required fields");
    }

    const userCombinedProblems = {
      sitePerformance,
      loggingError,
      feedbackDelay,
    };

    return res.status(200).json({
        message: `Thank you for suggesting the following problems:`,
        sitePerformance: userCombinedProblems.sitePerformance,
        loggingError: userCombinedProblems.loggingError,
        feedbackDelay: userCombinedProblems.feedbackDelay,
        response: `We will try to address them as soon as possible.`,
      });
      
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).send("Internal Server Error");
  }
});


app.post("/registeruser", async (req, res) => {
  console.log(req.body);
  try {
    if (!req.body) {
      return res.status(400).send("Empty request body");
    }

    const { username,userpassword, useremail } = req.body;
    if (!sitePerformance || !loggingError || !feedbackDelay) {
      return res.status(422).send("Missing required fields");
    }

    

    
      
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).send("Internal Server Error");
  }
});







app.listen(5000, () => {
  console.log("The server is running on port 5000");
});
