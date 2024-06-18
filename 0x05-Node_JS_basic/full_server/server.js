const express = require('express');

const allRouter = require('./routes/index');

const app = express();
const PORT = 1245;

app.use('/', allRouter);

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

module.exports = app;
