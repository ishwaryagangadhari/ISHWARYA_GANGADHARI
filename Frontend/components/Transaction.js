import React, { useState } from 'react';

const Transaction = () => {
  const [sender, setSender] = useState('');
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('/transactions/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ sender, recipient, amount }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Sender:
        <input 
          type="text" 
          value={sender} 
          onChange={(event) => setSender(event.target.value)} 
        />
      </label>
      <br />
      <label>
        Recipient:
        <input 
          type="text" 
          value={recipient} 
          onChange={(event) => setRecipient(event.target.value)} 
        />
      </label>
      <br />
      <label>
        Amount:
        <input 
          type="number" 
          value={amount} 
          onChange={(event) => setAmount(event.target.value)} 
        />
      </label>
      <br />
      <button type="submit">Submit Transaction</button>
    </form>
  );
};

export default Transaction;
