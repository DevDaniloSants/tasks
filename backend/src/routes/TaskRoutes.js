const express = require('express');
const router = express.Router();

// controller
const { registerTask } = require('../controllers/TaskController');

// middlewares
const validate = require('../middlewares/handleValidation');
const { taskCreateValidation } = require('../middlewares/taskValidation');

// routes
router.post('/:id/tasks/new', taskCreateValidation(), validate, registerTask);

module.exports = router;
