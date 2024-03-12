export default function getListStudentsIds(stds) {
  if (Array.isArray(stds) === false) {
    return [];
  }

  return stds.map((std) => std.id);
}
