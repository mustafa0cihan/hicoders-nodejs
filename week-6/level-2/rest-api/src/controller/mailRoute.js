import express from "express";
const router = express.Router();

import mailService from "../services/mailService.js";

router.get("/", async (req, res) => {
  const mailList = await mailService.getMails();
  res.status(200).send(mailList);
});

router.post("/", async (req, res) => {
  let mail = req.body;
  const sendedMail = await mailService.addMail(mail);
  // to send mail
  await mailService.sendMailOfUser(mail);
  res.status(201).send(sendedMail);
});

export default router;
