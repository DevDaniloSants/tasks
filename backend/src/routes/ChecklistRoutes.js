const express = require('express');

const router = express.Router();

// Controller
const { register } = require('../controllers/ChecklistController');

// middlewares
const validate = require('../middlewares/handleValidation');

// routes
router.post('/register', validate, register);

module.exports = router;
