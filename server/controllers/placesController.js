const mongoose = require('mongoose');
const Place = require('../models/placeModel');

// get all the places saved
const getPlaces = async (req, res) => {
  const places = await Place.find({}).sort({ createdAt: -1 });
  res.status(200).json(places);
};

// create a new place
const createPlace = async (req, res) => {
  const { city, country, geoLocation, notes } = req.body;
  // add data to db
  try {
    const place = await Place.create({ city, country, geoLocation, notes });
    res.status(200).json(place);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getPlaces,
  createPlace,
};
