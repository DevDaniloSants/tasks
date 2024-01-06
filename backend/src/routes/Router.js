const express = require('express');
const router = express.Router();

// routes
router.use('/api/checklists', require('./ChecklistRoutes'));

// router test
router.get('/', (req, res) => {
  res.send('Route working');
});

module.exports = router;
