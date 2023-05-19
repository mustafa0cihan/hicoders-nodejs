import Person from "../models/personModel.js";

const findPeople = async (pStatus) => {
  if (pStatus === "all") {
    try {
      return await Person.findAll();
    } catch (error) {
      console.log(error);
    }
  } else {
    try {
      return await Person.findAll({
        where: { maritalStatus: pStatus },
      });
    } catch (error) {
      console.log(error);
    }
  }
};

const createPerson = async (pPerson) => {
  try {
    return await Person.create(pPerson);
  } catch (error) {
    console.log(error);
  }
};

export default { findPeople, createPerson };
