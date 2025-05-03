// routes/ads.js
const express = require('express');
const router = express.Router();
const Ad = require('../models/Ad');
const User = require('../models/User');

// GET /api/ads - Get all ads submitted by the logged-in advertiser
router.get('/', async (req, res) => {
  if (!req.session.user || req.session.user.role !== 'advertiser') {
    return res.status(403).json({ error: 'Access denied' });
  }

  const ads = await Ad.find({ advertiserId: req.session.user.id });
  res.json(ads);
});

// POST /api/ads - Create a new ad
router.post('/', async (req, res) => {
  if (!req.session.user || req.session.user.role !== 'advertiser') {
    return res.status(403).json({ error: 'Access denied' });
  }

  const { title, description, imageUrl } = req.body;
  if (!title || !description) {
    return res.status(400).json({ error: 'Title and description are required' });
  }

  const newAd = new Ad({
    title,
    description,
    imageUrl,
    advertiserId: req.session.user.id
  });

  await newAd.save();
  res.status(201).json(newAd);
});

// DELETE /api/ads/:id - Delete ad by ID
router.delete('/:id', async (req, res) => {
  if (!req.session.user || req.session.user.role !== 'advertiser') {
    return res.status(403).json({ error: 'Access denied' });
  }

  const ad = await Ad.findById(req.params.id);
  if (!ad || ad.advertiserId.toString() !== req.session.user.id) {
    return res.status(404).json({ error: 'Ad not found or unauthorized' });
  }

  await ad.deleteOne();
  res.json({ message: 'Ad deleted successfully' });
});

module.exports = router;
