import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

const UserContextProvider = (props) => {
  const [personList, setPersonList] = useState([]);

  const getPersonList = async (pStatus) => {
    try {
      const response = await fetch(`http://localhost:5000/api/person?status=${pStatus}`);
      const data = await response.json();
      setPersonList(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPersonList("all");
  }, []);

  const addPerson = async (pPerson) => {
    const newPerson = {
      id: pPerson.id,
      name: pPerson.name,
      surname: pPerson.surname,
      mail: pPerson.mail,
      maritalStatus: pPerson.maritalStatus,
    };

    await fetch("http://localhost:5000/api/person", {
      method: "POST",
      body: JSON.stringify(newPerson),
      headers: { "Content-Type": "application/json" },
    });

    getPersonList("all");
  };

  const sendEmail = async (pStatus) => {
    await fetch("http://localhost:5000/api/email", {
      method: "POST",
      body: JSON.stringify(pStatus),
      headers: { "Content-Type": "application/json" },
    });
  };

  return <UserContext.Provider value={{ personList, getPersonList, addPerson, sendEmail }}>{props.children}</UserContext.Provider>;
};

export default UserContextProvider;
