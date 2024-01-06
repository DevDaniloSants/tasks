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

const deleteChecklist = async (req, res) => {
  const { id } = req.params;

  try {
    const checklist = await Checklist.findById(id);

    if (!checklist) {
      res.status(404).json({ errors: 'Checklist não encontrada' });
      return;
    }

    await Checklist.findByIdAndDelete(checklist._id);

    res.status(200).json({
      id: checklist._id,
      message: ` Checklist ${checklist.name} foi excluída com sucesso`,
    });
  } catch (error) {
    res.status(404).json({ errors: 'Checklist não encontrada' });
    return;
  }
};

module.exports = {
  register,
  getAllChecklist,
  deleteChecklist,
};
