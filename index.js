const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

// IMPORT DATABASE -- SUPER IMPORTANT
const db = require("./queries");

// ENTRY POINT FOR OUR SERVER -- PROLLY GONNA WRITE THIS EVERY TIME @ THE START
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
// BASIC ENDPOINT W/ STATIC DATA
app.get("/", (request, response) => {
  response.json({ info: "IYKYK" });
});

// RUN SERVER -- DEF GONNA BE WRITING THIS EVERYTIME TOO
app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});

// USE ACTIONS IMPORTED FROM QUERIES.JS AS ENDOINTS
app.get("/users", db.getUsers);
app.get("/users/:id", db.getUserById);
app.post("/users", db.createUser);
app.put("/users/:id", db.updateUser);
app.delete("/users/:id", db.deleteUser);
