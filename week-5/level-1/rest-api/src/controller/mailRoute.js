import express from "express";
const router = express.Router();

import mailRepository from "../data/mailRepository.js";

router.get("/", async (req, res) => {
  const mailList = await mailRepository.findAllOfMail();
  res.status(200).send(mailList);
});

router.post("/", async (req, res) => {
  let mail = req.body;
  const sendedMail = await mailRepository.createMail(mail);
  // to send mail
  await mailRepository.sendMailOfUser(mail);
  res.status(201).send(sendedMail);
});

export default router;
