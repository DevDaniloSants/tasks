const mongoose = require('mongoose');

const { Schema } = mongoose;

const checklistSchema = Schema(
  
  {
  name: String,
  tasks: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Task',
    },
  ],
},
{
  timestamps: true
}

);

const Checklist = mongoose.model('Checklist', checklistSchema);

module.exports = Checklist;
