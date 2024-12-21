const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  sender: String,
  recipient: String,
  amount: Number,
});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
