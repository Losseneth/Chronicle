const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");

//Config
app.set("port", 3000);
app.set("json spaces", 2);

//Middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

//Routes
app.use("/api/tiers", require("./Routes/routes"));

//Server Start
app.listen(app.get("port"));
console.log("Done");