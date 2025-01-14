module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier', 'stylelint-config-recommended'],
  plugins: ['stylelint-scss', 'stylelint-order'],
  ignoreFiles: ['node_modules/**', 'src/assets/fonts/**', 'src/assets/style/reset.css'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['extends', 'ignores', 'include', 'mixin', 'if', 'else', 'media', 'for', 'tailwind'],
      },
    ],
    "block-no-empty": null,
    "unit-allowed-list": ["em", "rem", "s"],
    'order/order': ['custom-properties', 'declarations'],
    'order/properties-order': ['width', 'height'],
  },
}
