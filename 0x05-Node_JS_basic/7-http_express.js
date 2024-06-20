const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

const PORT = 1245;
const DB_PATH = process.argv.length > 2 ? process.argv[2] : '';

app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (_, res) => {
  const body = ['This is the list of our students'];
  countStudents(DB_PATH)
    .then((flds) => {
      res.status(200);
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
      res.send(body.join('\n'));
    })
    .catch((err) => {
      body.push(err instanceof Error ? err.message : err.toString());
      const resText = body.join('\n');
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', resText.length);
      res.statusCode = 200;
      res.write(Buffer.from(resText));
    });
});

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

module.exports = app;
