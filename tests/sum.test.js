const sum = require('./sum.js');

describe('sum', () => {
  test('adds one and two to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
})