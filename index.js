module.exports = {
  extends: 'airbnb-base',
  rules: {
    'prefer-arrow-callback': 0,
    'max-len': [2, 150],
    'newline-per-chained-call': 0,
    'no-param-reassign': [2, { props: false }],
    'arrow-body-style': 0,
    'no-underscore-dangle': 0,
    'global-require': 0,
    'import/no-extraneous-dependencies': 0,
    'promise/param-names': 2,
    'promise/always-return': 2,
    'promise/catch-or-return': 2,
    'promise/no-native': 2,
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'never',
      exports: 'never',
      functions: 'never',
    }],
    'no-multi-assign': 0
  },
  parser: 'babel-eslint',
  plugins: [
    'promise',
    'import'
  ],
};
