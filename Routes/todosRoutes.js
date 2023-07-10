const express = require("express");
const {
  createTodo,
  getTodos,
  updateTodo,
  deleteTodo,
} = require("../Controllers/TodosControllers");

const router = express.Router();

router.post("/todos", createTodo);
router.get("/todos", getTodos);
router.put("/todos/:id", updateTodo);
router.delete("/todos/:id", deleteTodo);

module.exports = router;
