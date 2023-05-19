import personRepository from "../data/personRepository.js";

const getPeople = async (pStatus) => {
  if (pStatus === "all") {
    return await personRepository.findPeople();
  } else {
    return await personRepository.findPeopleWithMaritalStatus(pStatus);
  }
};

const addPeople = async (pPerson) => {
  return await personRepository.createPerson(pPerson);
};

export default { getPeople, addPeople };
