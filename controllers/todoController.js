const Todo = require('../models/todoModel');

exports.getAllTodos = async (req, res, next) => {
  const todos = await Todo.find();
  res.status(200).json({
    data: todos,
    status: 'success',
    results: todos.length,
  });
}