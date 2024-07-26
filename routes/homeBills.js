const express = require("express");
const router = express.Router();
const HomeBill = require("../models/homeBill");
const auth = require('../middleware/auth');

// Create a new HomeBill bill
router.post("/", auth, async (req, res) => {
  try {
    const bill = new HomeBill(req.body);
    await bill.save();
    res.status(201).json(bill);
  } catch {
    res.status(400).json({ message: err.message });
  }
});

// Get all HomeBill bills
router.get("/", auth, async (req, res) => {
  try {
    const bills = await HomeBill.find();
    res.json(bills);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a HomeBill bill by ID
router.get("/:id", auth, async (req, res) => {
  try {
    const bill = await HomeBill.findById(req.params.id);
    if (!bill) return res.status(404).json({ message: "bill not found" });
    res.json(bill);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update a HomeBill bill
router.put("/:id", auth, async (req, res) => {
  try {
    const bill = await HomeBill.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!bill) return res.status(404).json({ message: "bill not found" });
    res.json(bill);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a HomeBill bill
router.delete("/:id", auth, async (req, res) => {
  try {
    const bill = await HomeBill.findByIdAndDelete(req.params.id);
    if (!bill) return res.status(404).json({ message: "bill not found" });
    res.json({ message: "bill deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
