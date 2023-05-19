const personList = [
  {
    id: 1,
    name: "Maxwell",
    surname: "Ryan",
    age: 21,
    maritalStatus: "single",
  },
  {
    id: 2,
    name: "Georgie",
    surname: "Greenwood",
    age: 51,
    maritalStatus: "married",
  },
  {
    id: 3,
    name: "Glen",
    surname: "Frost",
    age: 19,
    maritalStatus: "single",
  },
  {
    id: 4,
    name: "Norris",
    surname: "Manning",
    age: 42,
    maritalStatus: "married",
  },
  {
    id: 5,
    name: "Max",
    surname: "Gill",
    age: 22,
    maritalStatus: "married",
  },
];

const findPeople = (pStatus) => {
  if (pStatus === "all") {
    return personList;
  } else {
    return personList.filter((person) => person.maritalStatus === pStatus);
  }
};

export default { findPeople };
