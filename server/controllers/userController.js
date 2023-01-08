const User = require('../models/userModel');

// login user
const loginUser = async (req, res) => {
  res.json({ msg: 'login user' });
};
// signup user
const signupUser = async (req, res) => {
  res.json({ msg: 'signup user' });
};

module.exports = { signupUser, loginUser };
