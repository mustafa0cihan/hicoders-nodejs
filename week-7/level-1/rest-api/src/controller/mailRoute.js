import express from "express";
const router = express.Router();

// import mailService from "../services/mailService.js";
import reminderMailService from "../services/reminderMailService.js";

router.get("/", async (req, res) => {
  const mailList = await reminderMailService.getMails();
  res.status(200).send(mailList);
});

router.post("/", async (req, res) => {
  const maritalStatus = req.body;
  const sendedMail = await reminderMailService.addMail(maritalStatus);
  await reminderMailService.sendReminderEmail(maritalStatus);
  res.status(201).send(sendedMail);
});

export default router;
