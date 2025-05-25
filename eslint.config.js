import js from '@eslint/js';
import react from 'eslint-plugin-react';

export default [
  js.configs.recommended,
  {
    files: ['src/**/*.jsx', 'src/**/*.js'],
    ignores: ['dist/', 'node_modules/'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        browser: true,
        es2021: true,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      
    },
    
    plugins: {
      react,
    },
    
    rules: {
      ...react.configs.recommended.rules,
      'no-unused-vars': 'warn',
      'no-undef': 'error',
      'no-empty': 'warn',
      'no-control-regex': 'warn',
      'no-fallthrough': 'warn',
      'getter-return': 'warn',
       'react/prop-types': 'off',
      'no-prototype-builtins': 'warn'
    },
  },
];