const checklist = require('../models/checklistSchema');

// register checklist test
const register = async (req, res) => {
  res.send('Registrou');
};

module.exports = {
  register,
};
