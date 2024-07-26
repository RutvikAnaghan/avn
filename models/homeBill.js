const mongoose = require('mongoose');

const HomeBillSchema = new mongoose.Schema({
  amount: { type: Number, required: true },
  category: { type: String, required: true },
  dueDate: { type: Date, required: true },
  notes: { type: String },
});

module.exports = mongoose.model('HomeBill', HomeBillSchema);
