<!-- @see: https://jira.almacareer.tech/browse/DS-1604 -->
<!--lint disable heading-capitalization-->

# Migration Guide

Introducing version 1 of the _spirit-form-validations_ package

> Please follow these steps to safely upgrade your Design System to Spirit Design System v1 components.

## Rename `validator_message` to `validation_text` [#DS-838](https://jira.lmc.cz/browse/DS-838) ([ba96ea6](https://github.com/lmc-eu/spirit-design-system/commit/ba96ea6))

Instead of the `validator_message` value of the `data-spirit-element` attribute, use `validation_text`.

- `<div data-spirit-element="validator_message">…</div>` → `<div data-spirit-element="validation_text">…</div>`

---

Please refer back to these instructions or reach out to our team if you encounter any issues during migration.
