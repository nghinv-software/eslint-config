/**
 * Created by nghinv on Thu Jun 11 2020
 * Copyright (c) 2020 nghinv@lumi.biz
 */

module.exports = {
  "extends": [
    "airbnb",
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "globals": {
    "Atomics": "readonly",
    "fetch": false,
    "SharedArrayBuffer": "readonly",
    "__DEV__": true
  },
  "plugins": [
    "react"
  ],
  "env": {
    "jest": true
  },
  "parser": "babel-eslint",
  "rules": {
    'react/prefer-stateless-function': 'off',
    'max-len': ["warn", { code: 400, tabWidth: 2 }],
    'no-use-before-define': 'off',
    'consistent-return': 'off',
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'comma-dangle': 'off',
    'no-console': 'off',
    'no-unused-vars': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'object-curly-newline': 'off',
    'quotes': ["error", "single", { "allowTemplateLiterals": false }],
    'react/no-did-update-set-state': "off",
    'react/no-unused-state': 'off',
    'react/no-deprecated': 'warn',
    'react/sort-comp': 'off',
    'react/forbid-prop-types': 'off',
    'no-case-declarations': 'off',
    "linebreak-style": 0,
    "no-param-reassign": 0,
    "no-underscore-dangle": 'off',
    'no-await-in-loop': 'off',
    'no-plusplus': 'off',
    'import/no-named-as-default': 'off',
    'class-methods-use-this': 'off',
    'global-require': 'off',
    'camelcase': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/static-property-placement': 'off',
    'react/jsx-curly-newline': 'off',
    'react/state-in-constructor': 'off',
    'no-unused-expressions': 'off',
    'jsx-quotes': 'off',
    'arrow-body-style': 'off',
    'no-restricted-syntax': 'off',
    'guard-for-in': 'off',
    'react/destructuring-assignment': 'off',
    'no-nested-ternary': 'off',
    'prefer-destructuring': ['error', {
      'array': false,
      'object': false
    }, {
        'enforceForRenamedProperties': false
      }],
    'radix': 'off',
    'react/no-array-index-key': 'off',
    'react/display-name': 'off',
    'arrow-parens': 'off',
    'no-extra-boolean-cast': 'off',
    'eqeqeq': 'off',
    'react/no-access-state-in-setstate': 'off'
  }
};
