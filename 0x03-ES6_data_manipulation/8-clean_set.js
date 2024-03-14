export default function cleanSet(set, startString) {
  const newStr = '';
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  const words = [];
  if (startString.length > 0) {
    set.forEach((word) => {
      console.log(word);
      if (word !== undefined && word.startsWith(startString)) {
        const idx = startString.length;
        const lastPart = word.substr(idx);
        words.push(lastPart);
      }
    });
    return words.join('-');
  }
  return newStr;
}
