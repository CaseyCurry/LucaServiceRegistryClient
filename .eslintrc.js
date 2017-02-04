module.exports = {
  "env": {
    "browser": true,
    "es6": true
  },
  "extends": ["eslint:recommended"],
  "parserOptions": {
    "ecmaVersion": 2016,
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true
    },
    "sourceType": "module"
  },
  "plugins": [],
  "rules": {
    "indent": ["error",
      2, {
        "SwitchCase": 1
      }
    ],
    "quotes": ["error", "double"],
    "semi": ["error", "always"],
    "no-console": "off",
    "no-underscore-dangle": "error"
  }
};
