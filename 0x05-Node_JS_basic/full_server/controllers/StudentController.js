class StudentsController {
  static getAllStudents (request, response) {
    const readDatabase = require('../utils');
    const dataPath = process.argv.length > 2 ? process.argv[2] : '';
    readDatabase(dataPath)
      .then((flds) => {
        response.status(200);
        const body = ['This is the list of our students'];
        const sortedKeys = Object.keys(flds).map((fld) => fld.toLowerCase()).sort();
        for (const k of sortedKeys) {
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
  }

  static getAllStudentsByMajor (request, response) {
    const VALID_MAJORS = ['CS', 'SWE'];
    const maj = request.params.major;
    const dataPath = process.argv.length > 2 ? process.argv[2] : '';
    if (!VALID_MAJORS.includes(maj)) {
      response.status(500);
      response.send('Major parameter must be CS or SWE');
    } else {
      const readDatabase = require('../utils');
      readDatabase(dataPath)
        .then((flds) => {
          response.status(200);
          response.send(`List: ${flds[maj].join(', ')}`);
        })
        .catch((_) => {
          response.status(500);
          response.send('Cannot load the database');
        });
    }
  }
}

module.exports = StudentsController;
