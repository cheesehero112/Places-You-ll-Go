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
  let errorField = [];
  if (!city) {
    errorField.push('city');
  }
  if (!country) {
    errorField.push('country');
  }
  if (errorField.length > 0) {
    return res.status(400).json({ error: 'Please fill in both required fields', errorField });
  }
  // add data to db
  try {
    const place = await Place.create({ city, country, geoLocation, notes });
    res.status(200).json(place);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a place
const deletePlace = async (req, res) => {
  const { id } = req.params;
  try {
    const place = await Place.findOneAndDelete({ _id: id });
    res.status(200).json(place);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// update a place
const updatePlace = async (req, res) => {
  const { id } = req.params;
  try {
    const place = await Place.findOneAndUpdate({ _id: id }, { ...req.body });
    res.status(200).json(place);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getPlaces,
  createPlace,
  deletePlace,
  updatePlace,
};
