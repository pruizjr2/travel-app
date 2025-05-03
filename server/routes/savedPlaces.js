const express = require('express');
const router = express.Router();
const User = require('../models/User');

// GET /api/saved-places - Get saved places for logged-in user
router.get('/', async (req, res) => {
  if (!req.session.user) return res.status(401).json({ error: 'Not logged in' });

  try {
    const user = await User.findById(req.session.user.id);
    res.json(user.savedPlaces || []);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch saved places' });
  }
});

// POST /api/saved-places - Save a new place (single or multiple)
router.post('/', async (req, res) => {
    if (!req.session.user) return res.status(401).json({ error: 'Not logged in' });
  
    const user = await User.findById(req.session.user.id);
    const { place, places } = req.body; // Allow for both single and bulk
  
    if (!user.savedPlaces) {
      user.savedPlaces = [];
    }
  
    if (Array.isArray(places)) {
      // Bulk add (e.g., syncing from localStorage)
      for (let p of places) {
        if (!user.savedPlaces.includes(p)) {
          user.savedPlaces.push(p);
        }
      }
    } else if (place && !user.savedPlaces.includes(place)) {
      // Single place add
      user.savedPlaces.push(place);
    }
  
    await user.save();
    res.json({ message: 'Place(s) saved successfully' });
  });
  

// DELETE /api/saved-places/:place - Remove a saved place
router.delete('/:place', async (req, res) => {
  if (!req.session.user) return res.status(401).json({ error: 'Not logged in' });

  try {
    const user = await User.findById(req.session.user.id);
    user.savedPlaces = user.savedPlaces.filter(p => p !== req.params.place);
    await user.save();

    res.json({ message: 'Place removed' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to remove place' });
  }
});

module.exports = router;
