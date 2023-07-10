const express = require('express');
const router = express.Router();

// Home route
router.get('/', (req, res) => {
  res.render('home'); 
});

// About route
router.get('/about', (req, res) => {
  res.render('about'); 
});

// Contact route
router.get('/contact', (req, res) => {
  res.render('contact'); 
});

module.exports = router;
