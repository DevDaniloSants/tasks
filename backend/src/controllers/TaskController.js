const Checklist = require('../models/checklistSchema');
const Task = require('../models/taskSchema');

const registerTask = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  try {
    const checklist = await Checklist.findById({ _id: id });

    if (!checklist) {
      res.status(404).json({ errors: 'Checklist não encontrada' });
    }

    const newTask = await Task.create({ name });

    checklist.tasks.push(newTask);

    await checklist.save();

    res.status(201).json(checklist);
  } catch (error) {
    res.status(404).json({ errors: 'Checklist não encontrada' });
  }
};

module.exports = {
  registerTask,
};
