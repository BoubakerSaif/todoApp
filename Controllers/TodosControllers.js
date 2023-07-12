const TODO = require("../Model/todo");

const createTodo = async (req, res) => {
  try {
    const todo = await TODO.create(req.body);
    res.status(201).json(todo);
  } catch (error) {
    console.log(error);
  }
};

const getTodos = async (req, res) => {
  try {
    const todos = await TODO.find();
    res.status(200).json(todos);
  } catch (error) {
    console.log(error);
  }
};

const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    console.log(req.body);
    const updatedTodo = await TODO.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updatedTodo);
  } catch (error) {
    console.log(error);
  }
};

const deleteTodo = async (req, res) => {
  try {
    const deletedTodo = await TODO.findByIdAndDelete(req.params.id);
    res.json(deletedTodo);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { createTodo, getTodos, updateTodo, deleteTodo };
