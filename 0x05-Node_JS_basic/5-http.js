const http = require('http');
// const countStudents = require('./3-read_file_async')

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.statusCode = 200;
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  }
  if (req.url === '/students') {
    console.log(process.argv[2]);
    if (process.argv[2] !== undefined) {
      res.write('This is the list of our students\n');
      const countStudents = require('./3-read_file_async');
      countStudents(process.argv[2])
        .then((data) => {
          res.write(data);
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
