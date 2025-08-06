/**
 * THIS FILE WAS AUTO-GENERATED.
 * PLEASE DO NOT EDIT IT MANUALLY.
 * ===============================
 * IF YOU'RE COPYING THIS INTO AN ESLINT CONFIG, REMOVE THIS COMMENT BLOCK.
 */

import path from 'node:path';

import { includeIgnoreFile } from '@eslint/compat';
import js from '@eslint/js';
import { configs } from 'eslint-config-airbnb-extended/legacy';
import { rules as prettierConfigRules } from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';
import tsParser from '@typescript-eslint/parser';

const gitignorePath = path.resolve('.', '.gitignore');

const jsConfig = [
  // ESLint Recommended Rules
  {
    name: 'js/config',
    ...js.configs.recommended,
  },
];

const reactConfig = [
  // Airbnb React Recommended Config
  ...configs.react.recommended,
];

const typescriptConfig = [
  // Airbnb React TypeScript Config
  ...configs.react.typescript,
  {
    files: ['**/*.{js,ts,jsx,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        project: './tsconfig.app.json',
      },
    },
    rules: {
      // Customize as needed
      'react/react-in-jsx-scope': 'off',
      'react/jsx-props-no-spreading': 'off',
      'react/prop-types': 'off',
      'react/display-name': ['off', { ignoreTranspilerName: false }],
      'import/no-extraneous-dependencies': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
      'import/order': ['warn', { 'newlines-between': 'always' }],
      'import/prefer-default-export': 'off',
      'import/extensions': ['error', { 'jsx-a11y': 'off' }],
      'no-param-reassign': [
        'error',
        {
          props: true,
          ignorePropertyModificationsFor: ['state'],
        },
      ],
      'react/function-component-definition': [
        'warn',
        {
          namedComponents: ['function-declaration', 'arrow-function'],
          unnamedComponents: 'arrow-function',
        },
      ],
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];

const prettierConfig = [
  // Prettier Plugin
  {
    name: 'prettier/plugin/config',
    plugins: {
      prettier: prettierPlugin,
    },
  },
  // Prettier Config
  {
    name: 'prettier/config',
    rules: {
      ...prettierConfigRules,
      'prettier/prettier': 'error',
    },
  },
];

// console.log(configs.react.typescript[0].languageOptions);

export default [
  // Ignore .gitignore files/folder in eslint
  includeIgnoreFile(gitignorePath),
  {
    ignores: [
      'vite.config.ts',
      'jest.config.ts',
      'cypress.config.ts',
      'jest-setup.ts',
      '.storybook',
    ],
  },
  // Javascript Config
  ...jsConfig,
  // React Config
  ...reactConfig,
  // TypeScript Config
  ...typescriptConfig,
  // Prettier Config
  ...prettierConfig,
];
