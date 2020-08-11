const React = require('react');
const App = require('../client/index.jsx');

// Could put the next four lines in a setup file?
// https://enzymejs.github.io/enzyme/docs/installation/
const enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

enzyme.configure({ adapter: new Adapter() });
const wrapper = enzyme.shallow(<Foo />);

// TODO: update this after merging in the window.location
const baseURL = 'http://127.0.0.1:3001/';

describe('Main Carousel', () => {
  beforeAll(async () => {
    await page.goto(`${baseURL}`);
  });

  it('should be titled "Main Carousel"', async () => {
    await expect(page.title()).resolves.toMatch('Main Carousel');
  });
});
