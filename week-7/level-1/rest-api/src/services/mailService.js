import nodemailer from "nodemailer";
import mailRepository from "../data/mailRepository.js";

const getMails = async () => {
  return await mailRepository.findAllOfMail();
};

const addMail = async (pMail) => {
  return await mailRepository.createMail(pMail);
};

const gmailTransporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    // not forget to adjust less secure app property
    user: "your email",
    pass: "your password",
  },
});

const sendToPersonEmail = async (pEmail, pTitle, pMessage) => {
  const emailOptions = {
    from: "your name and surname <your mail>",
    to: pEmail,
    subject: pTitle,
    html: pMessage,
    attachements: [],
  };

  gmailTransporter.sendMail(emailOptions, (err, info) => {
    if (err) {
      console.error(err);
    } else console.log(info);
  });
};

export default { sendToPersonEmail, getMails, addMail };
