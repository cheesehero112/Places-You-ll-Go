const express = require('express');
const router = express.Router();
const { getPlaces, createPlace, updatePlace, deletePlace } = require('../controllers/placesController');

// GET all places
router.get('/', getPlaces);

// POST a new place
router.post('/', createPlace);

// DELETE a place
router.delete('/:id', deletePlace);

// UPDATE a place
router.patch('/:id', updatePlace);

module.exports = router;
