const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController')

router
  .route('/')
  .get(todoController.getAllTodos);

module.exports = router;
