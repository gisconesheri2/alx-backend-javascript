function countStudents (path) {
  const fs = require('fs');
  try {
    const data = fs.readFileSync(path, 'utf-8').split('\n');
    const students = data.map((line) => line.split(','));

    console.log(`Number of students: ${students.slice(1).length - 1}`);

    const fields = students[0];
    const fieldIndex = fields.indexOf('field');

    if (fieldIndex === -1) {
      throw new Error('Field column not found');
    }
    const validStudents = students
      .slice(1)
      .filter((student) => student[fieldIndex] !== undefined && student[fieldIndex] !== '');

    const classes = validStudents.reduce((acc, student) => {
      const className = student[fieldIndex];
      if (!acc[className]) {
        acc[className] = [];
      }
      acc[className].push(student[fields.indexOf('firstname')]);
      return acc;
    }, {});

    for (const [className, studentList] of Object.entries(classes)) {
      console.log(`Number of students in ${className}: ${studentList.length}. List: ${studentList.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
