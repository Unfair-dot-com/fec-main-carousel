import axios from 'axios';
import React from 'react';
import ReactDom from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';
import App from '../client/components/App';
import UpperCarousel from '../client/components/UpperCarousel';
import LowerCarousel from '../client/components/LowerCarousel';

describe('App with Enzyme', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('renders two Carousels', () => {
    const wrapper = shallow(<App />, { disableLifecycleMethods: true });
    expect(wrapper.find(UpperCarousel).length).toBe(1);
    expect(wrapper.find(LowerCarousel).length).toBe(1);
    //expect(wrapper.find(Arrow).length).toBe(4);
  });
});

/*  More tests: -should make a get request to the correct api upon loading
      - likely need to mock the window.location.pathname
      - and likely need to mock the server
  -should load the result of the api call into state
  */

/*
const baseURL = 'http://127.0.0.1:3001/products/0';

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
