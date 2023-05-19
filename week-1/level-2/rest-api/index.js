import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

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

//ENDPOINTS
app.get("/api/todos", (req, res) => {
  res.status(200).send(todoList);
});

app.post("/api/todos", (req, res) => {
  const newTodo = req.body;
  res.status(201).send({
    id: newTodo.id,
    todo: newTodo.todo,
    checking: newTodo.checking,
  });

  todoList.push(newTodo);
});

app.delete("/api/todos/:id", (req, res) => {
  let index = todoList.findIndex((item) => item.id == req.params.id);
  todoList.splice(index, 1);
  res.sendStatus(200);
});

app.put("/api/todos/:id", (req, res) => {
  const editedTodo = req.body;
  res.status(201).send(editedTodo);

  const index = todoList.findIndex((item) => item.id == req.params.id);
  todoList[index] = editedTodo;
});

app.listen(8080, () => {
  console.log("rest-api running on port 8080");
});
