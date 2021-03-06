// jest.config
module.exports = {
  collectCoverage: true,
  moduleFileExtensions: ['js', 'jsx'],
  moduleDirectories: ['node_modules', 'bower_components', 'shared'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
  },
  preset: 'jest-puppeteer',
  setupFilesAfterEnv: ['<rootDir>tests/config/enzyme-setup.js'],
  testEnvironment: 'jsdom',
  transform: { '^.+\\.jsx?$': 'babel-jest' },
  verbose: true,
};