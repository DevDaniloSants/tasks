const express = require('express');
const router = express.Router();

// routes

router.use('/api/checklists', require('./ChecklistRoutes'));
router.use('/api/checklists', require('./TaskRoutes'));

// router test
router.get('/', (req, res) => {
  res.send('Route working');
});

module.exports = router;
