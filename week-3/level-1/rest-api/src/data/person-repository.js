import db from "../models/person_list.js";

const findPeople = async (pStatus) => {
  if (pStatus === "all") {
    return await db.query("SELECT * FROM person_list");
  } else {
    return await db.query(`SELECT * FROM person_list WHERE maritalStatus = "${pStatus}"`);
  }
};

const createPerson = async (pPerson) => {
  return await db.query(
    `INSERT INTO person_list VALUES("${pPerson.id}", "${pPerson.name}", "${pPerson.surname}", "${pPerson.age}", "${pPerson.maritalStatus}")`
  );
};

export default { findPeople, createPerson };
