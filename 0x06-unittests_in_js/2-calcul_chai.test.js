const chai = require('chai');
const expect = chai.expect;
const calculateNumber = require('./2-calcul_chai');
const { describe, it } = require('mocha');
describe('calculateNumber', function () {
  it('checks equality sum', function () {
    expect(calculateNumber('SUM', 3.5, 4.5)).to.equal(9);
  });
  it('floating point whole numbers sum', () => {
    expect(calculateNumber('SUM', 1.0, 2.0)).to.equal(3);
  });
  it('mix float and integers sum', () => {
    expect(calculateNumber('SUM', 1, 2.0)).to.equal(3);
  });
  it('float numbers below .4 sum', () => {
    expect(calculateNumber('SUM', 1.4, 2.4)).to.equal(3);
  });
  it('floating point both difference', () => {
    expect(calculateNumber('SUBTRACT', 1.5, 2.4)).to.equal(0);
  });
  it('floating point difference both above .5', () => {
    expect(calculateNumber('SUBTRACT', 1.5, 2.6)).to.equal(-1);
  });
  it('floating point both  below .5 difference', () => {
    expect(calculateNumber('SUBTRACT', 1.4, 0.4)).to.equal(1);
  });
  it('floating point both whole difference', () => {
    expect(calculateNumber('SUBTRACT', 1.0, 1.0)).to.equal(0);
  });
  it('floating point both whole divide', () => {
    expect(calculateNumber('DIVIDE', 1.0, 1.0)).to.equal(1);
  });
  it('floating point both whole divide', () => {
    expect(calculateNumber('DIVIDE', 1.5, 1.4)).to.equal(2);
  });
  it('floating point divide by 0', () => {
    expect(calculateNumber('DIVIDE', 1.5, 0.4)).to.equal('Error');
  });
});
