module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'jsx-a11y', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
  ],
  settings: { react: { version: 'detect' } },
  env: { browser: true, es2022: true },
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'lf' }],
    'react/react-in-jsx-scope': 'off',
  },
};
