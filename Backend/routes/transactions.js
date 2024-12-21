const express = require('express');
const router = express.Router();
const Transaction = require('../models/Transaction');

router.post('/create', (req, res) => {
  const { sender, recipient, amount } = req.body;
  const transaction = new Transaction({ sender, recipient, amount });
  transaction.save((err) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.send({ message: 'Transaction created successfully' });
    }
  });
});

module.exports = router;
