const mongoose = require('mongoose');

const { Schema } = mongoose;

const taskSchema = Schema({
  name: { type: String, required: true },
  done: { type: Boolean, default: false },
  checklist: {
    type: Schema.Types.ObjectId,
    ref: 'Checklist',
    required: true,
  },
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
