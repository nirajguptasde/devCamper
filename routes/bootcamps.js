const express = require('express');
const router = express.Router();

// get all bootcamps
router.get('/', (req, res) => {
  res.status(200).json({ success: true, msg: 'Show all bootcamps' });
});

// get single bootcamp
router.get('/:id', (req, res) => {
  res.status(200).json({ success: true, msg: `Get bootcamp ${req.params.id}` });
});

// create new bootcamp
router.post('/', (req, res) => {
  res.status(200).json({ success: true, msg: `Create new bootcamp` });
});

// update a bootcamp
router.put('/:id', (req, res) => {
  res.status(200).json({ success: true, msg: `Update bootcamp ${req.params.id}` });
});

router.delete('/:id', (req, res) => {
  res.status(200).json({ success: true, msg: `Delete bootcamp ${req.params.id}` });
});


module.exports = router;