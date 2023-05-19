import nodemailer from "nodemailer";
import mailRepository from "../data/mailRepository.js"

const getMails = async () => {
  return await mailRepository.findAllOfMail();
};

const addMail = async (pMail) => {
  return await mailRepository.createMail(pMail);
};

/////////////////////// to send email //////////////////////////////
const gmailTransporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    // not forget to adjust less secure app property
    user: "your email",
    pass: "your password",
  },
});

const sendMailOfUser = async (pEmail) => {
  const emailOptions = {
    from: "your name <your email>",
    to: pEmail.mail,
    subject: pEmail.title,
    html: pEmail.message,
    attachements: [],
  };

  gmailTransporter.sendMail(emailOptions, (err, info) => {
    if (err) {
      console.error(err);
    } else console.log(info);
  });
};
////////////////////////////////////////////////////////////////////

export default { addMail, getMails, sendMailOfUser };
