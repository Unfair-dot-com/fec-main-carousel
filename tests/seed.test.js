/* eslint-disable no-undef */
import { db, Picture } from '../database/database';

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
    Picture.find({}, (err, records) => {
      if (err) done(err);
      allRecords = records;
      done();
    });
  });
  // use the results in each of the tests

  test('does not assign productIds greater than 99 or less than 0', () => {
    //iterate through all products
    //expect productId

    expect(true).toBe(true);
  });

  // closes the database connection
  afterAll((done) => {
    db.close();
    done();
  });

});

/* Seed script generates correct random data
  -does not assign productIds greater than 99 or less than 0
  -does not assign less than 5 pictures to the product
  -does not assign more than 10 pictures to the product
  -generates a padded random picture id that isn’t less than 1 or greater than 40
  -fullsize urls follow the correct url scheme
  -thumbnail urls follow the correct url scheme
  */
