import express from "express";
const router = express.Router();

import todoRepository from "../data/todo-repository.js";

router.get("/", async (req, res) => {
  const todoList = await todoRepository.findAllTodos();
  res.status(200).send(todoList);
});

router.post("/", async (req, res) => {
  const todo = req.body;
  const newTodo = {
    id: todo.id,
    todo: todo.todo,
    checking: todo.checking,
  };

  const addedTodo = await todoRepository.createTodo(newTodo);
  res.status(201).send(addedTodo);
});

router.delete("/:id", async (req, res) => {
  const todoId = req.params.id;
  await todoRepository.deleteTodo(todoId);
  res.status(200).send(todoId);
});

router.put("/:id", async (req, res) => {
  const todo = req.body;
  const todoId = req.params.id;
  const updatedTodo = {
    id: todo.id,
    todo: todo.todo,
    checking: todo.checking,
  };
  const editedTodo = await todoRepository.updateTodo(updatedTodo, todoId);
  res.status(201).send(editedTodo);
});

export default router;
