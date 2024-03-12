export default function updateStudentGradeByCity(stds, city, newGrades) {
  const filteredStds = stds.filter((std) => std.location === city);
  const changedStds = filteredStds.map((std) => {
    const newStd = std;
    let found = false;
    for (const stdGrade of newGrades) {
      if (stdGrade.studentId === std.id) {
        found = true;
        newStd.grade = stdGrade.grade;
        break;
      }
    }
    if (found === false) {
      newStd.grade = 'N/A';
    }
    return newStd;
  });
  return changedStds;
}
