const assert = require('assert');

describe('BasicTest', function () {
  describe('calculateNumber', function () {
    it('should return the sum of a and b', function () {
    const calculateNumber = require('./0-calcul.js'); // Adjust the path if necessary
    assert.strictEqual(calculateNumber(5.4, 7.8), 5 + 8); // Rounded values of 5.4 and 7.8 are 5 and 8 respectively, so the sum should be 13
    });
  });
});
