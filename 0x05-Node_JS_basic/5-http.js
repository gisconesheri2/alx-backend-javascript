const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.statusCode = 200;
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  }
  if (req.url === '/students') {
    if (process.argv[2] !== undefined) {
      res.write('This is the list of our students\n');

      // const countStudents = require('./3-read_file_async');
      countStudents(process.argv[2])
        .then((flds) => {
          res.write(`Number of students: ${flds.numStds}\n`);
          const sortedKeys = Object.keys(flds).map((fld) => fld.toLowerCase()).sort();
          for (const k of sortedKeys) {
            if (k === 'numstds') {
              continue;
            }
            const fld = k.toUpperCase();
            const stds = flds[k.toUpperCase()];
            res.write(`Number of students in ${fld}: ${stds.length}. List: ${stds.join(', ')}\n`);
          }
          res.end();
        })
        .catch((err) => {
          res.end(err.message);
        });
    }
  }
});

app.listen(1245, '127.0.0.1', () => {
  console.log('listening');
});

module.exports = app;
