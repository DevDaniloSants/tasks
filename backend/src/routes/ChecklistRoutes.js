const express = require('express');

const router = express.Router();

// Controller
const {
  register,
  getAllChecklist,
  deleteChecklist,
} = require('../controllers/ChecklistController');

// middlewares
const validate = require('../middlewares/handleValidation');
const {
  checklistCreateValidation,
} = require('../middlewares/checklistValidation');

// routes
router.post('/register', checklistCreateValidation(), validate, register);
router.get('/', getAllChecklist);
router.delete('/:id', deleteChecklist);

module.exports = router;
