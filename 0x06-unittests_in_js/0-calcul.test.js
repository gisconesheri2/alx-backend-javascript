const assert = require("assert");
const calculateNumber = require('./0-calcul.js')

describe("calculateNumber", function() {
  it("checks equality", function() {
    assert.equal(calculateNumber(3.5, 4.5), 9);
  });
it('floating point whole numbers', () => {
    assert.strictEqual(calculateNumber(1.0, 2.0), 3);
  });
it('mix float and integers', () => {
    assert.strictEqual(calculateNumber(1, 2.0), 3);
  });
it('float numbers below .4 ', () => {
    assert.strictEqual(calculateNumber(1.4, 2.4), 3);
  });
it('floating point both abobe and below .5', () => {
    assert.strictEqual(calculateNumber(1.5, 2.4), 4);
  });
});
