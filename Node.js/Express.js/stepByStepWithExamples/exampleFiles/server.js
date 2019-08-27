let express = require("express");
let cors = require("cors");
let app = express();
let router = require("./routes/routes");
app.use(cors());
app.use(express.json());
let port = 8080;
app.use("/", router);
app.listen(port, () => console.log(`Server is running on PORT: ${port}!`));
