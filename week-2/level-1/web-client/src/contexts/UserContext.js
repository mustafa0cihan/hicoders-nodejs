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

  return <UserContext.Provider value={{ personList, getPersonList }}>{props.children}</UserContext.Provider>;
};

export default UserContextProvider;
