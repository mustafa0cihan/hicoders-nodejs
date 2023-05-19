import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

const UserContextProvider = (props) => {
  const [personList, setPersonList] = useState([]);
  const [filteredUserList, setFilteredUserList] = useState([]);

  const getPersonList = async () => {
    try {
      const response = await fetch("http://localhost:5000/person");
      const data = await response.json();
      setPersonList(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPersonList();
  }, []);

  const getFilteredPersonList = async (pGender) => {
    try {
      const response = await fetch(`http://localhost:5000/person/filter?gender=${pGender}`);
      const data = await response.json();
      setFilteredUserList(data);
      // console.log(filteredUserList)
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(filteredUserList)
  // useEffect(() => {
  //   getFilterUserList();
  // }, []);

  return <UserContext.Provider value={{ personList, getPersonList, filteredUserList, getFilteredPersonList }}>{props.children}</UserContext.Provider>;
};

export default UserContextProvider;
