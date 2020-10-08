module.exports = {
  env: { es2021: true, node: true },
  extends: ['airbnb-base', 'prettier'],
  plugins: ['import', 'node', 'prettier', 'promise'],
  parser: 'babel-eslint',
  parserOptions: { ecmaVersion: 12, sourceType: 'module' },
  rules: {
    'prettier/prettier': ['error'],
  },
};
