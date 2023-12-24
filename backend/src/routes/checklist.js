const express = require('express');

const router = express.Router();

const Checklist = require('../models/checklistSchema');

// GET
router.get('/', async (req, res) => {
  try {
    const checklists = await Checklist.find({});
    res.status(200).send(checklists);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const checklist = await Checklist.findById(req.params.id);
    res.status(200).send(checklist);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

// post
router.post('/', async (req, res) => {
  const { name } = req.body;

  try {
    const checklist = await Checklist.create({ name });

    res.status(201).send(checklist);
  } catch (error) {
    console.log(error);
    res.status(422).send(error);
  }
});

// put
router.put('/:id', async (req, res) => {
  try {
    const { name } = req.body;
    const checklist = await Checklist.findByIdAndUpdate(
      req.params.id,
      {
        name,
      },
      { new: true },
    );
    res.status(201).send(checklist);
  } catch (error) {
    console.log(error);
    res.status(422).send(error);
  }
});

// delete
router.delete('/:id', async (req, res) => {
  try {
    const checklist = await Checklist.findByIdAndDelete(req.params.id);
    res.status(201).send(checklist);
  } catch (error) {
    console.log(error);
    res.status(422).send(error);
  }
});

module.exports = router;
