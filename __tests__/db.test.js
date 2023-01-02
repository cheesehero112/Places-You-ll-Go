const mongoose = require('mongoose');
const placeModel = require('../server/models/placeModel');
const placeData = { city: 'Yokohama', country: 'Japan', location: { type: 'Point', coordinates: [0, 0] }, notes: 'test' };
require('dotenv').config();

describe('place model test', () => {
  beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true }, (err) => {
      if (err) {
        console.log(err);
        process.exit(1);
      }
    });
  });

  afterAll((done) => {
    // Closing the DB connection allows Jest to exit successfully.
    mongoose.connection.close();
    done();
  });

  it('create an entry successfully', async () => {
    const place = new placeModel(placeData);
    const savedEntry = await place.save();
    // Object Id should be defined when successfully saved to MongoDB.
    expect(savedEntry._id).toBeDefined();
    expect(savedEntry.city).toBe(placeData.city);
    expect(savedEntry.country).toBe(placeData.country);
    expect(savedEntry.notes).toBe(placeData.notes);
  });

  // test delete function
  it('delete an entry successfully', async () => {
    const place = new placeModel(placeData);
    const savedEntry = await place.save();
    const deleted = await placeModel.findOneAndDelete({ _id: savedEntry._id });
    expect(savedEntry._id).toEqual(deleted._id);
  });
});
