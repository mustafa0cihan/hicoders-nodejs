import express from "express";
const router = express.Router();
import * as rentService from "../service/rent-services.js";

// GET all rents
router.get("/", async (req, res) => {
  const rentList = await rentService.getRents();

  res.status(200).send(rentList);
});

// ADD a rent
router.post("/", async (req, res) => {
  const newRent = req.body;
  const rentList = await rentService.addRent(newRent);

  res.status(201).send(rentList);
});

export { router };
