const main = require('../src/main');
const should = require('should');

describe('Repeat', function () {
  it('should repeat correctly', function () {
    should(main.repeat('test', 3)).be.equal('testtesttest');
  });

  it('should be empty with stringToRepeat empty', function () {
    should(main.repeat('', 3)).be.equal('');
  });

  it('should be empty with timesToRepeat as zero', function () {
    should(main.repeat('test', 0)).be.equal('');
  });
});

describe('Running Sum', function () {
  it('should sum correctly', function () {
    should(main.runningSum([0, 1, 2, 3, 4])).be.eql([0, 1, 3, 6, 10]);
    should(main.runningSum([2, 4, 5, 9])).be.eql([2, 6, 11, 20]);
    should(main.runningSum([0, 0, 0, 0])).be.eql([0, 0, 0, 0]);
  });
  it('should handle empty arrays', function () {
    should(main.runningSum([])).be.eql([]);
  });
});

describe('Slice', function () {
  it('should slice correctly', function () {
    should(main.slice({a: 1, b: 2, c: 3}, ['a', 'b'])).be.eql({a: 1, b: 2});
    should(main.slice({a: 3, b: 8, c: 14, d: 6, e: 21, f: 15, g: 2, h: 5}, ['a', 'f', 'c', 'x', 'e'])).be.eql({a: 3, f: 15, c: 14, e: 21});
  });
  it('should slice with an empty array', function () {
    should(main.slice({a: 1, b: 2, c: 3}, [])).be.eql({});
  });
});
