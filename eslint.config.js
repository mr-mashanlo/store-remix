import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import pluginReact from 'eslint-plugin-react';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig( [
  {
    files: [ '**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}' ],
    plugins: { js },
    extends: [ 'js/recommended' ]
  },
  {
    files: [ '**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}' ],
    languageOptions: { globals: { ...globals.browser, ...globals.node } }
  },
  {
    settings: { react: { version: 'detect' } }
  },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    plugins: { 'simple-import-sort': simpleImportSort },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'no-trailing-spaces': 'error',
      'no-multiple-empty-lines': 'error',
      'comma-spacing': 'error',
      'comma-dangle': 'error',
      'indent': [ 'error', 2 ],
      'semi': [ 'error', 'always' ],
      'quotes': [ 'error', 'single' ],
      'object-curly-spacing': [ 'error', 'always' ],
      'array-bracket-spacing': [ 'error', 'always' ],
      'space-in-parens': [ 'error', 'always' ],
      'linebreak-style': [ 'error', 'unix' ],
      'jsx-quotes': [ 'error', 'prefer-double' ],
      'simple-import-sort/exports': 'error',
      'simple-import-sort/imports': 'error'
    }
  }
] );
