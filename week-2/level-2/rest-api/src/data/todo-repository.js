const todoList = [
  {
    id: 1,
    todo: "html assignment",
    checking: false,
  },
  {
    id: 2,
    todo: "css assignment",
    checking: false,
  },
  {
    id: 3,
    todo: "js assignment",
    checking: true,
  },
];

const findAllTodos = () => {
  return todoList;
};

const createTodo = (pNewTodo) => {
  todoList.push(pNewTodo);
  return pNewTodo;
};

const deleteTodo = (pId) => {
  let index = todoList.findIndex((todo) => todo.id == pId);
  return todoList.splice(index, 1);
};

const updateTodo = (pTodo, pId) => {
  const index = todoList.findIndex((todo) => todo.id == pId);
  todoList[index] = pTodo;
  return todoList[index];
};

export default {
  findAllTodos,
  createTodo,
  deleteTodo,
  updateTodo,
};
