function readDatabase (filePath) {
  return new Promise((resolve, reject) => {
    const fs = require('fs');
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        // reject(err);
      } else {
        const stds = data.split('\n');
        const flds = {};
        stds.slice(1).forEach((line) => {
          if (line.length > 0) {
            const [fn,,, fld] = line.split(',');
            if (Object.keys(flds).includes(fld)) {
              flds[fld].push(fn);
            } else {
              flds[fld] = [fn];
            }
          }
        });
        resolve(flds);
      }
    });
  });
}

module.exports = readDatabase;
