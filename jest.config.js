const { compilerOptions } = require('./tsconfig.json');

// avoid pulling in ts-jest depdendency, instead use simple tsconfig path mapper
// transform tsconfig path key values to comply with jest format
const pathsMappedToModuleName = Object.entries(compilerOptions.paths).reduce((accumulator, [key, value]) => {
  const mappedPathKey = `^${key.replace('*', '(.*)')}$`;
  const mappedPathValue = `<rootDir>/${value[0].replace('*', '$1')}`;
  accumulator[mappedPathKey] = mappedPathValue;
  return accumulator;
}, {});

module.exports = {
  roots: ['<rootDir>'],
  moduleFileExtensions: ['js', 'ts', 'tsx', 'json'],
  testPathIgnorePatterns: ['<rootDir>[/\\\\](node_modules|.next)[/\\\\]'],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest',
  },
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__mocks__/file-mock.js',
    ...pathsMappedToModuleName,
  },
  // colocate snapshots with test files, which are colocated with respective source file
  snapshotResolver: './jest-snapshot-resolver.js',
};
