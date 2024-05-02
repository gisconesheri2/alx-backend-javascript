const express = require('express');

const PORT = 7865;
const HOST = 'localhost';

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/available_payments', (req, res) => {
  res.set('Content-Type', 'application/json');
  res.send({
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  });
});

app.post('/login', (req, res) => {
  const name = req.body.userName;
  if (name) {
    res.send(`Welcome ${name}`);
  } else {
    res.status(404).send();
  }
});

app.get('/cart/:id(\\d+)', (req, res) => {
  const idParam = req.params.id;
  res.send(`Payment methods for cart ${idParam}`);
});

app.listen(PORT, HOST, () => {
  console.log('API available on localhost port 7865');
});
