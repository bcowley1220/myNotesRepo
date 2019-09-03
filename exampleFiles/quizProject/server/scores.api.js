let express = require("express");
let routerScores = express.Router();
let pool = require("../connection/connection"); // everyone get in line when making api requests

function selectAllScores(req, res) {
  pool
    .query("select * from scores order by score desc limit 10")
    .then(result => {
      res.send(result.rows);
    });
}
routerScores.get("/scores", selectAllScores);

routerScores.post("/scores", (req, res) => {
  pool
    .query("insert into scores (user_name, score) values ($1::text, $2::int)", [
      req.body.user_name,
      req.body.score
    ])
    .then(() => {
      selectAllScores(req, res);
    });
});

module.exports = routerScores;
