import axios from 'axios';
import React from 'react';
import ReactDom from 'react-dom';
import renderer from 'react-test-renderer';
import App from '../client/components/App';
import { shallow, mount, render } from 'enzyme';

const baseURL = 'http://127.0.0.1:3001/products/0';

describe('App with Enzyme', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });
});

/*
describe('Axios module', () => {
  jest.mock('axios');
  axios.get = jest.fn();

  test('should fetch image data', () => {
    const fakeImage = [
      {
        productId: 0,
        index: 0,
        fullSizeURL: 'http://www.google.com',
        thumbnailURL: 'http://someURL.com',
      },
    ];
    const response = { data: fakeImage };
    axios.get.mockResolvedValue(response);

    return App.componentDidMount().then((data) => expect(data).toEqual(fakeImage));
  });
});
*/
/*
describe('App with Puppeteer', () => {
  beforeAll(async () => {
    await page.goto(`${baseURL}`);
  });

  it('should be titled "Main Carousel"', async () => {
    await expect(page.title()).resolves.toMatch('Main Carousel');
  });
}); */
