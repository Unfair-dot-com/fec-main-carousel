/**
 * @jest-environment node
 */
/* eslint-disable no-undef */
const { db } = require('../database/database');
const { Picture } = require('../database/database');

const baseURL = 'https://fec-hrr47.s3.us-east-2.amazonaws.com/';

describe('learning mocks', () => {
  test('this should always pass', () => {
    expect(true).toBe(true);
  });
});

describe('seed script generates correct random data', () => {
  // variable to store records from the database
  let allRecords;

  beforeAll((done) => {
    // gets all products out of the database
    Picture.find({ }, (err, records) => {
      if (err) done(err);
      allRecords = records;
      done();
    });
  });
  // use the results in each of the tests

  test('does not assign productIds greater than 99 or less than 0', () => {
    // iterates through all records
    allRecords.forEach((record) => {
      // checks that productId is in the acceptable range
      expect(record.productId).toBeLessThanOrEqual(99);
      expect(record.productId).toBeGreaterThanOrEqual(0);
    });
  });

  test.skip('does not assign less than 5 or more than 10 pictures to the product', () => {
    const counts = {};
    // iterates through all records
    allRecords.forEach((record) => {
      // if the productId already exists in the database
      if (counts.hasOwnProperty(record.productId)) {
        // increment the count by one.
        counts[record.productId] += 1;
      } else {
        // else add the key to the counts object.
        counts[record.productId] = 1;
      }
    });
    // check that the counts of each number of pictures is in the acceptable range
    Object.values(counts).forEach((value) => {
      expect(value).toBeLessThanOrEqual(10);
      expect(value).toBeGreaterThanOrEqual(5);
    });
  });

  test('the pictureId is in the acceptable range', () => {
    // iterates through all records
    allRecords.forEach((record) => {
      // isolate the last 9 digits of the fullSizeURL and change to a Number
      let pictureId = record.fullSizeURL.slice(-9, -4);
      pictureId = Number(pictureId);

      if (pictureId > 40 || pictureId < 1) {
        console.log(`ProductId ${record.productId} has an incorrectly assigned image at index ${record.index}`);
      }

      // checks that productId is in the acceptable range
      expect(pictureId).toBeLessThanOrEqual(40);
      expect(pictureId).toBeGreaterThanOrEqual(1);
    });
  });

  test('the fullSizeURLs follow the correct scheme', () => {
    // iterates through all records
    allRecords.forEach((record) => {
      // isolate the base url in the fullSizeURL
      let comIndex = record.fullSizeURL.indexOf('.com/');
      const fullBase = record.fullSizeURL.slice(0, comIndex + 5);
      expect(fullBase).toBe(baseURL);

      // isolate the base url in the thumbnail
      comIndex = record.thumbnailURL.indexOf('.com/');
      const thumbnailBase = record.thumbnailURL.slice(0, comIndex + 5);
      expect(thumbnailBase).toBe(baseURL);

      // TODO: add some more granularity
      // https://fec-hrr47.s3.us-east-2.amazonaws.com/thumbnailRandoms/thumbnail00041.jpg
    });
  });

  // closes the database connection
  afterAll((done) => {
    db.close();
    done();
  });
});
