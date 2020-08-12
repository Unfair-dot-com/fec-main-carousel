/* eslint-disable no-undef */
const seed = require('..database/seed.js');

function forEach(items, callback) {
  for (let index = 0; index < items.length; index++) {
    callback(items[index]);
  }
}

Describe('learning mocks', () => {
  const mockCallback = jest.fn((x) => 42 + x);

  forEach([0, 1], mockCallback);
  expect(mockCallback.mock.calls.length).toBe(2);
});

/*
Describe('seed script', () => {
  // run the file
  // examine the contents
  // Need something to mock the database so it doesn't get written to again

  test('does not assign productIds greater than 99', () => {

  });

  test('does ')
}); */