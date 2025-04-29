// server/routes/reviews.js
const express = require('express');
const router = express.Router();
const Review = require('../models/Review');

// POST /api/reviews - Submit a review
router.post('/', async (req, res) => {
  if (!req.session.user) return res.status(401).json({ error: 'Not logged in' });

  const { placeName, rating, comment } = req.body;
  const username = req.session.user.username;

  if (!placeName || !rating || !comment) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const review = new Review({ placeName, rating, comment, username });
    await review.save();
    res.status(201).json({ message: 'Review submitted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to submit review' });
  }
});

// GET /api/reviews?place=PlaceName - Fetch reviews for a specific place
router.get('/', async (req, res) => {
    let place = req.query.place;
    try {
      let reviews;
      if (place) {
        // Normalize: lowercase and remove commas
        place = place.toLowerCase().replace(/,/g, '');
        
        // Find reviews and normalize placeName too
        reviews = await Review.find({
          placeName: { $regex: place, $options: 'i' }
        });
      } else {
        reviews = await Review.find();
      }
      res.json(reviews);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to load reviews' });
    }
  });
  
  

module.exports = router;
