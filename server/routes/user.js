const express = require('express');
const router = express.Router();

// controller functions
const { signupUser, loginUser } = require('../controllers/userController');

// Log in route
router.post('/login', loginUser);

// Sign up route
router.post('/signup', signupUser);

module.exports = router;
