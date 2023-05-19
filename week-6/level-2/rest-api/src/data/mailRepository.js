import Mail from "../models/mailModel.js";

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

export default { createMail, findAllOfMail };
