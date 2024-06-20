const fs = require('fs');
function countStudents(fileName) {
  return new Promise((resolve, reject) => {
    
    fs.readFile(fileName, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const stds = data.split('\n');
        let numStds = 0;
        const flds = {};
        stds.slice(1).forEach((line) => {
          if (line.length > 0) {
            numStds += 1;

            const [fn,,, fld] = line.split(',');
            if (Object.keys(flds).includes(fld)) {
              flds[fld].push(fn);
            } else {
              flds[fld] = [fn];
            }
          }
        });
        console.log(`Number of students: ${numStds}`);
        const sortedKeys = Object.keys(flds).map((fld) => fld.toLowerCase()).sort();
        for (const k of sortedKeys) {
          const fld = k.toUpperCase();
          const stds = flds[k.toUpperCase()];
          console.log(`Number of students in ${fld}: ${stds.length}. List: ${stds.join(', ')}`);
        }
        for (const [fld, stds] of Object.entries(flds)) {
          console.log(`Number of students in ${fld}: ${stds.length}. List: ${stds.join(', ')}`);
        }
      }

      resolve(true);
    });
  });
}

module.exports = countStudents;
