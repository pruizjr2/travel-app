const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();

// Register
router.post('/register', async (req,res) => {
    const {username, email, password} = req.body;
    const passwordHash = await bcrypt.hash(password,10);
    const user = new User({username, email, passwordHash});
    await user.save();
    res.json({ message: 'User registered.' });
});

module.exports = router;