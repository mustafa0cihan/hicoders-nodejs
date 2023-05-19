import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

const UserContextProvider = (props) => {
  const [todoList, setTodoList] = useState([]);

  const getTodoList = async () => {
    const response = await fetch("http://localhost:8080/api/todos");
    const data = await response.json();
    setTodoList(data);
  };

  useEffect(() => {
    getTodoList();
  }, []);

  const handleClickAdd = async (pNewTodo) => {
    await fetch("http://localhost:8080/api/todos", {
      method: "POST",
      body: JSON.stringify(pNewTodo),
      headers: { "Content-Type": "application/json" },
    });

    await getTodoList();
  };

  const handleClickDelete = async (pId) => {
    await fetch("http://localhost:8080/api/todos/" + pId, {
      method: "DELETE",
    });

    await getTodoList();
  };

  const handleClickEdit = async (pTodo, pId) => {
    await fetch("http://localhost:8080/api/todos/" + pId, {
      method: "PUT",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify(pTodo),
    });

    await getTodoList();
  };

  return <UserContext.Provider value={{ todoList, handleClickAdd, handleClickDelete, handleClickEdit }}>{props.children}</UserContext.Provider>;
};

export default UserContextProvider;
