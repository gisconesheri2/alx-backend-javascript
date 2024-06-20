const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

const PORT = 1245;
const DB_PATH = process.argv.length > 2 ? process.argv[2] : '';

app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (_, response) => {
  countStudents(DB_PATH)
    .then((flds) => {
      response.status(200);
      const body = ['This is the list of our students'];
      body.push(`Number of students: ${flds.numStds}`);
      const sortedKeys = Object.keys(flds).map((fld) => fld.toLowerCase()).sort();
      for (const k of sortedKeys) {
        if (k === 'numstds') {
          continue;
        }
        const fld = k.toUpperCase();
        const stds = flds[k.toUpperCase()];
        body.push(`Number of students in ${fld}: ${stds.length}. List: ${stds.join(', ')}`);
      }
      response.send(body.join('\n'));
    })
    .catch((_) => {
      response.status(500);
      response.send('Cannot load the database');
    });
});

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

module.exports = app;
