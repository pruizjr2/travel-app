const express = require('express');
const router = express.Router();
const Review = require('../models/Review'); // adjust path if needed
const User = require('../models/User');

// Middleware to verify admin
function isAdmin(req, res, next) {
  if (req.session.user && req.session.user.role === 'admin') {
    next();
  } else {
    res.status(403).json({ error: 'Access denied' });
  }
}

// DELETE /api/admin/reviews/:id
router.delete('/reviews/:id', isAdmin, async (req, res) => {
  try {
    await Review.findByIdAndDelete(req.params.id);
    res.json({ message: 'Review deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to delete review' });
  }
});

// (optional) GET all users
router.get('/users', isAdmin, async (req, res) => {
  const users = await User.find().select('-passwordHash');
  res.json(users);
});

// (optional) PUT promote user to advertiser
router.put('/promote/:id', isAdmin, async (req, res) => {
  const user = await User.findById(req.params.id);
  if (user && user.role === 'user') {
    user.role = 'advertiser';
    await user.save();
    res.json({ message: 'User promoted' });
  } else {
    res.status(400).json({ error: 'Invalid user or already promoted' });
  }
});

module.exports = router;
