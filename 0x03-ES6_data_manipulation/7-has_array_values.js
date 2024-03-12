export default function hasValuesFromArray(set, array) {
  let found = false;
  for (let i = 0; i < array.length; i += 1) {
    const num = array[i];

    for (const setNum of set) {
      if (num === setNum) {
        found = true;
        break;
      }
      found = false;
    }
    if (i === array.length - 1 && found === false) {
      return found;
    }
  }
  return found;
}
