const express = require("express");
const addSchool = require("./AddSchool").addSchool;
const fetchSchools = require("./fetchSchool").fetchSchools;
require("dotenv").config();

const app = express();

app.use(express.json());






app.post("/api/addSchool", addSchool);
app.get("/api/listSchools", fetchSchools);


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});