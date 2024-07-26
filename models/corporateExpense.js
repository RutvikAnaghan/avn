const mongoose = require('mongoose');

const CorporateExpenseSchema = new mongoose.Schema({
  amount: { type: Number, required: true },
  category: { type: String, required: true },
  date: { type: Date, default: Date.now },
  notes: { type: String },
});

module.exports = mongoose.model('CorporateExpense', CorporateExpenseSchema);
