export default function cleanSet(set, startString) {
  let newStr = '';
  if (startString.length > 0) {
    set.forEach((word) => {
      if (word.startsWith(startString)) {
        const idx = startString.length;
        const lastPart = word.substr(idx);
        newStr = `${newStr + lastPart}-`;
      }
    });
    return newStr.slice(0, newStr.length - 1);
  }
  return newStr;
}
