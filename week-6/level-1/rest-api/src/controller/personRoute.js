import express from "express";
const router = express.Router();

import personService from "../services/personService.js";

router.get("/", async (req, res) => {
  const personList = await personService.getPeople(req.query.status);
  res.status(200).send(personList);
});

router.post("/", async (req, res) => {
  const person = req.body;
  const addedPerson = await personService.addPeople(person);
  res.status(201).send(addedPerson);
});

export default router;
