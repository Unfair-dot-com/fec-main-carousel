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
