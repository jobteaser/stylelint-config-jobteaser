module.exports = {
  rules: {
    "at-rule-empty-line-before": [ "always",
      {
        "ignoreAtRules": [ "import", "apply", "custom-media" ]
      }
    ],
    "rule-empty-line-before": [ "always-multi-line",
      {
        "except": [ "first-nested" ],
        "ignore": [ "after-comment" ]
      }
    ],
    "color-hex-case": "lower",
    "color-hex-length": "long",
    "comment-empty-line-before": null,
    "comment-whitespace-inside": "always",
    "custom-property-empty-line-before": null,
    "declaration-empty-line-before": null,
    "function-calc-no-unspaced-operator": null,
    "function-whitespace-after": null,
    "no-descending-specificity": null,
    "selector-list-comma-newline-after": "always-multi-line"
  }
}
