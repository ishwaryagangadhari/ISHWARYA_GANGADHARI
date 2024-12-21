const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/create', (req, res) => {
  const { username, password } = req.body;
  const user = new User({ username, password, balance: 0 });
  user.save((err) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.send({ message: 'User created successfully' });
    }
  });
});

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  User.findOne({ username }, (err, user) => {
    if (err || !user) {
      res.status(401).send({ message: 'Invalid username or password' });
    } else {
      res.send({ message: 'Login successful' });
    }
  });
});

module.exports = router;

