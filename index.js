module.exports = {
  parser: "babel-eslint",
  extends: [
    "stylelint-config-standard",
    "./rules/base",
    "./rules/order",
    "./rules/selector-bem-pattern",
  ].map(require.resolve),
  plugins : [
    "stylelint-order",
    "stylelint-selector-bem-pattern"
  ],
  rules: {}
}
