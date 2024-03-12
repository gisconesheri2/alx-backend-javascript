export default function createInt8TypedArray(length, position, value) {
  const arrBuf = new ArrayBuffer(length);
  const int8DataView = new DataView(arrBuf);
  try {
    int8DataView.setInt8(position, value);
  } catch (e) {
    throw new Error('Position outside range');
  }
  return (int8DataView);
}
