import db from "../models/todoList.js";

const findAllTodos = async () => {
  return await db.query("SELECT * FROM todo_list");
};

const createTodo = async (pNewTodo) => {
  return await db.query(`INSERT INTO todo_list VALUES("${pNewTodo.id}", "${pNewTodo.todo}", "${pNewTodo.checking}")`);
};

const deleteTodo = async (pId) => {
  return await db.query(`DELETE FROM todo_list WHERE id = "${pId}"`);
};

const updateTodo = async (pTodo, pId) => {
  return await db.query(`UPDATE todo_list SET id = "${pTodo.id}", todo = "${pTodo.todo}", checking = ${pTodo.checking} WHERE id = "${pId}"`);
};

export default {
  findAllTodos,
  createTodo,
  deleteTodo,
  updateTodo,
};
