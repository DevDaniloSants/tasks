const express = require('express');

const router = express.Router();

// Controller
const {
  register,
  getAllChecklist,
  deleteChecklist,
  getChecklistId,
  updateChecklist,
} = require('../controllers/ChecklistController');

// middlewares
const validate = require('../middlewares/handleValidation');
const {
  checklistCreateValidation,
  checklistUpdateValidation,
} = require('../middlewares/checklistValidation');

// routes
router.post('/register', checklistCreateValidation(), validate, register);
router.get('/', getAllChecklist);
router.get('/:id', getChecklistId);
router.put('/:id', checklistUpdateValidation(), validate, updateChecklist);
router.delete('/:id', deleteChecklist);

module.exports = router;
