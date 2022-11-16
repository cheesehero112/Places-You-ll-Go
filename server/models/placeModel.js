const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const placeSchema = new Schema(
  {
    city: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    geoLocation: [{ 'lat': Number, 'long': Number }],
    notes: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('place', placeSchema);
