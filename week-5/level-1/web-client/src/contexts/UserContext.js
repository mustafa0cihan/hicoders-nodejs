import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

const UserContextProvider = (props) => {
  const [mailList, setMailList] = useState([]);

  const getMailList = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/mail");
      const data = await response.json();
      setMailList(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMailList();
  }, []);

  const addMail = async (pMail) => {
    const newMail = {
      id: pMail.id,
      mail: pMail.mail,
      title: pMail.title,
      message: pMail.message,
    };

    await fetch("http://localhost:5000/api/mail", {
      method: "POST",
      body: JSON.stringify(newMail),
      headers: { "Content-Type": "application/json" },
    });

    await getMailList();
  };

  return <UserContext.Provider value={{ addMail, mailList }}>{props.children}</UserContext.Provider>;
};

export default UserContextProvider;
