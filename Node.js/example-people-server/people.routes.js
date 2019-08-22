//! The only purpose of this module is to add in the end points for people

let express = require("express");
let peopleRoutes = express.Router();
let people = require("./people");

peopleRoutes.get("/people", (req, res) => {
  res.send(people);
});

peopleRoutes.post("/people", (req, res) => {
  console.log(req.body);
  people.push(req.body); //this statement adds the posted object to the array of people. When we restart the server it will now be a person in the array
  res.send(people);
});

peopleRoutes.put("/people/:id", (req, res) => {
  let index = people.findIndex(person => person.id === req.params.id);
  people.splice(index, 1, req.body); //! We find the index, spice it in, and fill back in the body of the request(data that we are sending, object or data)
  res.send(people); //! Sending back updated array
});

peopleRoutes.delete("/people/:id", (req, res) => {
  //:id is a parameter
  console.log(req.params.id); //when working with parameters, we always access with req.params....
  let index = people.findIndex(person => person.id === req.params.id); // this arrow function says take person in people, and compares the id to the req.params.id
  people.splice(index, 1);
  res.send(people);
});

module.exports = peopleRoutes;
