const main = require('./main');
require('should');

it('should repeat correctly', function () {
  main.repeat('test', 0).should.be.equal('');
  main.repeat('test', 3).should.be.equal('testtesttest');
});

it('should sum correctly', function () {
  main.runningSum([0, 1, 2, 3, 4]).should.be.eql([0, 1, 3, 6, 10]);
  main.runningSum([0]).should.be.eql([0]);
  main.runningSum([2, 4, 5, 9]).should.be.eql([2, 6, 11, 20]);
});

it('should slice correctly', function () {
  main.slice({
    a: 1,
    b: 2,
    c: 3
  }, ['a', 'b']).should.be.eql({
    a: 1,
    b: 2
  });
  main.slice({
    a: 3,
    b: 8,
    c: 14,
    d: 6,
    e: 21,
    f: 15,
    g: 2,
    h: 5
  }, ['a', 'f', 'c', 'x', 'e']).should.be.eql({
    a: 3,
    f: 15,
    c: 14,
    e: 21
  });
});
