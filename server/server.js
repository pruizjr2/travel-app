// Load environment variables
require('dotenv').config();

// Import core modules
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const session = require('express-session');
const path = require('path');
const adRoutes = require('./routes/ads');

const app = express();

// ----------------------------------
// Middleware Setup
// ----------------------------------

// Enable CORS
app.use(cors());

// Parse incoming JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configure session handling
app.use(session({
  secret: process.env.SESSION_SECRET || 'keyboard cat', // fallback for dev
  resave: false,
  saveUninitialized: false
}));

// ----------------------------------
// MongoDB Connection
// ----------------------------------
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Mongo Error:', err));

// ----------------------------------
// Static File Serving
// ----------------------------------
app.use(express.static(path.join(__dirname, '../client')));

// ----------------------------------
// HTML Page Routes
// ----------------------------------

// Default route (home page)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/home.html'));
});

// Auth pages
app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/register.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/login.html'));
});

// Dashboard redirection based on role
app.get('/dashboard', (req, res) => {
  if (!req.session.user) return res.redirect('/login');

  const role = req.session.user.role;
  switch (role) {
    case 'admin':
      return res.sendFile(path.join(__dirname, '../client/admin-dashboard.html'));
    case 'advertiser':
      return res.sendFile(path.join(__dirname, '../client/advertiser-dashboard.html'));
    default:
      return res.sendFile(path.join(__dirname, '../client/dashboard.html')); // regular user
  }
});

// Other static pages
app.get('/place_details', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/place_details.html'));
});

app.get('/itinerary', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/itinerary.html'));
});

// ----------------------------------
// API Routes
// ----------------------------------
app.use('/api/auth', require('./routes/auth'));
app.use('/api/reviews', require('./routes/reviews'));
app.use('/api/saved-places', require('./routes/savedPlaces'));
app.use('/api/admin', require('./routes/admin'));
app.use('/api/ads', adRoutes);

// ----------------------------------
// Start Server
// ----------------------------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
