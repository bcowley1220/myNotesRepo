let express = require("express");
let router = express.Router();
let pool = require("../connection/connection"); // everyone get in line when making api requests

function selectAllAnimals(req, res) {
  pool.query("select * from animals order by id").then(result => {
    res.send(result.rows);
  });
}

router.get("/animals", selectAllAnimals);

router.post("/animals", (req, res) => {
  pool
    .query(
      "insert into animals (name, animal_type, color, age, owner, breed, cuteness) values ($1::text, $2::text, $3::text, $4::int, $5::text, $6::text, $7::int)",
      [
        req.body.name,
        req.body.animal_type,
        req.body.color,
        req.body.age,
        req.body.owner,
        req.body.breed,
        req.body.cuteness
      ]
    )
    .then(() => {
      selectAllAnimals(req, res);
    });
});

router.put("/animals/:id", (req, res) => {
  pool
    .query(
      "update animals set name=$1::text, animal_type=$2::text, color=$3::text, age=$4::int, owner=$5::text, breed=$6::text, cuteness=$7::int where id=$8::int",
      [
        req.body.name,
        req.body.animal_type,
        req.body.color,
        req.body.age,
        req.body.owner,
        req.body.breed,
        req.body.cuteness,
        req.params.id
      ]
    )
    .then(() => {
      selectAllAnimals(req, res);
    });
});

router.delete("/animals/:id", (req, res) => {
  pool
    .query("delete from animals where id=$1::int", [req.params.id])
    .then(() => {
      selectAllAnimals(req, res);
    });
});

module.exports = router;
