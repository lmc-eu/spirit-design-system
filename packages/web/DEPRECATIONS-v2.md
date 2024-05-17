# Deprecations List

Following deprecations and feature flags will be removed in version 2 of the _spirit-web_ package.

> Please follow these steps to safely upgrade your design system to Spirit Design System v2 components.

[What are deprecations?][readme-deprecations]

[What are feature flags?][readme-feature-flags]

## Feature Flags

### Alert Bordered

The feature flag enabling the bordered variant of alert will be removed and the bordered variant will
be enabled by default.

## Deprecations

### Tooltip and Dropdown Placements

The `Tooltip` and `Dropdown` components will no longer support non-flows relative placements.

Also, placement classes for Tooltip and Dropdown will be removed.

#### Migration Guide

Instead of using `Tooltip--top`/`Dropdown--top` or `Tooltip--topLeft`/`Dropdown--topLeft`,
use data attribute like`data-spirit-placement="top"` or `data-spirit-placement="top-start"`.
See [Placement dictionary][dictionary-placement] for more details.

- `.Tooltip--topLeft` → `data-spirit-placement="top-start"`
- `.Tooltip--top` → `data-spirit-placement="top"`
- `.Tooltip--topRight` → `data-spirit-placement="top-end"`
- `.Tooltip--rightTop` → `data-spirit-placement="right-start"`
- `.Tooltip--right` → `data-spirit-placement="right"`
- `.Tooltip--rightBottom` → `data-spirit-placement="right-end"`
- `.Tooltip--bottomRight` → `data-spirit-placement="bottom-end"`
- `.Tooltip--bottom` → `data-spirit-placement="bottom"`
- `.Tooltip--bottomLeft` → `data-spirit-placement="bottom-start"`
- `.Tooltip--leftBottom` → `data-spirit-placement="left-end"`
- `.Tooltip--left` → `data-spirit-placement="left"`
- `.Tooltip--leftTop` → `data-spirit-placement="left-start"`
- `.Dropdown--topLeft` → `data-spirit-placement="top-start"`
- `.Dropdown--top` → `data-spirit-placement="top"`
- `.Dropdown--topRight` → `data-spirit-placement="top-end"`
- `.Dropdown--rightTop` → `data-spirit-placement="right-start"`
- `.Dropdown--right` → `data-spirit-placement="right"`
- `.Dropdown--rightBottom` → `data-spirit-placement="right-end"`
- `.Dropdown--bottomRight` → `data-spirit-placement="bottom-end"`
- `.Dropdown--bottom` → `data-spirit-placement="bottom"`
- `.Dropdown--bottomLeft` → `data-spirit-placement="bottom-start"`
- `.Dropdown--leftBottom` → `data-spirit-placement="left-end"`
- `.Dropdown--left` → `data-spirit-placement="left"`
- `.Dropdown--leftTop` → `data-spirit-placement="left-start"`

### Modal (Non)Scrollable

The `.ModalDialog--nonScrollable` modifier will be removed and the ModalDialog will be made non-scrollable by default.

#### Migration Guide

In the new version, use the `.ModalDialog--scrollable` modifier class to make the ModalDialog scrollable.

- `.ModalDialog` → `.ModalDialog .ModalDialog--scrollable`

[readme-deprecations]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/README.md#deprecations
[readme-feature-flags]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/README.md#feature-flags
[dictionary-placement]: https://github.com/lmc-eu/spirit-design-system/blob/main/docs/DICTIONARIES.md#placement
