const express = require('express');

const PORT = 7865;
const HOST = 'localhost';

const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id(\\d+)', (req, res) => {
  const idParam = req.params.id;
  res.send(`Payment methods for cart ${idParam}`);
});

app.listen(PORT, HOST, () => {
  console.log('API available on localhost port 7865');
});
