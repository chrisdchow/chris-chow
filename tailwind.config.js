module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: [
    // Use *.tsx if using TypeScript
    './pages/**/*.tsx',
    './components/**/*.tsx',
  ],
  // ...
};
