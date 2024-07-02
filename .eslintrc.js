module.exports = {
  plugins: ['simple-import-sort'],
  extends: ['prettier', 'plugin:prettier/recommended', 'next/core-web-vitals'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        semi: false,
        singleQuote: true,
      },
    ],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'no-restricted-imports': [
      'error',
      {
        patterns: ['./', '../'],
      },
    ],
    '@next/next/no-img-element': 'off',
  },
}
