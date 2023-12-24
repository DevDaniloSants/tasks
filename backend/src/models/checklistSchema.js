const mongoose = require('mongoose');

const { Schema } = mongoose;

const checklistSchema = Schema({
  name: { type: String, required: true },
  tasks: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Task',
    },
  ],
});

const Checklist = mongoose.model('Checklist', checklistSchema);

module.exports = Checklist;
