let express = require("express");
let routerQuestions = express.Router();
let pool = require("../connection/connection"); // everyone get in line when making api requests

function selectAllQuestions(req, res) {
  pool
    .query("select * from questions order by random() limit 10")
    .then(result => {
      res.send(result.rows);
    });
}
routerQuestions.get("/questions", selectAllQuestions);

module.exports = routerQuestions;
