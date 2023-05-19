import Mail from "../models/mailModel.js";
import nodemailer from "nodemailer";

/////////////////////// to send email //////////////////////////////
// we will put this part to the service in later lessons
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
    from: "your email",
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

const findAllOfMail = async () => {
  try {
    return await Mail.findAll();
  } catch (error) {
    console.log(error);
  }
};

const createMail = async (pMail) => {
  try {
    return await Mail.create(pMail);
  } catch (error) {
    console.log(error);
  }
};

export default { createMail, findAllOfMail, sendMailOfUser };
