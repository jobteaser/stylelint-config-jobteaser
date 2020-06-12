module.exports = {
  parser: "babel-eslint",
  plugins : [
    "stylelint-selector-bem-pattern"
  ],
  extends: [
    "stylelint-config-standard",
    "stylelint-config-property-sort-order-smacss",
    "./rules/base",
    "./rules/selector-bem-pattern",
  ].map(require.resolve),
  rules: {}
}
