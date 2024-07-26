const mongoose = require('mongoose');

const PersonalExpenseSchema = new mongoose.Schema({
  amount: { type: Number, required: true },
  category: { type: String, required: true },
  date: { type: Date, default: Date.now },
  notes: { type: String },
});

module.exports = mongoose.model('PersonalExpense', PersonalExpenseSchema);
