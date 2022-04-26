const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");

const app = express();

const PORT = 3100;

const accessControl = (req, res, next) => {
  next();
};

app.use(cors());
app.use(accessControl);
app.use(express.json());
app.use(bodyParser.json());

const movieRouter = require("./routes/movies");
const rentRouter = require("./routes/rents");
app.use("/movies", movieRouter);
app.use("/rents", rentRouter);

app.listen(PORT, (req, res, next) => {
  console.log("Server started at " + PORT);
});
