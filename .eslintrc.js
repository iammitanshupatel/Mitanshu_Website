module.exports = {
  extends: ['next', 'next/core-web-vitals', 'plugin:jsx-a11y/recommended'],
  plugins: ['jsx-a11y', 'react-hooks'],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
  settings: {
    'import/resolver': {
      'babel-module': {
        extensions: ['.js', '.jsx'],
      },
      node: {
        extensions: ['.js', '.jsx'],
        paths: ['~'],
      },
    },
  },
};
