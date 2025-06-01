import js from '@eslint/js';
// importPlugin, jsxA11y 추가
import importPlugin from 'eslint-plugin-import';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import prettier from 'eslint-plugin-prettier';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';

export default [
  {
    ignores: ['dist', 'node_modules'],
  },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: globals.browser,
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      prettier,
      'jsx-a11y': jsxA11y,
      import: importPlugin,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...jsxA11y.configs.recommended.rules,
      ...importPlugin.configs.recommended.rules,

      'prettier/prettier': [
        'error',
        {
          endOfLine: 'auto',
          singleQuote: true,
          trailingComma: 'all',
          tabWidth: 2,
          useTabs: false,
        },
      ],

      'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx'] }],
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'import/no-unresolved': 'off',
      'no-unused-vars': ['warn', { varsIgnorePattern: '^[A-Z_]' }],
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'no-var': 'warn', // ← var 사용하면 경고
      'prefer-const': 'warn', // ← const 쓸 수 있을 때 let 쓰면 경고
      'import/order': [
        'warn',
        {
          // ← import 순서 관리
          groups: ['builtin', 'external', 'internal'],
          pathGroups: [
            {
              pattern: 'react',
              group: 'external',
              position: 'before',
            },
          ],
          pathGroupsExcludedImportTypes: ['react'],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        alias: {
          map: [
            ['@', './src/'],
            ['@components', './src/components'],
            ['@pages', './src/pages'],
            ['@api', './src/api'],
            ['@hooks', './src/hooks'],
            ['@icons', './src/assets/icons'],
            ['@images', './src/assets/images'],
          ],
          extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
        },
      },
    },
  },
];
