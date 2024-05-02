const assert = require('assert');
const calculateNumber = require('./1-calcul.js');
const { describe, it } = require('mocha');
describe('calculateNumber', function () {
  it('checks equality sum', function () {
    assert.equal(calculateNumber('SUM', 3.5, 4.5), 9);
  });
  it('floating point whole numbers sum', () => {
    assert.strictEqual(calculateNumber('SUM', 1.0, 2.0), 3);
  });
  it('mix float and integers sum', () => {
    assert.strictEqual(calculateNumber('SUM', 1, 2.0), 3);
  });
  it('float numbers below .4 sum', () => {
    assert.strictEqual(calculateNumber('SUM', 1.4, 2.4), 3);
  });
  it('floating point both difference', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.5, 2.4), 0);
  });
  it('floating point difference both above .5', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.5, 2.6), -1);
  });
  it('floating point both  below .5 difference', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 0.4), 1);
  });
  it('floating point both whole difference', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.0, 1.0), 0);
  });
  it('floating point both whole divide', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1.0, 1.0), 1);
  });
  it('floating point both whole divide', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1.5, 1.4), 2);
  });
  it('floating point divide by 0', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1.5, 0.4), 'Error');
  });
});
