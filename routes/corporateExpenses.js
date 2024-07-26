const express = require("express");
const router = express.Router();
const CorporateExpense = require("../models/corporateExpense");
const auth = require('../middleware/auth');

// Create a new Corporate expense
router.post("/", auth, async (req, res) => {
  try {
    const expense = new CorporateExpense(req.body);
    await expense.save();
    res.status(201).json(expense);
  } catch {
    res.status(400).json({ message: err.message });
  }
});

// Get all Corporate expenses
router.get("/", auth, async (req, res) => {
  try {
    const expenses = await CorporateExpense.find();
    res.json(expenses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a Corporate expense by ID
router.get("/:id", auth, async (req, res) => {
  try {
    const expense = await CorporateExpense.findById(req.params.id);
    if (!expense) return res.status(404).json({ message: "Expense not found" });
    res.json(expense);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update a Corporate expense
router.put("/:id", auth, async (req, res) => {
  try {
    const expense = await CorporateExpense.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!expense) return res.status(404).json({ message: "Expense not found" });
    res.json(expense);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a Corporate expense
router.delete("/:id", auth, async (req, res) => {
  try {
    const expense = await CorporateExpense.findByIdAndDelete(req.params.id);
    if (!expense) return res.status(404).json({ message: "Expense not found" });
    res.json({ message: "Expense deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
