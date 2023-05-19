import express from "express";
const router = express.Router();

import personRepository from "../data/person-repository.js";

router.get("/", async (req, res) => {
  const personList = await personRepository.findPeople(req.query.status);
  res.status(200).send(personList);
});

router.post("/", async (req, res) => {
  let person = req.body;
  // let movieId = req.params.id
  const addedPerson = await personRepository.createPerson(person);
  res.status(201).send(addedPerson);
});

export default router;
