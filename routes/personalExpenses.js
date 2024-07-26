const express = require('express');
const router = express.Router();
const PersonalExpense = require('../models/personalExpense');

// Create a new personal expense
router.post('/', async (req, res) => {
  try {
    const expense = new PersonalExpense(req.body);
    await expense.save();
    res.status(201).json(expense);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all personal expenses
router.get('/', async (req, res) => {
  try {
    const expenses = await PersonalExpense.find();
    res.json(expenses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a personal expense by ID
router.get('/:id', async (req, res) => {
  try {
    const expense = await PersonalExpense.findById(req.params.id);
    if (!expense) return res.status(404).json({ message: 'Expense not found' });
    res.json(expense);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update a personal expense
router.put('/:id', async (req, res) => {
  try {
    const expense = await PersonalExpense.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!expense) return res.status(404).json({ message: 'Expense not found' });
    res.json(expense);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a personal expense
router.delete('/:id', async (req, res) => {
  try {
    const expense = await PersonalExpense.findByIdAndDelete(req.params.id);
    if (!expense) return res.status(404).json({ message: 'Expense not found' });
    res.json({ message: 'Expense deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
