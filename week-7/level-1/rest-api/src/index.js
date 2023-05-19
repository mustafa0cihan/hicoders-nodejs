import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import personRouter from "./controller/personRoute.js";
import mailRouter from "./controller/mailRoute.js";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use("/api/person", personRouter);
app.use("/api/email", mailRouter);

app.listen(5000, () => {
  console.log("rest-api running on port 5000");
});
