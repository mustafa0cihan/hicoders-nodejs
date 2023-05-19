import Todo from "../models/todoModel.js";

const findAllTodos = async () => {
  try {
    return await Todo.findAll();
  } catch (error) {
    console.log(error);
  }
};

const createTodo = async (pNewTodo) => {
  try {
    return await Todo.create(pNewTodo);
  } catch (error) {
    console.log(error);
  }
};

const deleteTodo = async (pId) => {
  try {
    return await Todo.destroy({
      where: { id: pId },
    });
  } catch (error) {
    console.log(error);
  }
};

const updateTodo = async (pTodo, pId) => {
  try {
    return await Todo.update(pTodo, {
      where: { id: pId },
    });
  } catch (error) {
    console.log(error);
  }
};

export default { findAllTodos, createTodo, deleteTodo, updateTodo };
