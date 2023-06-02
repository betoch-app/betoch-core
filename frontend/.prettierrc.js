module.exports = {
  semi: true,
  tabWidth: 2,
  useTabs: false,
  printWidth: 120,
  singleQuote: true,
  trailingComma: 'all',
  arrowParens: 'avoid',
  bracketSameLine: false,
  overrides: [
    {
      files: '*.{css,scss}',
      options: {
        printWidth: 150,
      },
    },
  ],
};
