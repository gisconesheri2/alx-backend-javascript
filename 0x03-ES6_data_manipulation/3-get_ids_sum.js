export default function getStudentIdsSum(stds) {
  function idSum(accumulator, currentValue) {
    let total = 0;
    if (typeof accumulator === 'object') {
      total = accumulator.id + currentValue.id;
    } else {
      total = accumulator + currentValue.id;
    }
    return total;
  }

  return stds.reduce(idSum);
}
