const mongoose = require('mongoose');
const { Schema } = mongoose;

const todoShema = new Schema({
  title: {
    type: String,
    unique: true,
    required: [true, 'Başlık zorunlu alandır.'],
  },
  detail: {
    type: String,
    required: [true, 'Detay zorunlu alandır.'],
  },
});

const Todo = mongoose.model('Todo', todoShema);

module.exports = Todo;