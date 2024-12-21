const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userRouter = require('./routes/users');
const transactionRouter = require('./routes/transactions');

mongoose.connect('mongodb://localhost/digital-wallet', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());
app.use('/users', userRouter);
app.use('/transactions', transactionRouter);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});

