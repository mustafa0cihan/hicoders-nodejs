import express from "express";
const router = express.Router();

import personRepository from "../data/person-repository.js";

router.get("/", (req, res) => {
  const personList = personRepository.findPeople(req.query.status);
  res.status(200).send(personList);
});

export default router;
