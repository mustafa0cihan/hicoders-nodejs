import { BsFillTrashFill } from "react-icons/bs";
import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { v4 as uuidv4 } from "uuid";

const TodoList = () => {
  const { todoList, handleClickAdd, handleClickDelete, handleClickEdit } = useContext(UserContext);
  const [todoInput, setTodoInput] = useState("");

  const newTodo = {
    id: uuidv4(),
    todo: todoInput,
    isChecked: 0,
  };

  const handleCreate = () => {
    if (todoInput !== "") {
      handleClickAdd(newTodo);
      setTodoInput("");
    } else {
      alert("Enter a todo");
    }
  };

  const showTodoList = () => {
    let template = todoList?.map((todo, index) => (
      <div className="d-flex mt-2" key={index}>
        <div className="border border-1 bg-white d-flex align-items-center" style={{ width: "100%" }}>
          <input
            className="form-check-input ms-2 mb-1 fs-4"
            type="checkbox"
            onChange={(e) => handleClickEdit({ id: todo?.id, todo: todo?.todo, isChecked: e.target.checked }, todo?.id)}
            value={todo?.isChecked}
            checked={todo?.isChecked}
            id="flexCheckDefault"
          />
          <span id="todo" className={todo?.isChecked === 1 ? "lined" : "unlined"}>
            {todo?.todo}
          </span>
        </div>
        <button className="btn btn-danger" type="button" onClick={() => handleClickDelete(todo?.id)}>
          <BsFillTrashFill />
        </button>
      </div>
    ));

    return template;
  };

  return (
    <form>
      <h1>Todo List +</h1>
      <div className="d-flex justify-content-center mt-3 mb-4">
        <input type="text" value={todoInput} onChange={(e) => setTodoInput(e.target.value)} className="form-control" placeholder="Add New Todo" />
        <button type="button" onClick={handleCreate} className="btn btn-primary ms-3">
          Add
        </button>
      </div>

      {todoList.length !== 0 ? showTodoList() : ""}
    </form>
  );
};

export default TodoList;
