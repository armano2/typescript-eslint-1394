module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    parser: '@typescript-eslint/parser',
    project: './tsconfig.json',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    extraFileExtensions: ['.vue']
  },
  rules: {
    '@typescript-eslint/no-explicit-any': 'error'
  }
};
