const express = require('express');
const router = express.Router();
const { getPlaces, createPlace } = require('../controllers/placesController');

// GET all places
router.get('/', getPlaces);

// POST a new workout
router.post('/', createPlace);

module.exports = router;
