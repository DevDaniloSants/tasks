const express = require('express');

const router = express.Router();

// Controller
const { register } = require('../controllers/ChecklistController');

// middlewares
const validate = require('../middlewares/handleValidation');
const {
  checklistCreateValidation,
} = require('../middlewares/checklistValidation');

// routes
router.post('/register', checklistCreateValidation(), validate, register);

module.exports = router;
