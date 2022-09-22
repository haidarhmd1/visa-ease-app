const path = require('path');

module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['jsx-a11y', '@typescript-eslint'],
  extends: [
    'react-app',
    'airbnb',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:unicorn/recommended',
    'plugin:promise/recommended',
    'plugin:prettier/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        paths: [path.join(__dirname, './src')],
      },
    },
  },
  ignorePatterns: ['react-app-env.d.ts'],
  rules: {
    'jsx-a11y/autocomplete-valid': 'off', // craco seams to not understand this...
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    'no-console': 1,
    'max-lines': [1, 400],
    complexity: 2,
    'new-cap': 0,
    'require-await': 2,
    'prefer-promise-reject-errors': 0,
    'react/no-children-prop': 1,
    'react/prop-types': 0,
    'react/require-default-props': 0,
    'react/jsx-filename-extension': 0,
    'react-hooks/exhaustive-deps': 2,
    'import/prefer-default-export': 0,
    'import/no-default-export': 2,
    'import/no-namespace': 0,
    'unicorn/better-regex': 1,
    'unicorn/consistent-destructuring': 0,
    'unicorn/explicit-length-check': 0,
    'unicorn/filename-case': 0,
    'unicorn/new-for-builtins': 0,
    'unicorn/no-array-for-each': 0,
    'unicorn/no-array-reduce': 0,
    'unicorn/no-new-array': 0,
    'unicorn/no-null': 0,
    'unicorn/prefer-number-properties': 0,
    'unicorn/prefer-regexp-test': 0,
    'unicorn/prefer-set-has': 0,
    'unicorn/prefer-spread': 0,
    'unicorn/prevent-abbreviations': 2,
    'unicorn/consistent-function-scoping': 0, // https://github.com/sindresorhus/eslint-plugin-unicorn/issues/374#issuecomment-532348080,
    'promise/always-return': 0,
    'promise/no-return-wrap': 1,
    'react/no-array-index-key': 1,
    'unicorn/number-literal-case': 0,
    'no-restricted-syntax': ['error', 'LabeledStatement', 'WithStatement'],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-useless-escape': 1,
    'react/jsx-props-no-spreading': 'off',
    'no-use-before-define': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
        mjs: 'never',
      },
    ],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
  overrides: [
    {
      files: ['src/graphql/**', '*.query.js'],
      rules: {
        camelcase: 'off',
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'no-undef': 'off',
      },
    },
  ],
};
