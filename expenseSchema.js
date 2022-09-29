const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
  trip: mongoose.Schema.ObjectId,
  date: Date,
  amount: Number,
  category: {
    type: String,
    enum: ['travel', 'food', 'accomodation', 'fun'],
  },
  description: String,
});

const Expense = mongoose.model('Expense', expenseSchema);

module.exports = Expense;
