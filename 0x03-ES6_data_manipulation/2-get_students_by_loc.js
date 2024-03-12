export default function getStudentsByLocation(stds, city) {
  return stds.filter((std) => std.location === city);
}
