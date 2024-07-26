const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

// A protected route
router.get('/secure-data', auth, (req, res) => {
  res.json({ message: 'This is protected data', user: req.user });
});

module.exports = router;
