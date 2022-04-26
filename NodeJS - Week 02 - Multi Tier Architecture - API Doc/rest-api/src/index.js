import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();

const port = 4000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

import { router as movieRouter } from "./controller/movies-router.js";
import { router as rentRouter } from "./controller/rents-router.js";

app.use("/movies", movieRouter);
app.use("/rents", rentRouter);

app.listen(port, (req, res, next) => {
  console.log("Server started at " + port);
});
