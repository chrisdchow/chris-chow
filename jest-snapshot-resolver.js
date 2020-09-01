module.exports = {
  // resolves from test to snapshot path
  resolveSnapshotPath: (testPath, snapshotExtension) => {
    return testPath.replace(/\.([tj]sx?)/, snapshotExtension);
  },
  // resolves from snapshot to test path
  resolveTestPath: (snapshotFilePath, snapshotExtension) => {
    return snapshotFilePath.replace(snapshotExtension, '.tsx');
  },
  // Example test path, used for preflight consistency check of the implementation above
  testPathForConsistencyCheck: 'pages/index.test.tsx',
};
