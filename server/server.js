const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

// import routes
const placesRoutes = require('./routes/places');
// global json check
app.use(express.json());

// route handlers
app.use('/api/places', placesRoutes);

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //listen for requests
    app.listen(process.env.PORT, () => {
      console.log(`connected to DB, and listening on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
