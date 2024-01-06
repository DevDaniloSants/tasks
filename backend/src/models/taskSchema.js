const mongoose = require('mongoose');

const { Schema } = mongoose;

const taskSchema = Schema({
  name: String,
  done: { type: Boolean, default: false },
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
