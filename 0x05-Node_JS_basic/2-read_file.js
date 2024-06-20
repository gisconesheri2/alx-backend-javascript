const fs = require('fs');
function countStudents (fileName) {
  try {
    const data = fs.readFileSync(fileName, 'utf-8');

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
    for (const [fld, stds] of Object.entries(flds)) {
      console.log(`Number of students in ${fld}: ${stds.length}. List: ${stds.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
