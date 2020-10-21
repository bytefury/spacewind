module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/recommended',
    'eslint:recommended',
    'prettier/vue',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 20,
        endOfLine: 'auto',
        multiline: {
          max: 1,
          allowFirstLine: false
        }
      }
    ]
  }
}
