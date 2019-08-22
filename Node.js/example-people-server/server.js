let express = require("express"); // calling express functions
let app = express(); //what the express function returns
let port = 5000;
let peopleRoutes = require("./routes/people.routes");

app.use(express.json()); //This has to be before the app.use("/", peopleRoutes)
app.use("/", peopleRoutes);

app.listen(port, () => console.log(`Server running on port: ${port}`));
