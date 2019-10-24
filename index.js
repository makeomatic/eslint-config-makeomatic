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
    'no-multi-assign': 0,
    'no-restricted-syntax': ['error', {
      selector: 'ForInStatement',
      // eslint-disable-next-line max-len
      message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
    }, {
      selector: 'LabeledStatement',
      message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
    }, {
      selector: 'WithStatement',
      message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
    }],
    'unicorn/filename-case': ['error', { case: 'kebabCase' }],
  },
  parserOptions: {
    ecmaVersion: 2018
  },
  plugins: [
    'promise',
    'import',
    'unicorn'
  ],
};
