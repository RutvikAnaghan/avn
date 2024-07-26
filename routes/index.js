const express = require('express');
const router = express.Router();

const personalExpenses = require('./personalExpenses');
const corporateExpenses = require('./corporateExpenses');
const homeBills = require('./homeBills');
const users = require('./users');

router.use('/personal-expenses', personalExpenses);
router.use('/corporate-expenses', corporateExpenses);
router.use('/home-bills', homeBills);
router.use('/users', users);

module.exports = router;
