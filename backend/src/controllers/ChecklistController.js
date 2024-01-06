const Checklist = require('../models/checklistSchema');

// register checklist test
const register = async (req, res) => {
  const { name } = req.body;

  const newChecklist = await Checklist.create({ name });

  res.status(201).json(newChecklist);
};

const getAllChecklist = async (req, res) => {
  const checklists = await Checklist.find({})
    .sort([['createdAt', -1]])
    .exec();

  return res.status(200).json(checklists);
};

module.exports = {
  register,
  getAllChecklist,
};
