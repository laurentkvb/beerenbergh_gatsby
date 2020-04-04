module.exports = {
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier/@typescript-eslint',
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
  ],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
  settings: {
    'import/resolver': {
      'eslint-import-resolver-custom-alias': {
        alias: {
          '@components/*': './src/components/*',
          '@components': './src/components',
          '@models/*': './src/models/*',
          '@models': './src/models',
          '@utils/*': './src/utils/*',
          '@utils': './src/utils',
          '@images/*': './src/images/*'
        },
        "extensions": [".js", ".jsx", ".tsx",".ts"],

      },
      node: {
        extensions: ['.js', '.min.js', '.jsx', '.ts', '.tsx', '.d.ts'],
        moduleDirectory: ['node_modules', 'src/', 'node_modules/**'],
      },
    },
  },
  rules: {
    'import/no-extraneous-dependencies': [
      'off',
      { devDependencies: ['src/tests/**', '**/*.test.ts', '**/*.test.tsx'] },
    ],
    'jsx-a11y/no-static-element-interactions': ['off'],
    'jsx-a11y/click-events-have-key-events': ['off'],
    'react/sort-comp': ['off'],
    'import/no-cycle': 'warn',
    'import/extensions': ['off'],
    'jsx-a11y/control-has-associated-label': ['off'],
    '@typescript-eslint/no-empty-interface': ['warn'],
    '@typescript-eslint/no-non-null-assertion': ['off'],
    '@typescript-eslint/no-var-requires': ['off'],
    '@typescript-eslint/no-use-before-define': ['off'],
    'react/jsx-props-no-spreading': ['off'],
    'react/no-array-index-key': ['off'],
    'no-underscore-dangle': ['off'],
    'comma-dangle': ['off'],
    'import/order': ['off'],
    'object-curly-newline': ['off'],
    quotes: ['error', 'double'],
    '@typescript-eslint/quotes': ['off'],
    '@typescript-eslint/explicit-function-return-type': ['off'],
    'react/jsx-uses-react': 'error',
    'react/jsx-sort-props': ['off'],
    'react/prop-types': ['off'],
    'react/require-default-props': ['off'],
    'no-console': 'warn',
    'import/no-named-as-default': ['off'],
    'import/prefer-default-export': 'off',
    'arrow-parens': 'warn',
    'jsx-a11y/href-no-hash': ['off'],
    'react/jsx-filename-extension': ['off', { extensions: ['.js', '.jsx'] }],
    'max-len': [
      'warn',
      {
        code: 100,
        tabWidth: 4,
        comments: 80,
        ignoreComments: false,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
  },
};
