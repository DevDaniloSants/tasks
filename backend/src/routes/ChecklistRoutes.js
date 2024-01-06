const express = require('express');

const router = express.Router();

// Controller
const {
  register,
  getAllChecklist,
} = require('../controllers/ChecklistController');

// middlewares
const validate = require('../middlewares/handleValidation');
const {
  checklistCreateValidation,
} = require('../middlewares/checklistValidation');

// routes
router.post('/register', checklistCreateValidation(), validate, register);
router.get('/', getAllChecklist);

module.exports = router;
