const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

// user data model
const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Static signup method
userSchema.statics.signup = async function (email, password) {
  const exists = await this.findOne({ email });
  if (exists) {
    throw Error('Email already in use');
  }
  // Salt & Hash
  const SALT = await bcrypt.genSalt(10);
  const HASH = await bcrypt.hash(password, SALT);

  // save to DB
  const user = await this.create({ email, password: HASH });

  return user;
};

module.exports = mongoose.model('User', userSchema);
