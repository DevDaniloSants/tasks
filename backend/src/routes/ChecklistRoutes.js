const express = require('express');

const router = express.Router();

// Controller
const { register } = require('../controllers/ChecklistController');

// routes
router.post('/register', register)

module.exports = router;
