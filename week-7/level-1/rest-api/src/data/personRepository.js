import Person from "../models/personModel.js";

const findPeople = async () => {
  try {
    return await Person.findAll();
  } catch (error) {
    console.log(error);
  }
};

const findPeopleWithMaritalStatus = async (pStatus) => {
  try {
    return await Person.findAll({
      where: { maritalStatus: pStatus },
    });
  } catch (error) {
    console.log(error);
  }
};

const createPerson = async (pPerson) => {
  try {
    return await Person.create(pPerson);
  } catch (error) {
    console.log(error);
  }
};

export default { findPeople, findPeopleWithMaritalStatus, createPerson };
