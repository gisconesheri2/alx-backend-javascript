export default function getListStudents() {
  const stds = [];

  stds.push({ id: 1, firstName: 'Guillaume', location: 'San Francisco' });
  stds.push({ id: 2, firstName: 'James', location: 'Columbia' });
  stds.push({ id: 5, firstName: 'Serena', location: 'San Francisco' });

  return stds;
}
